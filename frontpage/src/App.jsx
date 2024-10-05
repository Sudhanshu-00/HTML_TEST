import './App.css'
import Navbar from './component/Navbar.jsx';
import Banner from './component/Banner.jsx';
import MainContent from './component/Maincontent.jsx';
import ContentSection from './component/ContentSection.jsx';
import PhotoGallery from './component/PhotoGallery.jsx';
import SignUp from './component/SignUp.jsx';
import Footer from './component/Footer.jsx';

const App = () => {
  return (
    <div>
      <div><Navbar /></div>
      <div><Banner /></div>
      <div><MainContent /></div>
      <div><ContentSection /></div>
      <div><PhotoGallery /></div>
      <div><SignUp /></div>
      <div><Footer /></div>
    </div>
  );
};

export default App
