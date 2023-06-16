import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

export const Email = (message) => {
    emailjs.send(
        'service_9bwd41f',
        'template_utceznv',
        {
          from_name: "Cloudinary Image Upload Demo",
          to_name: 'Julian',
          from_email: "bristoljulian.r+cloudinary@gmail.com",
          to_email: 'bristoljulian.r+cloudinary@gmail.com',
          message: message,
        },
        'OlSnfvmPWtVDrhrgi'
      )
      .then(() => {
        console.log("Alert sent successfully");
      }, (error) => {
        console.log(error);
      })
}

