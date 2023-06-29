/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-expressions */
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() {
  const { pathname } = useLocation();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  async function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    try {
      const { data } = await axios(
        // eslint-disable-next-line comma-dangle
        `${URL}?email=${email}&password=${password}`
      );
      // eslint-disable-next-line no-shadow
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        // eslint-disable-next-line comma-dangle
        `http://localhost:3001/rickandmorty/character/${id}`
      );

      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        // eslint-disable-next-line no-alert
        window.alert('¡No hay personajes con este ID!');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  return (
    <div className="App">
      {pathname !== '/' && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
