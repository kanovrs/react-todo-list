import Header from "./components/header/Header";
import LeftBlock from "./components/leftblok/LeftBlock";
import TextContent from "./components/textContent/TextContent";
import './app.css'

function App() {
  return (
    <>
      <Header />
      <div className='wraper'>
        <LeftBlock />
        <TextContent />
      </div>
      
    </>
  );
}

export default App;
