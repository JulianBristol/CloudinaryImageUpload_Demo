import React, { useState } from 'react'

const Upload = () => {

    const [fileInputState, setFileState] = useState('');
    const [selectedFile, setSelectedFile] = useState('');

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(e.target.value);
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
    </div>
  )
}

export default Upload
