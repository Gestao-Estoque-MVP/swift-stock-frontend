import About from "@/components/Home/About/About";
import Footer from "@/components/Home/Footer/Footer";
import Header from "@/components/Home/Header/Header";
import Heading from "@/components/Home/Heading/Heading";

const HomePage = () => {
  return (
    <>
      <Header/>
      <main>
        <Heading/>
        <About/>
      </main>
      <Footer/>
    </>
  )
}

export default HomePage