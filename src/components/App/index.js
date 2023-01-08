import { Route, Routes } from 'react-router-dom';
import Header from '../Header';
import Home from '../Pages/Home';
import Quizz from '../Pages/Quizz';
import Select from '../Pages/Select';
import Wrapper from '../Wrapper';
import './styles.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorie" element={<Select />} />
          <Route path="/quizz" element={<Quizz />} />
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
