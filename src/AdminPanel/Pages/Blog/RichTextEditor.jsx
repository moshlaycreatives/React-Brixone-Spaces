import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Toolbar,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
  Paper,
  Typography,
  TextField,
  Button,
  Stack
} from '@mui/material';
import {
  Undo,
  Redo,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  StrikethroughS,
  Subscript,
  Superscript,
  Code,
  FormatListBulleted,
  FormatListNumbered,
  Link,
  Image,
  FormatQuote,
  HorizontalRule,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
  FormatColorText,
  FormatColorFill
} from '@mui/icons-material';

const RichTextEditor = ({ value, onChange, placeholder = "Start writing..." }) => {
  const [text, setText] = useState(value || '');
  const [textStyle, setTextStyle] = useState('Normal text');
  const [alignment, setAlignment] = useState('left');
  const [formatting, setFormatting] = useState({
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
    subscript: false,
    superscript: false
  });
  
  const editorRef = useRef(null);

  // Update internal state when external value changes
  useEffect(() => {
    if (value !== undefined) {
      setText(value);
    }
  }, [value]);

  const textStyles = [
    'Normal text',
    'Heading 1',
    'Heading 2',
    'Heading 3',
    'Heading 4',
    'Heading 5',
    'Heading 6'
  ];

  const handleTextChange = (newText) => {
    setText(newText);
    if (onChange) {
      onChange(newText);
    }
  };

  // Get current selection from contentEditable
  const getSelection = () => {
    const selection = window.getSelection();
    if (selection.rangeCount === 0) return null;
    
    const range = selection.getRangeAt(0);
    const container = editorRef.current;
    
    if (!container.contains(range.commonAncestorContainer)) return null;
    
    return {
      range,
      selection,
      container
    };
  };

  // Apply formatting using document.execCommand (more reliable for contentEditable)
  const applyFormatting = (format) => {
    const sel = getSelection();
    if (!sel) return;

    const { range, selection } = sel;
    
    // Restore selection
    selection.removeAllRanges();
    selection.addRange(range);

    switch (format) {
      case 'bold':
        document.execCommand('bold', false, null);
        break;
      case 'italic':
        document.execCommand('italic', false, null);
        break;
      case 'underline':
        document.execCommand('underline', false, null);
        break;
      case 'strikethrough':
        document.execCommand('strikethrough', false, null);
        break;
      case 'subscript':
        document.execCommand('subscript', false, null);
        break;
      case 'superscript':
        document.execCommand('superscript', false, null);
        break;
      case 'code':
        document.execCommand('formatBlock', false, '<pre>');
        break;
      case 'quote':
        document.execCommand('formatBlock', false, '<blockquote>');
        break;
      default:
        break;
    }

    // Update the text content after formatting
    if (editorRef.current) {
      const newText = editorRef.current.innerHTML;
      handleTextChange(newText);
    }
  };

  const insertElement = (element) => {
    const sel = getSelection();
    if (!sel) return;

    const { range, selection } = sel;
    
    // Restore selection
    selection.removeAllRanges();
    selection.addRange(range);

    switch (element) {
      case 'link':
        const url = prompt('Enter URL:', 'https://');
        if (url) {
          document.execCommand('createLink', false, url);
        }
        break;
      case 'image':
        const imgUrl = prompt('Enter image URL:', 'https://');
        if (imgUrl) {
          document.execCommand('insertImage', false, imgUrl);
        }
        break;
      case 'codeBlock':
        document.execCommand('insertHTML', false, '<pre><code>Code here</code></pre>');
        break;
      case 'horizontalRule':
        document.execCommand('insertHorizontalRule', false, null);
        break;
      case 'bulletList':
        document.execCommand('insertUnorderedList', false, null);
        break;
      case 'numberedList':
        document.execCommand('insertOrderedList', false, null);
        break;
      default:
        break;
    }

    // Update the text content after insertion
    if (editorRef.current) {
      const newText = editorRef.current.innerHTML;
      handleTextChange(newText);
    }
  };

  const handleStyleChange = (style) => {
    setTextStyle(style);
    
    const sel = getSelection();
    if (!sel) return;

    const { range, selection } = sel;
    
    // Restore selection
    selection.removeAllRanges();
    selection.addRange(range);

    if (style.includes('Heading')) {
      const level = style.split(' ')[1];
      const tag = `h${level}`;
      document.execCommand('formatBlock', false, `<${tag}>`);
    } else if (style === 'Normal text') {
      document.execCommand('formatBlock', false, '<p>');
    }

    // Update the text content after style change
    if (editorRef.current) {
      const newText = editorRef.current.innerHTML;
      handleTextChange(newText);
    }
  };

  const handleAlignmentChange = (newAlignment) => {
    setAlignment(newAlignment);
    
    const sel = getSelection();
    if (!sel) return;

    const { range, selection } = sel;
    
    // Restore selection
    selection.removeAllRanges();
    selection.addRange(range);

    switch (newAlignment) {
      case 'left':
        document.execCommand('justifyLeft', false, null);
        break;
      case 'center':
        document.execCommand('justifyCenter', false, null);
        break;
      case 'right':
        document.execCommand('justifyRight', false, null);
        break;
      default:
        break;
    }

    // Update the text content after alignment change
    if (editorRef.current) {
      const newText = editorRef.current.innerHTML;
      handleTextChange(newText);
    }
  };

  // Apply subscript
  const applySubscript = () => {
    applyFormatting('subscript');
  };

  // Apply superscript
  const applySuperscript = () => {
    applyFormatting('superscript');
  };

  // Handle input changes
  const handleInput = () => {
    if (editorRef.current) {
      const newText = editorRef.current.innerHTML;
      handleTextChange(newText);
    }
  };

  // Handle paste to clean up formatting
  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
  };

  // Detect current formatting state
  useEffect(() => {
    if (editorRef.current) {
      // Check if content has headings
      const content = editorRef.current.innerHTML;
      if (content.includes('<h1>')) {
        setTextStyle('Heading 1');
      } else if (content.includes('<h2>')) {
        setTextStyle('Heading 2');
      } else if (content.includes('<h3>')) {
        setTextStyle('Heading 3');
      } else if (content.includes('<h4>')) {
        setTextStyle('Heading 4');
      } else if (content.includes('<h5>')) {
        setTextStyle('Heading 5');
      } else if (content.includes('<h6>')) {
        setTextStyle('Heading 6');
      } else {
        setTextStyle('Normal text');
      }

      // Check alignment
      if (content.includes('text-align: center')) {
        setAlignment('center');
      } else if (content.includes('text-align: right')) {
        setAlignment('right');
      } else {
        setAlignment('left');
      }
    }
  }, [text]);

  return (
    <Paper elevation={2} sx={{ width: '100%', maxWidth: '100%' }}>
      {/* Toolbar */}
      <Toolbar sx={{ 
        borderBottom: 1, 
        borderColor: 'divider',
        flexWrap: 'wrap',
        gap: 1
      }}>
        {/* Undo/Redo */}
        <Stack direction="row" spacing={0.5}>
          <IconButton 
            size="small"
            onClick={() => document.execCommand('undo', false, null)}
          >
            <Undo />
          </IconButton>
          <IconButton 
            size="small"
            onClick={() => document.execCommand('redo', false, null)}
          >
            <Redo />
          </IconButton>
        </Stack>

        <Divider orientation="vertical" flexItem />

        {/* Text Style Dropdown */}
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Text Style</InputLabel>
          <Select
            value={textStyle}
            label="Text Style"
            onChange={(e) => handleStyleChange(e.target.value)}
            size="small"
          >
            {textStyles.map((style) => (
              <MenuItem key={style} value={style}>
                {style}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Divider orientation="vertical" flexItem />

        {/* Alignment */}
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={(e, newAlignment) => newAlignment && handleAlignmentChange(newAlignment)}
          size="small"
        >
          <ToggleButton value="left">
            <FormatAlignLeft />
          </ToggleButton>
          <ToggleButton value="center">
            <FormatAlignCenter />
          </ToggleButton>
          <ToggleButton value="right">
            <FormatAlignRight />
          </ToggleButton>
        </ToggleButtonGroup>

        <Divider orientation="vertical" flexItem />

        {/* Color Options */}
        <IconButton size="small">
          <FormatColorText />
        </IconButton>
        <IconButton size="small">
          <FormatColorFill />
        </IconButton>

        <Divider orientation="vertical" flexItem />

        {/* Text Formatting */}
        <Stack direction="row" spacing={0.5}>
          <IconButton 
            size="small"
            onClick={() => applyFormatting('bold')}
          >
            <FormatBold />
          </IconButton>
          <IconButton 
            size="small"
            onClick={() => applyFormatting('italic')}
          >
            <FormatItalic />
          </IconButton>
          <IconButton 
            size="small"
            onClick={() => applyFormatting('underline')}
          >
            <FormatUnderlined />
          </IconButton>
          <IconButton 
            size="small"
            onClick={() => applyFormatting('strikethrough')}
          >
            <StrikethroughS />
          </IconButton>
        </Stack>

        <Stack direction="row" spacing={0.5}>
          <IconButton 
            size="small"
            onClick={applySubscript}
          >
            <Subscript />
          </IconButton>
          <IconButton 
            size="small"
            onClick={applySuperscript}
          >
            <Superscript />
          </IconButton>
          <IconButton 
            size="small"
            onClick={() => applyFormatting('code')}
          >
            <Code />
          </IconButton>
        </Stack>

        <Divider orientation="vertical" flexItem />

        {/* Lists */}
        <Stack direction="row" spacing={0.5}>
          <IconButton 
            size="small"
            onClick={() => insertElement('bulletList')}
          >
            <FormatListBulleted />
          </IconButton>
          <IconButton 
            size="small"
            onClick={() => insertElement('numberedList')}
          >
            <FormatListNumbered />
          </IconButton>
        </Stack>

        <Divider orientation="vertical" flexItem />

        {/* Insert Options */}
        <Stack direction="row" spacing={0.5}>
          <IconButton 
            size="small"
            onClick={() => insertElement('link')}
          >
            <Link />
          </IconButton>
          <IconButton 
            size="small"
            onClick={() => insertElement('image')}
          >
            <Image />
          </IconButton>
        </Stack>

        <Divider orientation="vertical" flexItem />

        {/* Special Content */}
        <Stack direction="row" spacing={0.5}>
          <IconButton 
            size="small"
            onClick={() => insertElement('codeBlock')}
          >
            <Code />
          </IconButton>
          <IconButton 
            size="small"
            onClick={() => applyFormatting('quote')}
          >
            <FormatQuote />
          </IconButton>
          <IconButton 
            size="small"
            onClick={() => insertElement('horizontalRule')}
          >
            <HorizontalRule />
          </IconButton>
        </Stack>
      </Toolbar>

      {/* WYSIWYG Editor Content */}
      <Box sx={{ p: 2, minHeight: '400px' }}>
        <Box
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          onInput={handleInput}
          onPaste={handlePaste}
          dangerouslySetInnerHTML={{
            __html: text || placeholder
          }}
          sx={{
            minHeight: '350px',
            padding: '16px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            outline: 'none',
            fontFamily: 'inherit',
            fontSize: '14px',
            lineHeight: '1.6',
            '&:focus': {
              borderColor: 'primary.main',
              boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
            },
            '& h1, & h2, & h3, & h4, & h5, & h6': {
              margin: '8px 0',
              lineHeight: '1.2'
            },
            '& p': {
              margin: '8px 0'
            },
            '& ul, & ol': {
              margin: '8px 0',
              paddingLeft: '24px'
            },
            '& li': {
              margin: '4px 0'
            },
            '& blockquote': {
              margin: '8px 0',
              padding: '8px 16px',
              borderLeft: '4px solid #ddd',
              backgroundColor: '#f9f9f9'
            },
            '& code': {
              backgroundColor: '#f5f5f5',
              padding: '2px 4px',
              borderRadius: '3px',
              fontFamily: 'monospace'
            },
            '& pre': {
              backgroundColor: '#f5f5f5',
              padding: '16px',
              borderRadius: '4px',
              overflowX: 'auto',
              margin: '8px 0'
            }
          }}
        />
      </Box>
    </Paper>
  );
};

export default RichTextEditor;
