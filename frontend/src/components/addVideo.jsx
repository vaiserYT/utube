import React from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Header from "./header";
import axios from "axios";

class AddVideo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            video_title: '',
            video_description: '',
            video_file: null,
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', this.state.video_title);
        formData.append('description', this.state.video_description);
        formData.append('video_file', this.state.video_file);

        try {
            const response = await axios.post('http://localhost:8000/api/videos/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            window.location.href = 'http://localhost:5173/';
        } catch (error) {
            console.error('Error uploading video:', error);
            // window.location.href = 'http://localhost:5173/';
        }
    }


    // handleFileChange = (e) => {
    //     this.setState({ video_file: e.target.files[0] });
    // }
    render(){
        return(
            <div>
            <Header />
            <form onSubmit={this.handleSubmit} className="add-video-form" id="add-video-form">
                <Form.Control type="text" placeholder="Video name" onChange={(e) => this.setState({video_title: e.target.value})} />
                <Form.Label>Video description</Form.Label>
                <Form.Control as="textarea" rows={2} onChange={(e) => this.setState({video_description: e.target.value})}/>
                <Form.Control type="file" placeholder="file" onChange={(e) => this.setState({ video_file: e.target.files[0]})}/>

                <Button type="submit" className="create_video" variant="success">Create video</Button>
                <span class="check-form">{this.state.video_title && this.state.video_description && this.state.video_file ? "": "please fill all form!"}</span>
            </form>
            </div>
        )
    }
}

export default AddVideo;