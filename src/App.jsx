import { BrowserRouter } from 'react-router-dom';

import{Navbar} from './components';
import { StarsCanvas } from './components/canvas';
import About from './pages/About';
import Contact from './pages/contact';
import Hero from './pages/Hero';


const App =()=>{
  return(
    <BrowserRouter>
        <div className="relative z-0 bg-red">
           
              <Navbar />
              <Hero />
            

              <div className='relative z-0 gradient-bg-big'>
                <Contact />
                 <StarsCanvas />
              </div>
          
          
           
        </div>
    </BrowserRouter>
  )
}

export default App;