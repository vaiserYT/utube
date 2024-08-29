import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./css/watch.css";
import Header from "./components/header";

const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='watch_video'>
        <Header />
        <video src={data.video_file} controls></video>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
