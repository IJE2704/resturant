import React, { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import "./Gallery.css";
import SubHeading from "../../Components/SubHeading/SubHeading";
import images from "../../constants/images";
import data from "../../constants/data";

const Gallery = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) =>{
    const {current} = scrollRef;
    if(direction === 'left'){
      current.scrollLeft -=300;
    }
    else {
      current.scrollLeft +=300;
    }
  }
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram"></SubHeading>
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button">Visit Us</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {
            data.galleryImages.map((img,index)=>(
              <div className="app__gallery-images_card flex__center" key={index}>
                <img src={img.imageUrl} alt="" />
                <BsInstagram className="gallery__images-icon"/>
              </div>
            ))
          }
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={()=> scroll('left')}/>
          <BsArrowRightShort className="gallery__arrow-icon" onClick={()=> scroll('right')}/>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
