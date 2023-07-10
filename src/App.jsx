import Header from "./components/layouts/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/layouts/Footer.jsx";

function App() {
    const pageTitle = "Simple React Application";
  return (
    <>
        <Header title={pageTitle}/>
        <Content/>
        <Footer/>
    </>
  )
}

export default App
