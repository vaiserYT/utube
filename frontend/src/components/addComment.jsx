import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Header from "./header";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

function AddComment() {
    const [text, setText] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video', id);
        formData.append('text', text);

        try {
            await axios.post(`http://localhost:8000/api/comments/?format=json`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        } catch (error) {
            console.error('Error uploading comment:', error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="add-comment-form" id="add-video-form">
                <Form.Control 
                    type="text" 
                    placeholder="Comment" 
                    onChange={(e) => setText(e.target.value)}
                    className="comment-form" 
                />
                <Button type="submit" className="create_comment" variant="success">
                    Write comment
                </Button>
            </form>
        </div>
    );
}

export default AddComment;