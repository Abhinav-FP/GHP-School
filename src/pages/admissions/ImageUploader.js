import axios from "axios";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import FileUpload from "../api/FileUpload";

export default function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false); // Track uploading state

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Client-ID fa9cff918a9554a");
  
    const formdata = new FormData();
    formdata.append("image", selectedImage, "GHJQTpX.jpeg");
    formdata.append("type", "image");
    formdata.append("title", "Simple upload");
    formdata.append("description", "This is a simple image upload in Imgur");
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
  
    try {
      const response = await fetch("https://api.imgur.com/3/upload", requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Image uploaded successfully:', data);
      if (data && data.data && data.data.link) {
        console.log('Uploaded Image URL:', data.data.link);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="relative flex flex-col items-center">
          <div className="relative w-32 h-40">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-full object-cover border border-gray-300 mb-4 rounded-md"
              />
            ) : (
              <span className="text-gray-500">No Image</span>
            )}
            <label className="absolute top-1 right-1 p-1 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
              <FiEdit className="h-5 w-5 text-gray-600" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>

        <button
          type="submit"
          className={`mt-6 w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 ${
            uploading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload Photo"}
        </button>
      </form>
    </div>
  );
}
