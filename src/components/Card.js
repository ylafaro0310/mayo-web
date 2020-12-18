import React from 'react';
import Img from 'gatsby-image';

const Card = ({image,imageUrl,children}) => (
  <div className='card'>
    {imageUrl ? 
      <div className='card-image'>
        <figure className='image'>
          <img src={imageUrl} alt='画像'></img>
        </figure>
      </div>
      : null}
    {image && image.childImageSharp ? 
      <Img fluid={image.childImageSharp.fluid}/>
      : null
    }
    <div className='card-content'>
      {children}
    </div>
  </div>
);

export default Card;