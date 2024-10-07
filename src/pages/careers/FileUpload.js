import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }
    
    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ghp-cloudinary'); // Replace with your upload preset

    // Set resource_type in the URL, not in form data
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/desw1fnsw/raw/upload`, // Correct endpoint for raw uploads
        formData
      );

      setUploadedUrl(response.data.secure_url); // Get the URL of the uploaded file
      alert('File uploaded successfully!');
    } catch (error) {
      console.error("Upload Error:", error); // Log the error for debugging
      alert('Error uploading file. Check console for details.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h2>Upload PDF</h2>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {uploadedUrl && (
        <div>
          <h3>Uploaded PDF URL:</h3>
          <a href={uploadedUrl} target="_blank" rel="noopener noreferrer">{uploadedUrl}</a>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
