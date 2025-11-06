import * as React from "react";
import {
    Box,
    Grid,
    Button,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Divider
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckIcon from "@mui/icons-material/Check";



const Data = [
    {
        id: "1",
        Image: "/image/Pic1.png",
        Price: "500,000₹ / per month"
    },
    {
        id: "2",
        Image: "/image/Buy2.png",
        Price: "90,000₹ / Per month"
    },
    {
        id: "3",
        Image: "/image/pic3.png",
        Price: "500,000₹ / per month"
    },
    {
        id: "4",
        Image: "/image/Buy3.png",
        Price: "350,000₹ / Per month"
    },
    {
        id: "5",
        Image: "/image/pic5.png",
        Price: "500,000₹ / per month"
    },
    {
        id: "6",
        Image: "/image/Buy4.png",
        Price: "90,000₹ / Per month"
    },
    {
        id: "7",
        Image: "/image/pic7.png",
        Price: "90,000₹ / Per month"
    },
    {
        id: "8",
        Image: "/image/pic8.png",
        Price: "500,000₹ / per month"
    },
    {
        id: "9",
        Image: "/image/pic2.png",
        Price: "90,000₹ / Per month"
    },
    {
        id: "10",
        Image: "/image/pic4.png",
        Price: "90,000₹ / Per month"
    },
    {
        id: "11",
        Image: "/image/Buy4.png",
        Price: "90,000₹ / Per month"
    },
    {
        id: "12",
        Image: "/image/Buy6.png",
        Price: "90,000₹ / Per month"
    },
]



const chipSx = {
    borderRadius: 2,
    textTransform: "none",
    px: 1.5,
    borderColor: "divider",
    color: "text.primary",
    "&:hover": { borderColor: "text.secondary", backgroundColor: "action.hover" }
};


function useMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    return {
        anchorEl,
        open: Boolean(anchorEl),
        handleOpen: (e) => setAnchorEl(e.currentTarget),
        handleClose: () => setAnchorEl(null)
    };
}


function FilterMenu({ label, options, value, onChange, multiple = false, buttonWidth }) {
    const { anchorEl, open, handleOpen, handleClose } = useMenu();

    const handleSelect = (opt) => {
        if (!multiple) {
            onChange(opt);
            handleClose();
        } else {
            const exists = value.includes(opt);
            const next = exists ? value.filter((v) => v !== opt) : [...value, opt];
            onChange(next);
        }
    };

    const buttonLabel = multiple
        ? (value?.length ? `${label}: ${value.join(", ")}` : label)
        : (value ? `${label}: ${value}` : label);

    return (
        <>
            <Button
                variant="outlined"
                size="small"
                endIcon={<KeyboardArrowDownIcon fontSize="small" />}
                onClick={handleOpen}
                sx={{ ...chipSx, minWidth: buttonWidth }}
                fullWidth
            >
                {buttonLabel}
            </Button>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
                {options.map((opt) => {
                    const selected = multiple ? value.includes(opt) : value === opt;
                    return (
                        <MenuItem key={opt} onClick={() => handleSelect(opt)}>
                            {multiple && (
                                <ListItemIcon sx={{ minWidth: 28 }}>
                                    {selected ? <CheckIcon fontSize="small" /> : null}
                                </ListItemIcon>
                            )}
                            <ListItemText primaryTypographyProps={{ fontSize: 14 }} primary={opt} />
                            {!multiple && selected ? (
                                <ListItemIcon sx={{ minWidth: 28 }}>
                                    <CheckIcon fontSize="small" />
                                </ListItemIcon>
                            ) : null}
                        </MenuItem>
                    );
                })}
            </Menu>
        </>
    );
}

const Buy = () => {
    const [filters, setFilters] = React.useState({
        listing: "",
        price: "",
        type: "",
        bedrooms: [],
        furnishing: "",
        available: "",
        lease: ""
    });
    const set = (k) => (v) => setFilters((f) => ({ ...f, [k]: v }));

    const clearAll = () =>
        setFilters({
            listing: "",
            price: "",
            type: "",
            bedrooms: [],
            furnishing: "",
            available: "",
            lease: ""
        });

    return (
        <>

            <Box sx={{ mt: "10px", padding: { xs: "0px 20px", md: "0px 75px" } }}>
                <Box
                    sx={{
                        backgroundImage: `linear-gradient(#00000033, #00000033), url('/image/Buy1.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        // height: "580px",
                        height: { xs: "380px", md: "362px" },
                        borderRadius: "30px",
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        style={{
                            fontFamily: "Afacad",
                            fontWeight: 600,
                            fontSize: "60px",
                            textTransform: "capitalize",
                            color: "#FFFFFF",
                            textAlign: "center",
                        }}
                    >
                        Buy
                    </Typography>
                    <Typography
                        style={{
                            fontFamily: "Afacad",
                            fontWeight: 400,
                            fontSize: "18px",
                            color: "#202020",
                            textAlign: "center",
                            backgroundColor: "#FFFFFF",
                            width: "150px",
                            height: "30px",
                            borderRadius: "26px",
                            paddingTop: "2px"

                        }}
                    >
                        Home / <span style={{ color: "#2A6BE5" }}>Buy</span>
                    </Typography>
                </Box>
            </Box>



            <Box sx={{ padding: { xs: "0px 20px", md: "0px 75px" }, mt: "45px" }}>
                <Grid
                    container
                    spacing={1.5}
                    sx={{ flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap" } }}
                >
                    <Grid item size={{ xs: 6, sm: 4 }} >
                        <FilterMenu
                            label="For Sale"
                            options={["For Sale", "For Rent"]}
                            value={filters.listing}
                            onChange={set("listing")}
                        />
                    </Grid>

                    <Grid item size={{ xs: 6, sm: 4 }}>
                        <FilterMenu
                            label="Price"
                            options={["Any", "Under $250k", "$250k–$500k", "$500k–$1M", "$1M+"]}
                            value={filters.price}
                            onChange={set("price")}
                            buttonWidth={120}
                        />
                    </Grid>

                    <Grid item size={{ xs: 6, sm: 4 }}>
                        <FilterMenu
                            label="Property Type"
                            options={["Any", "House", "Condo", "Townhouse", "Land"]}
                            value={filters.type}
                            onChange={set("type")}
                            buttonWidth={150}
                        />
                    </Grid>

                    <Grid item size={{ xs: 6, sm: 4 }}>
                        <FilterMenu
                            label="Bedrooms"
                            options={["Studio", "1", "2", "3", "4+"]}
                            value={filters.bedrooms}
                            onChange={set("bedrooms")}
                            multiple
                            buttonWidth={130}
                        />
                    </Grid>

                    <Grid item size={{ xs: 6, sm: 4 }}>
                        <FilterMenu
                            label="Furnishing Status"
                            options={["Any", "Furnished", "Unfurnished", "Part-furnished"]}
                            value={filters.furnishing}
                            onChange={set("furnishing")}
                            buttonWidth={170}
                        />
                    </Grid>

                    <Grid item size={{ xs: 6, sm: 4 }}>
                        <FilterMenu
                            label="Available"
                            options={["Any", "Now", "Next 7 days", "Next 30 days"]}
                            value={filters.available}
                            onChange={set("available")}
                            buttonWidth={120}
                        />
                    </Grid>

                    <Grid item size={{ xs: 6, sm: 4 }}>
                        <FilterMenu
                            label="Lease Type"
                            options={["Any", "Short-term", "Long-term"]}
                            value={filters.lease}
                            onChange={set("lease")}
                            buttonWidth={130}
                        />
                    </Grid>

                    <Grid item size={{ xs: 6, sm: 4 }}>
                        <Typography
                            role="button"
                            tabIndex={0}
                            onClick={clearAll}
                            onKeyDown={(e) => e.key === "Enter" && clearAll()}
                            sx={{
                                px: 1,
                                py: 0.5,
                                borderRadius: 2,
                                cursor: "pointer",
                                color: "text.secondary",
                                "&:hover": { backgroundColor: "action.hover" },
                                fontSize: 14,
                                display: "inline-block"
                            }}
                        >
                            Clear all
                        </Typography>
                    </Grid>
                </Grid>
            </Box>



            <Box sx={{ padding: { xs: "0px 20px", md: "0px 75px" }, }}>
                <Grid container spacing={2} sx={{ marginTop: { xs: "20px", md: "20px" } }}>
                    {
                        Data.map((item, index) => {
                            return (
                                <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index} mt={2}>
                                    <Box sx={{ width: "100%" }}>
                                        <Box sx={{ position: "relative", width: "100%" }}>
                                            <img src={item.Image} style={{ width: "100%", height: "285px", objectFit: "cover", borderRadius: "8px" }} />
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    top: "12px",
                                                    left: "12px",
                                                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                                                    color: "#202020",
                                                    padding: "6px 14px",
                                                    borderRadius: "6px",
                                                    fontFamily: "Afacad",
                                                    fontWeight: 500,
                                                    fontSize: "14px",
                                                    zIndex: 1,
                                                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                                                }}
                                            >
                                                For Sale
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <img src="/image/Bed.png" />
                                                <Typography sx={{
                                                    fontFamily: "Afacad",
                                                    fontWeight: 400,
                                                    fontSize: "16px",
                                                    color: "#676767",
                                                    marginLeft: "5px"
                                                }}>
                                                    Bed 2
                                                </Typography>
                                            </Box>
                                            <Divider orientation="vertical" sx={{ height: "40px", marginX: "10px", backgroundColor: "#E0E0E0" }} />
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <img src="/image/Bath.png" />
                                                <Typography sx={{
                                                    fontFamily: "Afacad",
                                                    fontWeight: 400,
                                                    fontSize: "16px",
                                                    color: "#676767",
                                                    marginLeft: "5px"
                                                }}>
                                                    Bath 2
                                                </Typography>
                                            </Box>
                                            <Divider orientation="vertical" sx={{ height: "40px", marginX: "10px", backgroundColor: "#E0E0E0" }} />

                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <img src="/image/squ.png" />
                                                <Typography sx={{
                                                    fontFamily: "Afacad",
                                                    fontWeight: 400,
                                                    fontSize: "16px",
                                                    color: "#676767",
                                                    marginLeft: "5px"
                                                }}>
                                                    1520 sqft
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Divider sx={{ backgroundColor: "#676767", mt: "10px" }} />

                                        <Box>
                                            <Typography sx={{
                                                fontFamily: "Afacad",
                                                fontWeight: 600,
                                                fontSize: "25px",
                                                color: "#202020",
                                                marginTop: "8px"
                                            }}>
                                                Crestview Luxe Homes
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', mt: "10px" }}>
                                            <Typography
                                                style={{
                                                    fontFamily: "Afacad",
                                                    fontWeight: 500,
                                                    fontSize: "18px",
                                                    color: "#202020",
                                                    lineHeight: "100%",
                                                }}>

                                                {item.Price}
                                                <Typography
                                                    style={{
                                                        fontFamily: "Afacad",
                                                        fontWeight: 400,
                                                        fontSize: "16px",
                                                        color: "#676767",
                                                        lineHeight: "100%",
                                                        marginTop: "15px"
                                                    }}>

                                                    Ahmedabad
                                                </Typography>
                                            </Typography>
                                            <Box sx={{ display: 'flex', gap: "10px" }}>
                                                <img src="/image/arrow.png" style={{ width: "80%", height: "80%" }} />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </Box>



        </>
    );
}



export default Buy;