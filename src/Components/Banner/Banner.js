import React, { useEffect, useState } from 'react'
import {api_key,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'

function Banner() {
  const [movie, SetMovie]=useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${api_key}&language=en-US`).then((Response)=>{
      console.log(Response.data.results[0])
      SetMovie(Response.data.results[0])
    })

  },[])
 
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title :""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview:""}</h1>

        </div>
        <div className="fade_bottom"></div>

      
    </div>
  )
}

export default Banner
