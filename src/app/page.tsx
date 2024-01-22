
import About from '../../my-app/src/page/Home/About/About';
import Competencies from '../../my-app/src/page/Home/Competencies/Competencies';
import Contact from '../../my-app/src/page/Home/Contact/Contact';
import Footer from '../../my-app/src/page/Home/Footer/Footer';
import Header from '../../my-app/src/page/Home/Header/Header';
import Heading from '../../my-app/src/page/Home/Heading/Heading';
import HomeForm from '../../my-app/src/page/Home/HomeForm/HomeForm';
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