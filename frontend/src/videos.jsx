import React, { useState, useEffect } from 'react'
import "./css/videos.css"
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import AddVideo from './components/addVideo';

function Videos() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/videos/`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    

    fetchData();

    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, [])
  if (data.length <= 0 ) {
    return <div className='notFound'>Пока что видео нет!</div>;;
  }
  else{
    return (
      <div>
        {data.map((item) => ( 
          
          <div key={item.id} className='video'>
            <h2 className='title'>{item.title}</h2>
            <p className='description'>{item.description}</p>
            <div className='video-likes'><FontAwesomeIcon icon={faThumbsUp}/>{item.likes}</div>
            <div className='video-dislikes'><FontAwesomeIcon icon={faThumbsDown}/>{item.unlikes}</div>
            <a href={`/watch/video/${item.id}`} className="button_watch"><Button variant='warning'>Смотреть видео!</Button></a>
          </div>
        ))}
      </div>
    )
  }
  
  
}

export default Videos