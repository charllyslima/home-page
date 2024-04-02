import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "@/layouts/Layout";
import About from "@/pages/About";
import Resume from "@/pages/Resume/Resume";
import Works from "@/pages/Works";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";

const AppRouter: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Layout><About/></Layout>}/>
            <Route path="/about" element={<Layout><About/></Layout>}/>
            <Route path="/resume" element={<Layout><Resume/></Layout>}/>
            <Route path="/works" element={<Layout><Works/></Layout>}/>
            <Route path="/blog" element={<Layout><Blog/></Layout>}/>
            <Route path="/contact" element={<Layout><Contact/></Layout>}/>
        </Routes>
    </Router>
);

export default AppRouter;
