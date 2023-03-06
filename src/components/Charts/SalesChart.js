import { Box, Button, FormControl, InputLabel, ListItemIcon, ListItemText, Menu, MenuItem, Select, Typography } from '@mui/material';
import React from 'react'
import Charts from 'react-apexcharts'
import './SalesChartCss.css'
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


export const SalesChart = ({SalesChartSeries=[],label='',text="Sales Charts",height,hasMenu=true}) => {


    var options = {
        // title: {
        //     text: text,
        //     align: 'left',
        //     style: {
        //         fontFamily: 'Outfit',
        //         fontWeight: '600',
        //         fontSize: '18px',
        //         lineHeight: '26px'
        //     },
        // },
        markers: {
            colors: '#6A82CF',
            strokeColors: '#6A82CF',
            strokeWidth: 0,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
        },
        chart: {
            height: 380,
            width: "100%",
            type: "line",
            zoom: false,
            toolbar: {
                tools: {
                    download: false  //disable burgerMenu
                }
            }
        },
        // to set thickness of chart line
        stroke: {
            show: true,
            curve: 'straight',
            width: 1.5,
        }
        ,
        //for chart shoswing tooltip
        dataLabels: {
            enabled: true,
            style: {
                fontSize: '8px',
                  },
            background: {
                enabled: true,
                foreColor: '#6A82CF',
                padding: 0,
                borderRadius: 10,
                borderWidth: 0,
                borderColor: '#6A82CF',
                opacity: 1,
        },
            textAnchor: 'middle',
            offsetX: 0,
            offsetY: 0,
    },
        series: [{
            name: 'Order',
            // data: [11, 22, 32, 45, 67, 79, 81, 9, 58, 67,55,77,22,1,3,4],
            data: SalesChartSeries,
            style:{
                fontSize: '8px ', fontFamily: 'Outfit', background: 'red'
            }
             }],
        tooltip: {
            style: {
                background: '#2F549D',
            },
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
                return '<ul>' +
                    '<li > ' + data + '<b> Order </b> </li>' +
                    '</ul>';
            }
        },
        colors: [
            function ({ value, seriesIndex, dataPointIndex, w }) {
                if (dataPointIndex) {
                    return "#6A82CF";
                } else {
                    return "#6A82CF";
                }
            }
        ]
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [menu, setMenu] = React.useState('Select')
    const [checkbox, setCheckbox] = React.useState(false);
    const [checkbox2, setCheckbox2] = React.useState(false);
    const [checkbox3, setCheckbox3] = React.useState(false);

    const handleIcon = () => {
        setCheckbox(true);
        setCheckbox2(false);
        setCheckbox3(false);

    }
    const handleIcon2 = () => {
        setCheckbox(false);
        setCheckbox2(true);
        setCheckbox3(false);

    }
    
    return (
        <Box padding={2} height={height? height : '390px' }>
            {/* {
                hasMenu && (
                    <Box display={"flex"} alignItems={'center'} justifyContent={'space-between'}>
                        <Box>

                        </Box>
                        <Button
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            endIcon={<KeyboardArrowDownIcon sx={{ fill: '#2B817B ' }} />}
                            sx={{
                                color: "#545359",
                                marginLeft: '10px',
                                textTransform: "capitalize",
                                border: '1px solid #E1E1E6',
                                width: '76px',
                                borderRadius: '6px',
                                fontSize: {
                                    xl: "14px",
                                    lg: "14px",
                                    md: "13px",
                                    sm: "12px",
                                    xs: "12px",
                                },
                                fontWeight: "500",
                                pl: "0px",
                                width: '100px'
                            }}

                        >
                            {menu}
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            open={open}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                            sx={{
                                border: "1px solid #E1E1E6",
                                borderRadius: "6px",
                            }}
                        >
                            <MenuItem
                                sx={{
                                    color: "#9EA3AE",
                                    width: "120px",
                                    pt: "0px",
                                    pb: "0px",
                                    fontSize: "12px",
                                    fontWeight: "400",
                                }}
                                onClick={(e) => {
                                    setMenu('Select');
                                    handleClose(); 
                                }}
                            >
                                <ListItemText primary={'Select'}
                                    primaryTypographyProps={{ fontSize: '14px', fontFamily: "outfit", fontWeight: true ? '600' : '400', }} />

                            </MenuItem>
                            <MenuItem
                                sx={{
                                    color: "#9EA3AE",
                                    width: "120px",
                                    pt: "0px",
                                    pb: "0px",
                                    fontSize: "12px",
                                    fontWeight: "400",
                                }}
                                onClick={(e) => {
                                    setMenu('Month');
                                    handleClose(); handleIcon();
                                }}
                            >
                                <ListItemText primary={'Month'}
                                    primaryTypographyProps={{ fontSize: '14px', fontFamily: "outfit", fontWeight: true ? '600' : '400', }} />

                                <ListItemIcon>
                                    {checkbox ? (
                                        <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
                                    ) : ''}
                                </ListItemIcon>

                            </MenuItem>

                            <MenuItem
                                sx={{
                                    color: "#9EA3AE",
                                    width: "120px",
                                    pt: "0px",
                                    pb: "0px",
                                    fontSize: "12px",
                                    fontWeight: "400",
                                }}
                                onClick={(e) => {
                                    setMenu('Daily');
                                    handleClose(); handleIcon2();
                                }}
                            >
                                <ListItemText primary={'Daily'}
                                    primaryTypographyProps={{ fontSize: '14px', fontFamily: "outfit", fontWeight: true ? '600' : '400', }} />

                                <ListItemIcon>
                                    {checkbox2 ? (
                                        <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
                                    ) : ''}
                                </ListItemIcon>

                            </MenuItem>
                        </Menu>
                    </Box>
                )
            } */}

            {
                hasMenu && (
                    <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",p:"10px",py:"20px"}}>
                        <Box>
                          <Typography sx={{fontSize:{xs:"14px",md:"16px",lg:'20px'},fontWeight:"500"}}>{label && label}</Typography>
                        </Box>
                        <Button
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            endIcon={<KeyboardArrowDownIcon sx={{ fill: '#2B817B ' }} />}
                            sx={{
                                color: "#545359",
                                marginLeft: '10px',
                                textTransform: "capitalize",
                                border: '1px solid #E1E1E6',
                                width: '76px',
                                borderRadius: '6px',
                                fontSize: {
                                    xl: "14px",
                                    lg: "14px",
                                    md: "13px",
                                    sm: "12px",
                                    xs: "12px",
                                },
                                fontWeight: "500",
                                pl: "0px",
                                width: '100px'
                            }}

                        >
                            {menu}
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            open={open}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                            sx={{
                                border: "1px solid #E1E1E6",
                                borderRadius: "6px",
                            }}
                        >
                            <MenuItem
                                sx={{
                                    color: "#9EA3AE",
                                    width: "120px",
                                    pt: "0px",
                                    pb: "0px",
                                    fontSize: "12px",
                                    fontWeight: "400",
                                }}
                                onClick={(e) => {
                                    setMenu('Select');
                                    handleClose(); 
                                }}
                            >
                                <ListItemText primary={'Select'}
                                    primaryTypographyProps={{ fontSize: '14px', fontFamily: "outfit", fontWeight: true ? '600' : '400', }} />

                            </MenuItem>
                            <MenuItem
                                sx={{
                                    color: "#9EA3AE",
                                    width: "120px",
                                    pt: "0px",
                                    pb: "0px",
                                    fontSize: "12px",
                                    fontWeight: "400",
                                }}
                                onClick={(e) => {
                                    setMenu('Month');
                                    handleClose(); handleIcon();
                                }}
                            >
                                <ListItemText primary={'Month'}
                                    primaryTypographyProps={{ fontSize: '14px', fontFamily: "outfit", fontWeight: true ? '600' : '400', }} />

                                <ListItemIcon>
                                    {checkbox ? (
                                        <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
                                    ) : ''}
                                </ListItemIcon>

                            </MenuItem>

                            <MenuItem
                                sx={{
                                    color: "#9EA3AE",
                                    width: "120px",
                                    pt: "0px",
                                    pb: "0px",
                                    fontSize: "12px",
                                    fontWeight: "400",
                                }}
                                onClick={(e) => {
                                    setMenu('Daily');
                                    handleClose(); handleIcon2();
                                }}
                            >
                                <ListItemText primary={'Daily'}
                                    primaryTypographyProps={{ fontSize: '14px', fontFamily: "outfit", fontWeight: true ? '600' : '400', }} />

                                <ListItemIcon>
                                    {checkbox2 ? (
                                        <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
                                    ) : ''}
                                </ListItemIcon>

                            </MenuItem>
                        </Menu>
                    </Box>
                )
            }

            {/* <Box display={"flex"} alignItems={'center'} justifyContent={'space-between'}>
                <Box>

                </Box>
                <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon sx={{ fill: '#2B817B ' }} />}
                    sx={{
                        color: "#545359",
                        marginLeft: '10px',
                        textTransform: "capitalize",
                        border: '1px solid #E1E1E6',
                        width: '76px',
                        borderRadius: '6px',
                        fontSize: {
                            xl: "14px",
                            lg: "14px",
                            md: "13px",
                            sm: "12px",
                            xs: "12px",
                        },
                        fontWeight: "500",
                        pl: "0px",
                        width: '100px'
                    }}

                >
                    {menu}
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    open={open}
                    MenuListProps={{
                        "aria-labelledby": "basic-button",
                    }}
                    sx={{
                        border: "1px solid #E1E1E6",
                        borderRadius: "6px",
                    }}
                >
                    <MenuItem
                        sx={{
                            color: "#9EA3AE",
                            width: "120px",
                            pt: "0px",
                            pb: "0px",
                            fontSize: "12px",
                            fontWeight: "400",
                        }}
                        onClick={(e) => {
                            setMenu('Name');
                            handleClose(); handleIcon();
                        }}
                    >
                        <ListItemText primary={'Month'}
                            primaryTypographyProps={{ fontSize: '14px', fontFamily: "outfit", fontWeight: true ? '600' : '400', }} />

                        <ListItemIcon>
                            {checkbox ? (
                                <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
                            ) : ''}
                        </ListItemIcon>

                    </MenuItem>

                    <MenuItem
                        sx={{
                            color: "#9EA3AE",
                            width: "120px",
                            pt: "0px",
                            pb: "0px",
                            fontSize: "12px",
                            fontWeight: "400",
                        }}
                        onClick={(e) => {
                            setMenu('Daily');
                            handleClose(); handleIcon2();
                        }}
                    >
                        <ListItemText primary={'Daily'}
                            primaryTypographyProps={{ fontSize: '14px', fontFamily: "outfit", fontWeight: true ? '600' : '400', }} />

                        <ListItemIcon>
                            {checkbox2 ? (
                                <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
                            ) : ''}
                        </ListItemIcon>

                    </MenuItem>
                </Menu>
            </Box> */}
            <Charts options={options}
                series={options.series} type="line" width="100%" height={height? height : '390px' } />
        </Box>
    )
}
