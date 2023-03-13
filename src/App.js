import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import styles from './style';
import Features from './components/Features';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <div className={`${styles.flexCenter} ${styles.paddingX}  bg-primary `}>
        <Navbar />
      </div>

      <Landing />
      <Features />
      <Hero />
    </>
  );
}

export default App;
