import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home.jsx'
import { About } from './pages/about.jsx'
import { Contact } from './pages/contact.jsx'
import { Services } from './pages/services.jsx'
import { Blogs } from './pages/blogs.jsx'
import { Navbar } from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import { WebDevelopment } from './pages/services/web-development.jsx'
import { SeoServices } from './pages/services/seo-services.jsx'
import { DigitalAdvertising } from './pages/services/digital-advertising.jsx'
import { DigitalPR } from './pages/services/digital-pr.jsx'
import { GraphicDesign } from './pages/services/graphic-design.jsx'
import { ContentWriting } from './pages/services/content-writing.jsx'
import ContactForm from './components/ContactForm.jsx'

function AppContent() {
  return (
    <>
      {/* Removed the loading prop from Navbar if it's no longer needed */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-form" element={<ContactForm />} /> 
        <Route path="/services" element={<Services />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/seo-services" element={<SeoServices />} />
        <Route path="/services/digital-advertising" element={<DigitalAdvertising />} />
        <Route path="/services/digital-pr" element={<DigitalPR />} />
        <Route path="/services/graphic-design" element={<GraphicDesign />} />
        <Route path="/services/content-writing" element={<ContentWriting />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App