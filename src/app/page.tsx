import About from "@/components/Home/About/About";
import Competencies from "@/components/Home/Competencies/Competencies";
import Contact from "@/components/Home/Contact/Contact";
import Footer from "@/components/Home/Footer/Footer";
import Header from "@/components/Home/Header/Header";
import Heading from "@/components/Home/Heading/Heading";
import HomeForm from "@/components/Home/HomeForm/HomeForm";
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