import { useEffect, useRef } from 'react';
import HeadDetails from './Head';
import { usePresence, useScroll, useSpring } from 'framer-motion';
import { gsap } from "gsap";
import MenusList from './MenusList';
import { LivraisonPropsType, MenuInterface } from '../../types/interfaces';
import Map from '../maps/Map';



export default function Details({ togle, menus, skeleton,livraison }: { togle: any, menus: MenuInterface[], skeleton: boolean,livraison:React.MutableRefObject<LivraisonPropsType | undefined>}) {



    let total = menus.reduce((previousValue, currentValue) => {
        
        return previousValue + parseInt(currentValue.temps_preparation) ;

      }, 0);

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


    return (

        <>

            <div ref={ref} className="card pb-4 end-0   w-50 fade-in-right shadow-lg position-relative " >

                <HeadDetails setShow={togle} total={total} l={livraison}/>

                <div className="card-header py-3  border-bottom-0">
                    <h6 className="mb-0 fw-bold "></h6>
                </div>
                <div className="card-body height-status " style={{ zIndex: 1000 }}>

                    {skeleton && <div className='placeholder-glow fade'>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder w-75"></span>
                        <span className="placeholder w-100" ></span>
                    </div>
                    }


                    <MenusList menus={menus!} />                   

                    <Map livraison={livraison!} />


                </div>
            </div>
        </>
    );


}