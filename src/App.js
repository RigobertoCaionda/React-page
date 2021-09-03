import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './Routes';
import {Container} from './AppStyled';
function App() {
  return (
      <BrowserRouter>
         <Container>
             <Header />
              <Routes />
             <Footer />
         </Container>
      </BrowserRouter>
  );
}

export default App;
