import React from "react"
import "./category.css"
import { category } from "../../assets/data/data"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { GrFormPrevious } from "react-icons/gr"
import { MdNavigateNext } from "react-icons/md"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <MdNavigateNext className='icon' />
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <GrFormPrevious className='icon' />
      </button>
    </div>
  )
}
const Category = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }

  return (
    <>
      <section className='category'>
        <div className='content'>
          <Slider {...settings}>
            {category.map((item) => (
              <div className='boxs'>
                <div className='box' key={item.id}>
                  <img src={item.cover} alt='cover' />
                  <div className='overlay'>
                    <h4>{item.category}</h4>
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Category;
















// import Carousel from 'react-bootstrap/Carousel';
// import CarouselItem from 'react-bootstrap/CarouselItem'
// import CarouselCaption from 'react-bootstrap/CarouselCaption'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';



// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Category = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(null);

//   const slideVariants = {
//     hiddenRight: {
//       x: "100%",
//       opacity: 0,
//     },
//     hiddenLeft: {
//       x: "-100%",
//       opacity: 0,
//     },
//     visible: {
//       x: "0",
//       opacity: 1,
//       transition: {
//         duration: 1,
//       },
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.8,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };
//   const slidersVariants = {
//     hover: {
//       scale: 1.2,
//       backgroundColor: "#ff00008e",
//     },
//   };
//   const dotsVariants = {
//     initial: {
//       y: 0,
//     },
//     animate: {
//       y: -10,
//       scale: 1.2,
//       transition: { type: "spring", stiffness: 1000, damping: "10" },
//     },
//     hover: {
//       scale: 1.1,
//       transition: { duration: 0.2 },
//     },
//   };

//   const handleNext = () => {
//     setDirection("right");
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 1 === images.length ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrevious = () => {
//     setDirection("left");

//     setCurrentIndex((prevIndex) =>
//       prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleDotClick = (index) => {
//     setDirection(index > currentIndex ? "right" : "left");
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="carousel">
//         <div className="carousel-images">
//         <AnimatePresence>
//           <motion.img
//             key={currentIndex}
//             src={images[currentIndex]}
//             initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
//             animate="visible"
//             exit="exit"
//             variants={slideVariants}
//           />
//         </AnimatePresence>
//         <div className="slide_direction">
//           <motion.div
//             variants={slidersVariants}
//             whileHover="hover"
//             className="left"
//             onClick={handlePrevious}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               height="20"
//               viewBox="0 96 960 960"
//               width="20"
//             >
//               <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
//             </svg>
//           </motion.div>
//           <motion.div
//             variants={slidersVariants}
//             whileHover="hover"
//             className="right"
//             onClick={handleNext}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               height="20"
//               viewBox="0 96 960 960"
//               width="20"
//             >
//               <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
//             </svg>
//           </motion.div>
//         </div>
//       </div>
//       <div className="carousel-indicator">
//         {images.map((_, index) => (
//           <motion.div
//             key={index}
//             className={`dot ${currentIndex === index ? "active" : ""}`}
//             onClick={() => handleDotClick(index)}
//             initial="initial"
//             animate={currentIndex === index ? "animate" : ""}
//             whileHover="hover"
//             variants={dotsVariants}
//           ></motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Category;











// function Category() {
//   return (
//     <Carousel>
//       <CarouselItem>
//         <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTTOKlFLGez3_mWoK3Wo570TXiFu-Q_b6YsJd2JO6YYAUcjWxKl" alt="Life" />
//         {/* <ExampleCarouselImage text="First slide" /> */}
//         <CarouselCaption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </CarouselCaption>
//       </CarouselItem>
//       <CarouselItem>
//         {/* <ExampleCarouselImage text="Second slide" /> */}
//         <CarouselCaption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </CarouselCaption>
//       </CarouselItem>
//       <CarouselItem>
//         {/* <ExampleCarouselImage text="Third slide" /> */}
//         <CarouselCaption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </CarouselCaption>
//       </CarouselItem>
//     </Carousel>
//   );
// }

// export default Category;


















// import React from "react"
// import "./category.css"
// import { category } from "../../assets/data/data"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
// import Slider from "react-slick"
// import { GrFormPrevious } from "react-icons/gr"
// import { MdNavigateNext } from "react-icons/md"

// const SampleNextArrow = (props) => {
//   const { onClick } = props
//   return (
//     <div className='control-btn' onClick={onClick}>
//       <button className='next'>
//         <MdNavigateNext className='icon' />
//       </button>
//     </div>
//   )
// }
// const SamplePrevArrow = (props) => {
//   const { onClick } = props
//   return (
//     <div className='control-btn' onClick={onClick}>
//       <button className='prev'>
//         <GrFormPrevious className='icon' />
//       </button>
//     </div>
//   )
// }
// export const Category = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 2,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 800,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//     ],
//   }

//   return (
//     <>
//       <section className='category'>
//         <div className='content'>
//           <Slider {...settings}>
//             {category.map((item) => (
//               <div className='boxs'>
//                 <div className='box' key={item.id}>
//                   <img src={item.cover} alt='cover' />
//                   <div className='overlay'>
//                     <h4>{item.category}</h4>
//                     <p>{item.title}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </section>
//     </>
//   )
// }


// export default Category;