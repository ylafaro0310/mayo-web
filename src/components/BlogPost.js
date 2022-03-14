import React from "react";
import Img from "gatsby-image";

const BlogPost = ({image,imageUrl,children}) => (
  <div className='columns mb-6'>
    {imageUrl ? 
      <div className='column is-4'>
        <figure className='image'>
          <img src={imageUrl} alt='画像'></img>
        </figure>
      </div>
      : null}
    {image && image.childImageSharp ? 
      <Img className="column is-4" fluid={image.childImageSharp.fluid}/>
      : null
    }
    <div className='column is-8 has-text-left'>
      {children}
    </div>
  </div>
);

export default BlogPost;