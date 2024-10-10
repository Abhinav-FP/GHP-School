// pages/api/upload.js
import { IncomingForm } from 'formidable'; // Importing IncomingForm directly
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false, // Disable default body parsing
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new IncomingForm(); // Create an instance of IncomingForm

    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: 'Error parsing the file' });
        return;
      }

      const imageFile = files.image; // Get the uploaded image file
      
      if (!imageFile) {
        res.status(400).json({ error: 'No file uploaded' });
        return;
      }

      const formData = new FormData();
      formData.append('image', fs.createReadStream(imageFile.filepath)); // Use a readable stream

      try {
        const response = await fetch('https://api.imgur.com/3/image', {
          method: 'POST',
          headers: {
            Authorization: 'Client-ID fa9cff918a9554a',
          },
          body: formData,
        });

        const data = await response.json();

        if (response.ok) {
          res.status(200).json(data);
        } else {
          res.status(response.status).json(data);
        }
      } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
