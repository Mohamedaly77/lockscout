import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import styles from './style';

function App() {
  return (
    <>
      <div className={`${styles.flexCenter} ${styles.paddingX}  bg-primary `}>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
