import React, {useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import {imageUrl,api_key} from '../../constants/constants'
import axios from '../../axios'

function RowPost(props) {
 const[movies,setMovies]= useState([])
 const [urlId,setUrlId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then(Response=>{
      console.log(Response.data)
      setMovies(Response.data.results)
    }).catch(err=>{
      //alert('Network error')
    })

  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  const handleMovie=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}{76600}?api_key=${api_key}&language=en-US`).then(Response=>{
      if(Response.data.results.length!==0){
        setUrlId(Response.data.results[0])
      }else{
        console.log('Array Empty')
      }
    }
      )
  }


  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
        
         
        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`}/>
      )}
         

      </div>

        { urlId &&  <Youtube opts={opts} videoId={urlId.key} />   }

    </div>
  )
}

export default RowPost
