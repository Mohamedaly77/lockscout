import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import styles from './style';
import Features from './components/Features';
import Hero from './components/Hero';
import Heros from './components/Heros';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Logo from './components/Logo';
import CTA from './components/CTA';

function App() {
  return (
    <>
      <div className={`${styles.flexCenter} ${styles.paddingX}  bg-primary `}>
        <Navbar />
      </div>

      <Landing />
      <Features />
      <Hero />
      <Heros />
      <Testimonials />
      <Blog />
      <Logo />
      <CTA />
    </>
  );
}

export default App;
