import React from 'react';
import { Heading } from './components/heading';
import { Logo } from './components/logo';
import './app.css'
import AnimatedBackground from './components/AnimatedBackground';
function App() {
  return (
    <div  style={{ position: 'relative', height: '100vh',display:'flex',justifyContent:'center',alignItems:'center' }}>
      <div className='app' >
        
      </div>
      <Heading/>
      <Logo/>
      <AnimatedBackground/>
  
    </div>
  );
}

export default App;



