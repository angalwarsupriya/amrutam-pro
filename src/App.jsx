
import './App.css'
import Features from './components/Features'
import Header from './components/Header'
import Home from './components/Home'

import 'bootstrap/dist/css/bootstrap.min.css';
import MagicWithUs from './components/MagicWithUs';
import AyurvedicConsultations from './components/AyurvedicConsultations';
import BookConsultation from './components/BookConsultation';
import AyurvedicApproach from './components/AyurvedicApproach';

function App(){
  return (
    <div className='projects-bg-con'>
       <Header/>
       <Home/>
       <Features/>
       <MagicWithUs/>
       <AyurvedicConsultations/>
       <BookConsultation/>
       <AyurvedicApproach/>
       
    </div>
  )
}

export default App
