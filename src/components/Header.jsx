import React from 'react';
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Toolbar, Box, styled, Typography } from '@mui/material';

const NavBar = styled(AppBar)`
    height: 55px;
    background: #2874f0;
`;

const Component = styled(Box)`
    margin-left: 12%;
    line-height: none;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`;



const Header = () => {

    const logourl = "https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const suburl = "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
    return (
        <NavBar>
            <Toolbar>
                <Component>
                    <img src={logourl} alt="logo" style={{ width: 75 }} />
                    <Box>
                        <SubHeading>
                            Explore Plus
                            <Box component='span'><img src={suburl} alt="sublogo" /></Box>
                        </SubHeading>
                    </Box>
                </Component>
            </Toolbar>
        </NavBar>
    )
}

export default Header;
