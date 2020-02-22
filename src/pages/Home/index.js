import React from 'react';

import Header from '../../components/Header';
import Intro from '../../components/Intro';
import Areas from '../../components/Areas';
import About from '../../components/About';
import Work from '../../components/Work';
import Footer from '../../components/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <Intro />
            <Areas />
            <About />
            <Work />
            <Footer />
        </>
    );
}
