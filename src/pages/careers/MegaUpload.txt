import React, { useState } from 'react';
import mega from 'mega';

const MegaUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file to upload');
      return;
    }

    // MEGA login credentials (Insecure for frontend use)
    const storage = mega({
      email: 'a.mathur@futureprofilez.com',  // Use your Mega email
      password: '59EQH_7tBnnZeDb'         // Use your Mega password
    }, (error) => {
      if (error) {
        console.error('Login error:', error);
        setUploadStatus('Login error');
        return;
      }

      console.log('Logged in to Mega successfully!');

      const fileStream = selectedFile.stream();  // Use the file object
      storage.upload({
        name: selectedFile.name,
        size: selectedFile.size
      }, fileStream, (err, uploadedFile) => {
        if (err) {
          console.error('Upload error:', err);
          setUploadStatus('Upload error');
          return;
        }
        console.log('File uploaded successfully:', uploadedFile.link);
        setUploadStatus(`File uploaded successfully: ${uploadedFile.link}`);
      });
    });
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">File Uploader</h1>

      <input 
        type="file" 
        onChange={handleFileChange} 
        className="border rounded p-2 mb-4"
      />

      <button 
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Upload to Mega
      </button>

      {uploadStatus && (
        <p className="mt-4 text-green-600">{uploadStatus}</p>
      )}
    </div>
  );
};

export default MegaUpload;
