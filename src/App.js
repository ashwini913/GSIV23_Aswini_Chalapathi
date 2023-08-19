import "./App.css";
import HomePage from "./components/HomePage";
import DetailsPage from "./components/DetailsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router basename={process.env.REACT_APP_BASENAME}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path={`/movieDetails/:id`} element={<DetailsPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
