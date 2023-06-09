import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './App.css'

import {Container} from './components/index';
import {Home ,Profile} from './Pages/index';
import {Header ,Footer  } from './sections/index';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
  
        <>
        <Router>
        <Header/>
        <Container>
            <Routes>
              
              <Route path='/' element={<Home/>} />
              <Route path='/profile' element={<Profile/>} />

            </Routes>
        </Container>
        <Footer/>
        </Router>

        </>

  )
}

export default App
