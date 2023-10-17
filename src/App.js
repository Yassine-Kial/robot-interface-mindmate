import Home from './Screens/Home';
import Games from './Screens/Games';
import MatchingPairs from './Games/MatchingPairs';
import Menu from './Screens/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Live from './Screens/Live';
import MatchingCards from './Games/MatchingCards';
import RockPaperScissor from './Games/RockPaperScissor';
import TicTacGame from './Games/TicTacGame';

function App() {
  return (
      <Router>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/MatchingPairs" element={<MatchingPairs />} />
        <Route path="/Live" element={<Live />} />
        <Route path="/MatchingCards" element={<MatchingCards />} />
        <Route path="/RockPaperScissor" element={<RockPaperScissor />} />
        <Route path="/TicTacGame" element={<TicTacGame />} />
      </Routes>
    </Router>
  );
}
export default App;
