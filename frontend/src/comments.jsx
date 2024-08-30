import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import AddComment from "./components/addComment";

function Comments() {
    const { id } = useParams();
    const [data, setData] = useState();
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/comments/?format=json`);
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
    }, []);
 
 
 
    if (!data || data.length <= 0) {
      return <div>Комментариев пока что нет!</div>;
    }
      else {
        return (
          <>
              <h2>Комментарии</h2>
              <AddComment />
              {data.map((item) => ( 
                item.video == id && (
                  <div key={item.id} className="comments-container">
                    <div className="comment">
                      <p className="comment_data">{item.created_at}</p>
                      <span className="comment_text">{item.text}</span>
                    </div>
                  </div>
                )
              ))}
          </>
        )
      }
    }

export default Comments