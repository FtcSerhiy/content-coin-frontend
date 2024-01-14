import './App.css'
import { Bar } from './components/Bar.jsx'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { Content } from './pages/ContentPage.jsx';


function App() {
  return (
    <>
      <Bar></Bar>
      <Router>
        <Routes>
          <Route path='/' element={<Content />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
