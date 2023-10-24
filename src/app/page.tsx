
import About from '@/Pages/Home/About/About';
import Competencies from '@/Pages/Home/Competencies/Competencies';
import Contact from '@/Pages/Home/Contact/Contact';
import Footer from '@/Pages/Home/Footer/Footer';
import Header from '@/Pages/Home/Header/Header';
import Heading from '@/Pages/Home/Heading/Heading';
import HomeForm from '@/Pages/Home/HomeForm/HomeForm';
import {Analytics} from '@vercel/analytics/react';


const HomePage = () => {
  return (
    <>
      <Header/>
      <main className="bg-white-primary">
        <Heading/>
        <About/>
        <Competencies/>
        <HomeForm/>
        <Contact/>
        <Analytics />
      </main>
      <Footer/>
    </>
  )
}

export default HomePage