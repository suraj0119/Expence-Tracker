import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <Routes>
              <Route path='/' element={<h1>Dashboard</h1>} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
