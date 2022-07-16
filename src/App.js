import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Page404 from './components/Page404/Page404';
import List from './components/List/List';

const App = () => {
  return (
<main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/list/:listId" element={<List />} />
        </Routes>
      </Container>
 </main>
  );
};

export default App;
