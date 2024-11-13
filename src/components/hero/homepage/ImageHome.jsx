import Image from 'next/image';
import React from 'react';
import dib from "../../../imgMain/dev2.jpeg"

const ImageHome = () => {
    return (
       
        <div className="image-wrapper">
          <div className="image">
            <Image 
            src={dib}
            alt="water"
            width={200}
            height={200}
             />
          </div>
        </div>
    
    );
}

export default ImageHome;

