const { cloudinary } = require('./utils/cloudinary');

exports.handler = async function(event, context) {
  try {
    if (event.httpMethod === 'GET') {
      const { resources } = await cloudinary.search
        .expression('dev_upload_preset')
        .sort_by('updated_at', 'desc')
        .max_results(30)
        .execute();

      const publicIds = resources.map((file) => file.public_id);
      return {
        statusCode: 200,
        body: JSON.stringify(publicIds),
      };
    } else if (event.httpMethod === 'POST') {
      const fileString = JSON.parse(event.body).data;
      const fileSizeMB = Buffer.from(fileString, 'base64').length / (1024 * 1024);
      if (fileSizeMB > 50) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'File size exceeds the limit of 50MB' }),
        };
      }
      const uploadedResponse = await cloudinary.uploader.upload(fileString, {
        upload_preset: 'dev_upload_preset',
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ msg: 'Image uploaded successfully' }),
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid HTTP method' }),
      };
    }
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error processing request' }),
    };
  }
};