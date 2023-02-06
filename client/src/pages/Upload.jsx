import React, { useState } from 'react'

const Upload = () => {

    const [fileInputState, setFileState] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const [previewSource, setPreviewSource] = useState('');

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(e.target.value);
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
    }

    const uploadImage = async (base64EncodedImage) => {
        try{
            await fetch('/api/upload', {
                method: 'POST',
                body: JSON.stringify({data: base64EncodedImage}),
                headers: {'Content-type': 'application/json'},
            });
        } catch(error){
            console.error(error);
        }
    }

  return (
    <div>
      <h1>Upload</h1>
      <form 
      className='form'
      onSubmit={handleSubmitFile}>
        <input type="file" name="image"
        onChange={handleFileInputChange}
        value={fileInputState}
        className="form-input"
        />
        <button type="submit" className='btn'>Upload Image</button>
      </form>
      {previewSource && (
        <img src={previewSource} alt={"User selected image"} style={{height: '300px'}}/>
      )}
    </div>
  )
}

export default Upload
