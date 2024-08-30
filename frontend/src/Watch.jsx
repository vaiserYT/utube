import React, { useState, useEffect } from "react";
import { json, useParams } from 'react-router-dom';
import "./css/watch.css";
import Header from "./components/header";
import Comments from "./comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const add_like = async () => {
    try {
      const video = await fetch(`${import.meta.env.VITE_API_URL}/videos/${id}/?format=json`);
      const likes_json = await video.json()
      const response = await axios.patch(`${import.meta.env.VITE_API_URL}/videos/${id}/?format=json`, { "likes": likes_json["likes"]+1 });
      
      setData(prevData => ({
        ...prevData,
        likes: prevData.likes + 1
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const add_dislike = async () => {
    try {
      const video = await fetch(`${import.meta.env.VITE_API_URL}/videos/${id}/?format=json`);
      const dislikes_json = await video.json()
      const response = await axios.patch(`${import.meta.env.VITE_API_URL}/videos/${id}/?format=json`, { "unlikes": dislikes_json["unlikes"]+1 });
      setData(prevData => ({
        ...prevData,
        unlikes: prevData.unlikes + 1
        
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/videos/${id}/?format=json`);
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
  }, [id]);

  if (!data) {
    return <div>
      <Header />
      <h3>Этого видео не существует!</h3>
    </div>;
  }
  document.title = "watching video";

  return (
    <div>
      <Header />
      <video src={data.video_file} controls></video>
      <div className='watch_video'>
        <h2 className="video_title">{data.title}</h2>
        <span className="video_date">{data.created_at}</span>
        <div className="likes" onClick={add_like}><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>{data.likes}</div>
        <div className="dislikes" onClick={add_dislike}><FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon>{data.unlikes}</div>
        <p className="video_description">{data.description}</p>
      </div>
      <Comments />
    </div>
  );
};

export default ProductDetails;