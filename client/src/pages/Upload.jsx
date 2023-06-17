import Axios from 'axios';
import React, { useState } from 'react'
import { Email } from '../Email';

const Upload = () => {

    /* const [previewSource, setPreviewSource] = useState('');

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setPreviewSource(reader.result);
        };
    }

    const handleSubmitFile = (e) => {
        e.preventDefault();
        if(!previewSource) return;
        uploadImage(previewSource);
      };

    const uploadImage = async (base64EncodedImage) => {
        try {
          const response = await Axios.post('/api/upload', {
            data: base64EncodedImage,
          });
          alert(response.data.msg);
          Email("Someone just uploaded a file to your Cloudinary Image Upload Demo site.\nCheck it out at https://cloudinary_demo.com")
        } catch (error) {
          console.error(error);
          Email(`ERROR: Someone just attempted to uploaded a file to your Cloudinary Image Upload Demo site and failed.\n${error}`)
          alert('Upload failed.\nPlease try again later');
        }
    } */

  return (
    <div>
      <h1>Upload</h1>
      <p>Please upload an image file</p>
      {/* <form 
      className='form'
      onSubmit={handleSubmitFile}>
        <input type="file" name="image"
        onChange={handleFileInputChange}
        className="form-input"
        />
        <button type="submit" className='btn'>Upload Image</button>
      </form>
      {previewSource && (
        <img src={previewSource} alt={"User selected file"} style={{height: '300px'}}/>
      )} */}
    </div>
  )
}

export default Upload
