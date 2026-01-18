import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PostIndex() {
  const [post, setpost] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/post")
      .then(res => setpost(res.data));
  }, []); 

  return (
    <div className="min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat p-6">
      <h1 className="text-2xl font-bold mb-4 text-black text-center">Student Management System</h1>

      <Link
      to="/create"
      className="inline-block mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      Create
      </Link>

      {/* Table */}
<div className="overflow-x-auto bg-blue/90 backdrop-blur-md rounded-xl shadow-lg p-4">
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-blue-200">
      <tr>
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
          Student ID
        </th>
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
          Name
        </th>
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
          E-mail
        </th>
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
          Course
        </th>
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
          Year
        </th>
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
          Action
        </th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      {post.map((post) => (
        <tr
          key={post.StudentID}
          className="odd:bg-white even:bg-blue-50 hover:bg-blue-100 transition"
        >
          <td className="px-6 py-2 font-medium text-black-700">{post.StudentID}</td>
          <td className="px-6 py-2 font-medium text-black-700">{post.Name}</td>
          <td className="px-6 py-2 font-medium text-black-700">{post.Email}</td>
          <td className="px-6 py-2 font-medium text-black-700">{post.course}</td>
          <td className="px-6 py-2 font-medium text-black-700">{post.Year}</td>
          <td className="px-6 py-4 space-x-2">
            <button className="px-3 py-1 text-xs text-white bg-blue-600 rounded hover:bg-blue-700">
              Edit
            </button>
            <button className="px-3 py-1 text-xs text-white bg-green-600 rounded hover:bg-green-700">
              Show
            </button>
            <button className="px-3 py-1 text-xs text-white bg-red-600 rounded hover:bg-red-700">
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>
  );
}
