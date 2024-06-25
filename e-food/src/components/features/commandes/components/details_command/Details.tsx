import { useEffect, useRef, useState } from 'react';
import HeadDetails from './Head';
import { usePresence } from 'framer-motion';
import { gsap } from "gsap";



export default function Details({togle,show}:{togle:any,show:boolean}) {

   
    const ref = useRef(null);
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
    

            <div ref={ref} className="card  position-absolute end-0 h-100 w-50 fade-in-right" style={{ zIndex: 1000 }}>
    
                <HeadDetails setShow={togle}  />
    
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                    <h6 className="mb-0 fw-bold ">Upcomming Interviews</h6>
                </div>
                <div className="card-body">
                    <div className='placeholder-glow'>
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
                    </div>
    
                </div>
            </div>
    
        );
    }
    else{
        return <></>
    }
}