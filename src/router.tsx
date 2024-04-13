import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from "@/layouts/Layout";
import About from "@/pages/About";
import Resume from "@/pages/Resume/Resume";
import Works from "@/pages/Works";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import WebDeveloper from "@/pages/Resume/components/WebDeveloper";
import Transition from "@/components/Transition";
import Database from "@/pages/Resume/components/Database";
import Devops from "@/pages/Resume/components/Devops";
import Frontend from "@/pages/Resume/components/Frontend";
import Backend from "@/pages/Resume/components/Backend";

const AppRouter: React.FC = () => (
    <Router basename="/home-page">
        <Routes>
            <Route path="/" element={<Layout><About/></Layout>}/>
            <Route path="/about" element={<Layout><About/></Layout>}/>
            <Route path="/resume" element={<Layout><Resume/></Layout>}>
                <Route path="web-development" element={<Transition><WebDeveloper/></Transition>}/>
                <Route path="database" element={<Transition><Database/></Transition>}/>
                <Route path="devops" element={<Transition><Devops/></Transition>}/>
                <Route path="frontend" element={<Transition><Frontend/></Transition>}/>
                <Route path="backend" element={<Transition><Backend/></Transition>}/>
            </Route>
            <Route path="/works" element={<Layout><Works/></Layout>}/>
            <Route path="/blog" element={<Layout><Blog/></Layout>}/>
            <Route path="/contact" element={<Layout><Contact/></Layout>}/>
        </Routes>
    </Router>
);

export default AppRouter;
