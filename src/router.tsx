import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from '@/layouts/Layout';
import DotLoader from '@/components/DotLoader';
import {ListRoutes} from "@/constants/ListRoutes";
import {domAnimation, LazyMotion, m} from "framer-motion";

// Lazy load the components
const About = lazy(() => import('@/pages/About/About'));
const Resume = lazy(() => import('@/pages/Resume/Resume'));
const Works = lazy(() => import('@/pages/Works'));
const Contact = lazy(() => import('@/pages/Contact'));

const AppRouter: React.FC = () => (
    <Router basename={ListRoutes.BASE_NAME}>
        <Layout>
            <Suspense fallback={<LazyMotion features={domAnimation}>
                <m.div animate={{opacity: 1}}><DotLoader/></m.div>
            </LazyMotion>}>
                <Routes>
                    <Route path={ListRoutes.DEFAULT} element={<About/>}/>
                    <Route path={ListRoutes.ABOUT} element={<About/>}/>
                    <Route path={ListRoutes.RESUME} element={<Resume/>}/>
                    <Route path={ListRoutes.WORKS} element={<Works/>}/>
                    <Route path={ListRoutes.CONTACT} element={<Contact/>}/>
                </Routes>
            </Suspense>
        </Layout>
    </Router>
);

export default AppRouter;
