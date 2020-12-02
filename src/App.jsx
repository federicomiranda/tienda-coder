import './styles/App.css';
import Hero from './components/Home/Hero';
import Footer from './components/global/Footer';
import zapatillaPuma from './assets/zapatilla.jpg';

function App() {
  return (
    <>
      <Hero />
      <img src={zapatillaPuma} alt="Zapatilla marca Puma azul" />
      <Footer />
    </>
  );
}

export default App;
