import React from "react";
import { Row, Col, FormGroup, ControlLabel, FormControl, InputGroup, Button } from 'react-bootstrap';

class ImageUpload extends React.Component {
    state = {
        file: '',
        imagePreviewUrl: ''
    }

    pressButton = e => {
        e.preventDefault();
        console.log('handle uploading-', this.state.file);
    }
    
    getPhoto = e => {
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }

        reader.readAsDataURL(file);
    }
  
    render () {
        let {imagePreviewUrl} = this.state;
        let imagePreview = null;
        
        if (imagePreviewUrl) {
          imagePreview = (<img src={imagePreviewUrl} />);
        } else {
          imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }

        return (
            <div>
                <form action='.' enctype="multipart/form-data">
                    <input type='file' onChange={this.getPhoto}/>
                    <button onClick={this.pressButton}> Get it </button>
                </form>
            
                <div className="imgPreview">
                    {imagePreview}
                </div>
          </div>
        )
    }
}

export default ImageUpload;