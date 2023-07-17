import Header from "./components/layouts/Header.jsx"; 
import Footer from "./components/layouts/Footer.jsx";
import TodoListApp from "./components/TodoListApp.jsx"; 

function App() {
    const pageTitle = "To-Do List";
  return (
    <>
        <Header title={pageTitle}/>
        <TodoListApp />
        <Footer/>
    </>
  )
}

export default App
