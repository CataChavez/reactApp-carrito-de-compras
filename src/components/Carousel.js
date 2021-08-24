import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import slide1 from './img/slides/slide-1.png'
import slide2 from './img/slides/slide-2.png'
import slide3 from './img/slides/slide-3.png'
import slide4 from './img/slides/slide-4.png'
import './Carousel.css'

const items = [
  {
    src: slide1,
    key: '1'
  },
  {
    src: slide2,
    key: '2'
  },
  {
    src: slide3,
    key: '3'
  },
  {
    src: slide4,
    key: '4'
  }
];

const HomeSlides = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.src}
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
        >
          <img src={item.src}alt={item.altText} />
        </CarouselItem>
      );
    });
  
    return (
      <div>
        <style>
          {
            `.custom-tag {
                width: 100%;
                height: auto;
                background: black;
              }`
          }
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </div>
    );
  }
  
  export default HomeSlides;