import './App.css'
import React, { useEffect } from 'react';
import { Home } from './Home/Home'
import { Loader } from './Loader/Loader'
import { Gsap } from "./Home/Gsap";




function App() {



  // Enlève le scroll pendant 8s

  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  function enableScroll() {
      document.body.style.overflow = '';
  }

  disableScroll();

  setTimeout(enableScroll, 8000);

  // Change l'opacité du loader

  useEffect(() => {
    const sectionLoader = document.getElementById('loader__section');
    const loaderAnimationTime = 5000; // 5 seconds
  
    const fadeOutLoader = () => {
        let opacity = 1;
        const fadeOut = setInterval(() => {
            if (opacity <= 0.1) {
                clearInterval(fadeOut);
                sectionLoader.style.display = 'none';
            }
            sectionLoader.style.opacity = opacity;
            opacity -= 0.05;
        }, 50);
    };
  
    const timeout = setTimeout(fadeOutLoader, loaderAnimationTime);
  
    return () => {
        clearTimeout(timeout);
    };
  }, []);


  return (
    <>
      <Loader/>
      <Home/>
      <Gsap/>
    </>
  )
}

export default App
