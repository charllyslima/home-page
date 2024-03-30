import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from "@/layouts/Layout";
import About from "@/pages/about";

const AppRouter: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Layout><About/></Layout>}/>
            <Route path="/resume" element={<Layout><About/></Layout>}/>
            <Route path="/works" element={<Layout><About/></Layout>}/>
            <Route path="/blog" element={<Layout><About/></Layout>}/>
            <Route path="/contact" element={<Layout><About/></Layout>}/>
        </Routes>
    </Router>
);

export default AppRouter;
