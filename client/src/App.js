import './App.css';
import './base.css';
import Upload from './pages/Upload.jsx';
import Gallery from './pages/Gallery.jsx';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="container">
            <Router>
                <nav className="nav">
                    <div className="nav-brand">Cloudinary Demo</div>
                    <ul className="nav-items">
                        <li className="nav-item">
                            <Link to="/">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/upload">Upload</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route element={<Upload/>} path="/upload" />
                    <Route element={<Gallery/>} path="/" />
                </Routes>
            </Router>
        </div>
  );
}

export default App;
