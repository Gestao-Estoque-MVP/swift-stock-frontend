import About from '@/components/Pages/Home/About/About';
import { Analytics } from '@vercel/analytics/react';
import Competencies from '@/components/Pages/Home/Competencies/Competencies';
import HomeForm from '@/components/Pages/Home/HomeForm/HomeForm';
import Contact from '@/components/Pages/Home/Contact/Contact';
import Heading from '@/components/Pages/Home/Heading/Heading';
import Header from '@/components/Pages/Home/Header/Header';
import Footer from '@/components/Pages/Home/Footer/Footer';

const HomePage = () => {
    return (
        <>
            <Header />
            <main className="bg-white-primary">
                <Heading />
                <About />
                <Competencies />
                <HomeForm />
                <Contact />
                <Analytics />
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
