import React, { useEffect, useRef } from "react";
import Section1 from "./components/section-1/Section1";
import Section2 from "./components/section-2/Section2";
import { ReactLenis} from "lenis/react";
import gsap from "gsap";
import Section3 from "./components/section-3/Section3";

const App = () => {
const lenisRef = useRef()
  
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => gsap.ticker.remove(update)
  }, [])
  return (
    <>
     <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <Section1 />
      <Section2 />
      <h1>jdjhfhfdjhh</h1>
      <Section3 />
    </>
  );
};

export default App;
