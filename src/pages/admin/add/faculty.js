import Details from '@/pages/api/admin/Details';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function Faculty() {
    const[loading,setLoading]=useState(false);
  const [formData, setFormData] = useState({
    name: '',
    subjects: '',
    grades: ''
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const main = new Details();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("subjects", formData.subjects);
    data.append("grades", formData.grades);
    const response = main.addFaculty(data);
    ("response",response);
    response
      .then((res) => {
        if (res && res?.data && res?.data?.status) {
          toast.success(res.data.message);
          router.push("/admin");
          setLoading(false);
        } else {
          toast.error(res.data.message);
          setLoading(false);
        }
        setFormData({
            name: '',
            subjects: '',
            grades: ''
        });
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg p-8 rounded-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Faculty Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subjects">
              Subjects
            </label>
            <input
              type="text"
              name="subjects"
              value={formData.subjects}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter subjects"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="grades">
              Grades
            </label>
            <input
              type="text"
              name="grades"
              value={formData.grades}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter grades"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
             {loading ? "Submitting..." : "Submit" } 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
