import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import styles from './style';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <>
      <div className={`${styles.flexCenter} ${styles.paddingX}  bg-primary `}>
        <Navbar />
      </div>

      <Landing />
      <Features />
    </>
  );
}

export default App;
