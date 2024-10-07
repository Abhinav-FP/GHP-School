import React, { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Details from './api/admin/Details';

export default function Test() {
    const [loading, setLoading] = useState(false); 
    const [formData, setFormData] = useState({
    class: '',
    link: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    const data=new FormData();
    data.append("text",formData.class);
    data.append("link",formData.link);
    const main = new Details();
    try {
      const res = await main.syllabusAdd(data);
      if (res?.data) {
        toast.success(res.data.message);
        setFormData({
            class: '',
            link: '',
        });
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("An error occurred while submitting.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Test Form</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="class" className="block text-sm font-medium text-gray-700">
              Class
            </label>
            <input
              type="text"
              id="class"
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter class"
            />
          </div>
          <div>
            <label htmlFor="link" className="block text-sm font-medium text-gray-700">
              Link
            </label>
            <input
              type="text"
              id="link"
              name="link"
              value={formData.link}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter link"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            {loading?"Submitting....":"Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
