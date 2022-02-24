import {Suspense} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/home';


const Routes = ()=>{
  return(
    <BrowserRouter>
      <Suspense fallback={ <div className="d-flex justify-content-center mt-5 pt-5" > <CircularProgress /> </div>} >
        <Header/>
        <div className='corpo'>
          <Home/>
        </div>
        <Footer/>
      </Suspense>
    </BrowserRouter>
  );
}

export default Routes;