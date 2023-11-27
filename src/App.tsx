import Toolbar from "./Components/Toolbar/Toolbar";
import Home from "./Containers/Home/Home";

function App() {
  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main className="container">
        <Home/>
      </main>
    </>
  );
}

export default App;
