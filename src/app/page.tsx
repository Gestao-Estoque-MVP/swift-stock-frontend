import About from "@/components/Home/About/About";
import Contact from "@/components/Home/Contact/Contact";
import Footer from "@/components/Home/Footer/Footer";
import Header from "@/components/Home/Header/Header";
import Heading from "@/components/Home/Heading/Heading";

const HomePage = () => {
  return (
    <>
      <Header/>
      <main className="bg-white-primary">
        <Heading/>
        <About/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default HomePage