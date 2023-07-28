import About from "@/components/Home/About/About";
import Contact from "@/components/Home/Contact/Contact";
import Footer from "@/components/Home/Footer/Footer";
import Header from "@/components/Home/Header/Header";
import Heading from "@/components/Home/Heading/Heading";
import HomeForm from "@/components/Home/HomeForm/HomeForm";

const HomePage = () => {
  return (
    <>
      <Header/>
      <main className="bg-white-primary">
        <Heading/>
        <About/>
        <HomeForm/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default HomePage