"use client"
import React, { useState } from 'react'

import axios from 'axios';

const page =() => {

  const [images, setimages] = useState([])

const  getimages = async ( ) =>{
  try {
    const response = await axios.get("https://picsum.photos/200/300")
    const data = response.data;
    
    setimages(data);
    console.log(images);

  } catch (error) {
    console.error("Error fetching pictures");
    
  }
};
return (
      <>
      <button id='b1' onClick={getimages}> Get The Real Images </button>
      <div>
        {images.map( (elem,i) => {
          <h1>{elem.author}</h1>
          return
          <img key={i} 
          src={elem.download_url}> </img>
        }
        )}
      </div>

      </>
  )
      
};
export default page; 