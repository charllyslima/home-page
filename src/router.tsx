import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/layouts/Layout';
import Loader from '@/components/Loader';

// Lazy load the components
const About = lazy(() => import('@/pages/About'));
const Resume = lazy(() => import('@/pages/Resume/Resume'));
const Works = lazy(() => import('@/pages/Works'));
const Contact = lazy(() => import('@/pages/Contact'));
const Blog = lazy(() => import('@/pages/Blog'));

const AppRouter: React.FC = () => (
    <Router basename="/home-page">
        <Layout>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Suspense>
        </Layout>
    </Router>
);

export default AppRouter;
