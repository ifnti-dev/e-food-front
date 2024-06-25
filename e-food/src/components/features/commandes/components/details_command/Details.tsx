import { useEffect, useRef, useState } from 'react';
import HeadDetails from './Head';
import { usePresence, useScroll, useSpring, motion } from 'framer-motion';
import { gsap } from "gsap";
import { Example } from './Page';



export default function Details({togle,show}:{togle:any,show:boolean}) {


     
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
      });
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
      
    });
  
    const [isPresent, safeToRemove] = usePresence();

    useEffect(() => {
        if (!isPresent) {
            gsap.to(ref.current, {
                opacity: 0,
                onComplete: () => safeToRemove?.()
            });
        }
    }, [isPresent, safeToRemove]);


    
    if (show) {
        
        return (

            <>
            


            <div ref={ref} className="card pb-4 end-0  w-50 fade-in-right shadow-lg position-relative" >

            {/* <motion.div className="progress-bar" style={{ scaleX,pathLength: scrollYProgress }} /> */}
    
                <HeadDetails setShow={togle}  />
    
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                    <h6 className="mb-0 fw-bold ">Upcomming Interviews</h6>
                </div>
                <div className="card-body   text-center" style={{ zIndex: 1000,maxHeight:800,overflow:"scroll" }}>
                    {/* <div className='placeholder-glow'>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder w-75"></span>
                        <span className="placeholder w-100" ></span>
                    </div>
    
                    <div className='placeholder-glow mt-2'>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder w-75"></span>
                        <span className="placeholder w-100" ></span>
                    </div>
    
                    <div className='placeholder-glow mt-2'>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder w-75"></span>
                        <span className="placeholder w-100" ></span>
                    </div>
    
                    <div className='placeholder-glow mt-2 '>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder w-75"></span>
                        <span className="placeholder w-100" ></span>
                    </div> */}

                    <Example/>
                    

                    <Example/>

                    <Example/>
                    
    
                </div>
            </div>
            </>
        );
    }
    else{
        return <></>
    }
}