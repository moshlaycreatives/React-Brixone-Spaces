import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Stack
} from '@mui/material';
import RichTextEditor from './RichTextEditor';

const EditBlogs = () => {
  const [blogData, setBlogData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    tags: [],
    status: 'draft'
  });

  const [newTag, setNewTag] = useState('');

  const handleInputChange = (field, value) => {
    setBlogData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddTag = () => {
    if (newTag.trim() && !blogData.tags.includes(newTag.trim())) {
      setBlogData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setBlogData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = () => {
    console.log('Blog data to save:', blogData);
    // Here you would typically make an API call to save the blog
  };

  const handlePublish = () => {
    setBlogData(prev => ({ ...prev, status: 'published' }));
    handleSubmit();
  };

  return (
    <>
      <RichTextEditor
        value={blogData.content}
        onChange={(content) => handleInputChange('content', content)}
        placeholder="Start writing your blog content here... Use the toolbar to format your text!"
      />


    </>

  );
};

export default EditBlogs;