import About from '@/page/Home/About/About';
import Competencies from '@/page/Home/Competencies/Competencies';
import Contact from '@/page/Home/Contact/Contact';
import Footer from '@/page/Home/Footer/Footer';
import Header from '@/page/Home/Header/Header';
import Heading from '@/page/Home/Heading/Heading';
import HomeForm from '@/page/Home/HomeForm/HomeForm';
import { Analytics } from '@vercel/analytics/react';


const HomePage = () => {
  return (
    <>
      <Header/>
      <main className="bg-white-primary">
        <Heading/>
        <About/>
        <Competencies/>
        {/* <HomeForm/> */}
        <Contact/>
        <Analytics />
      </main>
      <Footer/>
    </>
  );
};

export default HomePage;