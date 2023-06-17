import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Image } from 'cloudinary-react'
import { Email } from '../Email';

const Gallery = () => {
  const [imageIds, setImageIds] = useState('');
  const [image, setImage] = useState('');
  const [options, setOptions] = useState(false);
  const [report, setReport] = useState(false);
  const [reportType, setReportType] = useState('Report');
  const [responseMessage, setResponseMessage] = useState(undefined)

  const loadImages = async () => {
    try {
      const response = await fetch('../../.netlify/functions/serverFunctions');
      const data = await response.json();
      setImageIds(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenOptions = (e) => {
    setImage(e.target.src);
    setOptions(true);
  }
  const handleCloseOptions = (e) => {
    setOptions(false);
  }
  const handleOpenReport = () => {
    setReport(true);
  }
  const handleCloseReport = () => {
    setReport(false);
  }
  const handleReport = () => {
    setResponseMessage(Email(`Someone just reported ${reportType} in a file on your Cloudinary Image Upload Demo site.\nThe reported ${reportType} on this image ${image}\nCheck it out at https://cloudinary_demo.com`))
  }

  useEffect(() => {
    loadImages();
  },[]);

  useEffect(() => {
    if (options || report) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [options, report]);

  useEffect(() => {
    if (responseMessage !== undefined) {
      responseMessage.then((result) => {
        alert(result.message);
      })
    }
  }, [responseMessage]);

  return (
    <div>
      <h1 className="title">Gallery</h1>
      <p>All images have been uploaded by site users.</p>
      <p>Please report any inappropiate images</p>
      {imageIds && imageIds?.map((imageId, index) => (
        <Image
        key={index}
        cloudName="dfb1oxmpx"
        publicId={imageId}
        loading="lazy"
        width="300"
        height="300"
        crop="fill"
        style={{ borderRadius: '35px', margin: '10px', cursor: 'pointer' }}
        onClick={(e) => {
          handleOpenOptions(e)
        }}
        />
      ))}
      <div className='modal_BG'
      style={{ display: `${options || report ? 'flex' : "none"}` }}
      onClick={() => {
        handleCloseOptions()
        handleCloseReport()
        setReportType('Report')
      }}
        >
          <div 
          className='modal modalImg'
          style={{ display: `${options ? 'flex' : "none"}` }}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
          <i
          className='Icon_Options modalIcon'
          onClick={() => {
            handleOpenReport()
            handleCloseOptions()
          }}
          />
            <img
            src={image}
            alt='User Selected file'
            />
          </div>


        <div className='modal modalReport'
        style={{ display: `${report ? 'block' : "none"}` }}
        onClick={(event) => {
          event.stopPropagation();
        }}
        >
          <div className='modalTitle'>
          <i className='Icon_Back modalIcon'
          onClick={() => {
            if (reportType === 'Report'){
              handleCloseReport();
              setOptions(true);
            }else{
              setReportType('Report')
            }
          }}
          ></i>
          <h2>{reportType}</h2>
          </div>
          {reportType === 'Report' ? 
          <DefaultReportOptions setReportType={setReportType} /> 
          : 
          <NewReport reportType={reportType}  handleReport={handleReport}/>
          }
        </div>
      </div>
    </div>
  )
}

const DefaultReportOptions = ({setReportType}) => (<>
  <p>Please Select an option</p>
          <ul>
            <li onClick={() => {setReportType('Nudity')}}>Nudity</li>
            <li onClick={() => {setReportType('Spam')}}>Spam</li>
            <li onClick={() => {setReportType('Violence')}}>Violence</li>
            <li onClick={() => {setReportType('False Information')}}>False Information</li>
            <li onClick={() => {setReportType('Suide/Self Harm')}}>Suide/Self Harm</li>
            <li onClick={() => {setReportType('Something Else')}}>Something Else</li>
          </ul>
  </>)

  const NewReport = ({reportType, handleReport}) => (
    <>
    <p>Would you like to report <em>{reportType}</em> in this photo?</p>
    <button className='reportButton' onClick={() => {handleReport()}}>Report</button>
    </>
    )

export default Gallery
