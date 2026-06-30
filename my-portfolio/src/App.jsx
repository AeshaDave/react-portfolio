
import { lazy, Suspense } from 'react';
import './App.css'
import './index.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const AboutMe= lazy(()=> import ('./components/AboutMe')) ;
const Skills= lazy(()=>import  ('./components/Skills'));
const  Projects= lazy(()=> import ('./components/Projects'));
const Resume= lazy(()=>import  ( './components/Resume'));
 const Contact= lazy(()=> import ('./components/Contact'));



function SectionFallback() {
  return <div style={{ padding: '80px 24px', textAlign: 'center' }}>Loading...</div>;
}
function App() {
 
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Suspense fallback={SectionFallback}>
     <AboutMe/>
     <Skills/>
     <Projects/>
     <Resume/>
     <Contact/>
     </Suspense>
    </div>
  )
}

export default App
