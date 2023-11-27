import Footer from "./Components/Footer/Footer";
import Toolbar from "./Components/Toolbar/Toolbar";
import Calendar from "./Containers/Calendar/Calendar";
import Champion from "./Containers/Champion/Champion";
import Drivers from "./Containers/Drivers/Drivers";
import Home from "./Containers/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <header>
        <Toolbar />
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/champion" element={<Champion />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
