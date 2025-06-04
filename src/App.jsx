import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/HomePage';
import Gallery from './pages/GalleryPage';
import About from './pages/AboutMe';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';

export default function App() {
    return (
        <Router>
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Navbar />

                <Box component="main" sx={{ flexGrow: 1, p: 3}}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/testimonials" element={<Testimonials />} />
                    </Routes>
                </Box>

                <Footer />
            </Box>
        </Router>
    );
}
