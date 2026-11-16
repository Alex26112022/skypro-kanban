import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import Main from './components/Main/Main';
import PopBrowse from './components/popups/PopBrowse/PopBrowse';
import PopExit from './components/popups/PopExit/PopExit';
import PopNewCard from './components/popups/PopNewCard/PopNewCard';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wrapper">
      <PopExit />
      <PopNewCard />
      <PopBrowse />
      <Header />
      {loading ? <Loader /> : <Main />}
    </div>
  );
}

export default App;
