import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                width: '100vw',
                backgroundColor: '#6B8E23',
                color: '#fff',
                py: 2,
                px: 2,
                textAlign: 'center',
                position: 'relative',
                left: 0,
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={4} alignItems="flex-start">
                    {/* Brand + Logo + Description */}
                    <Grid item xs={12} md={4}>
                        <Box display="flex" alignItems="center" mb={1}>
                            <img src="/logo.png" alt="Logo" style={{ height: 40, marginRight: 10 }} />
                            <Typography variant="h6">Raha Mehendi Arts</Typography>
                        </Box>
                        <Typography variant="body2">
                            Specializing in bridal, party, and traditional mehendi with elegant, intricate designs.
                            Serving quality and tradition since 2005.
                        </Typography>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Box display="flex" flexDirection="column" gap={0.5}>
                            <Link href="/" color="inherit" underline="none">Home</Link>
                            <Link href="/about" color="inherit" underline="none">About</Link>
                            <Link href="/gallery" color="inherit" underline="none">Gallery</Link>
                            <Link href="/services" color="inherit" underline="none">Services</Link>
                            <Link href="/contact" color="inherit" underline="none">Contact</Link>
                        </Box>
                    </Grid>

                    {/* Social Media Icons aligned right */}
                    <Grid item xs={12} sm={6} md={4} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box>
                            <IconButton href="https://facebook.com" target="_blank" sx={{ color: '#fff' }}>
                                <Facebook />
                            </IconButton>
                            <IconButton href="https://instagram.com" target="_blank" sx={{ color: '#fff' }}>
                                <Instagram />
                            </IconButton>
                            <IconButton href="https://wa.me/your-number" target="_blank" sx={{ color: '#fff' }}>
                                <WhatsApp />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>

                {/* Bottom copyright */}
                <Typography variant="body2" align="center" sx={{ mt: 4 }}>
                    © {new Date().getFullYear()} Raha Mehendi Arts. All rights reserved.
                </Typography>
            </Container>

        </Box>
    );
};

export default Footer;
