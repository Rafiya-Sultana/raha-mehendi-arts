import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box
                sx={{
                    my: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 1,
                }}
            >
                <img src="/logo.png" alt="Logo" style={{ height: 50 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                    Raha Mehendi Arts
                </Typography>
            </Box>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton component={Link} to={item.path} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex',flexDirection: 'column', minHeight: '100vh' }}>
            <CssBaseline />
            <AppBar
                component="nav"
                sx={{
                    backgroundColor: '#779542',
                    position: 'fixed',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* Left - Logo & Brand */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { sm: 'none' }, mr: 1 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <img src="/logo.png" alt="Logo" style={{ height: 50 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                fontFamily: 'serif',
                                fontSize: { xs: '1.2rem', sm: '1.8rem', md: '2.2rem' },
                                color: '#fff',
                            }}
                        >
                            Raha Mehendi Arts
                        </Typography>
                    </Box>

                    {/* Right - Nav Items */}
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                component={Link}
                                to={item.path}
                                sx={{
                                    color: '#fff',
                                    fontWeight: 500,
                                    fontSize: '1rem',
                                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Drawer for Mobile */}
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>

            {/* Main content */}
            <Box component="main" sx={{ p: 3, width: '100%' }}>
                <Toolbar />
                {/* Placeholder content */}
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;
