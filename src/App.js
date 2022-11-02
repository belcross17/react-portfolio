import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Portfolio from './components/Portfolio';
import './App.scss';



function App() {
  const baseUrl = "react-portfolio"
  return (
    <>
    <Layout />
    <Routes>
      
      <Route path={baseUrl + "/"} element={<Home />} />
      <Route path={baseUrl + "/about"} element={<About />} />
        <Route path={baseUrl + "/contact"} element={<Contact />} />
        <Route path={baseUrl + "/portfolio"} element={<Portfolio />} />
        <Route path={baseUrl + "/dashboard"} element={<Dashboard />} />
    </Routes>
    </>
  );
}

export default App;
