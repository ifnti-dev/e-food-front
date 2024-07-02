
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./image-data";
import { MenuInterface } from "../../types/interfaces";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Menu = ({menu}:{menu:MenuInterface}) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="mb-2 position-relative skeleton">
      <AnimatePresence initial={false} custom={direction}>

        <div className="rounded-2 border-1  shadow-lg" >
          <motion.img
            className=" rounded-top-2 " style={{ borderTopRightRadius: 5, borderTopLeftRadius: 5 }}
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
          <p className="text-black-20 m-2 px-1 text-start fs fw-bold">{menu.nom}  <span className=" ps-3 text-danger">{menu.prix } CFA</span> </p>

          <hr className=" hr  mx-2 m-0 mb-2" style={{ backgroundColor: "grey", height: 2 }} />

          <div className=" d-flex  justify-content-between flex-sm-wrap px-4">

            <div className=" card-comp  text-center p-2 w-25 border-1 border-black">
              <i className="icofont-home fs-5 bi bi-house-fill"></i>
              <p>dfdfdf</p>
            </div>
            <div className=" card-comp text-center p-2 w-25">
              <i className="icofont-home fs-5 bi bi-house-fill"></i>
              <p>dfdfdf</p>
            </div>
            <div className=" card-comp text-center  p-2 w-25">
              <i className="icofont-home fs-5 bi bi-house-fill"></i>
              <p>dfdfdf</p>
            </div>

            <div className=" card-comp text-center  p-2 w-25">
              <i className="icofont-home fs-5 bi bi-house-fill"></i>
              <p>dfdfdf</p>
            </div>
            <div className=" card-comp text-center  p-2 w-25">
              <i className="icofont-home fs-5 bi bi-house-fill"></i>
              <p>dfdfdf</p>
            </div>
          </div>

          {/* <hr className=" hr  mx-2 m-0 mb-2" style={{ backgroundColor: "grey", height: 2 }} /> */}
          <div className="accordion mb-4" id="accordionMenu">
           
            <div className="accordion-item border-0 m-2 px-1">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed p-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Infos concercant la livraison
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionMenu">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </AnimatePresence> 
      {/* <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div> */}
    </div>
  );
};