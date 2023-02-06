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

  return (
    <div>
      <h1>Upload</h1>
      <form>
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
