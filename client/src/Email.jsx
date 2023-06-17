import emailjs from '@emailjs/browser';

export const Email = (message) => {
  return new Promise((resolve, reject) => {
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
        resolve({message:"Report sent successfully"});
      }).catch( (error) => {
        console.log(error);
        alert("There was an error in sending the report\nPlease send an email message to the admin at bristoljulian@gmail.com")
        reject({message:"There was an error in sending the report\nPlease send an email message to the admin at bristoljulian@gmail.com"});
      })
    })
}

