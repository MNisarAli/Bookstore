import { Routes, Route } from 'react-router-dom';
import Books from './components/pages/Books';
import Navigation from './components/Navigation';
import Categories from './components/pages/Categories';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main className="container">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="Categories" element={<Categories />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
