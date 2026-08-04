import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LegacyWrapper from './components/LegacyWrapper';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Business from './pages/Business';
import Contact from './pages/Contact';
import Faqs from './pages/Faqs';
import AskEmy from './pages/AskEmy';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <div className="react-app-shell flex flex-col min-h-screen">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/business" element={<Business />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/ask-emy" element={<AskEmy />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            {/* Fallback for legacy pages that aren't converted yet */}
            <Route path="*" element={<LegacyWrapper />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
