import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function PostCreate() {

    const[StudentID, setstudentid]=useState('');
    const[Name, setname]=useState('');
    const[Email, setemail]=useState('');
    const[course, setCourse]=useState('');
    const[Year, setyear]=useState('');
    const navigate= useNavigate();

    const submit =(e: React.FormEvent) =>{
        e.preventDefault();

        axios.post("http://localhost:8000/api/post", {StudentID:StudentID, Name:Name,Email:Email,
            course:course,Year:Year }).then(()=>navigate("/"));
    }

  return (
    <div className="min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat p-6">
      <Link
      to="/"
      className="inline-block mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      Back
      </Link>


      <form onSubmit={submit} className="space-y-6 mt-4 max-w-md mx-auto">
        <div className="grid gap-2 min-h-screen backdrop-blur-md bg-cover bg-center bg-no-repeat p-6">

          <label htmlFor="StudentID" className="text-sm text-white">
            Student ID
          </label>
          <input
            id="StudentID"
            name="StudentID"
            onChange={(e)=> setstudentid(e.target.value)}
            value={StudentID}
            type="text"
            className="border rounded px-3 py-2 text-white"
            placeholder="Enter your Student ID"
            required
          />

          <label htmlFor="Name" className="text-sm text-white" >
            Name
          </label>
          <input
            id="Name"
            name="Name"
            onChange={(e)=> setname(e.target.value)}
            value={Name}
            type="text"
            className="border rounded px-3 py-2 text-white"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="Email" className="text-sm text-white">
            E mail
          </label>
          <input
            id="Email"
            name="Email"
            onChange={(e)=> setemail(e.target.value)}
            value={Email}
            type="text"
            className="border rounded px-3 py-2 text-white"
            placeholder="Enter your E-Mail"
            required
          />

          <label htmlFor="course" className="text-sm text-white">
            Course
          </label>
          <input
            id="course"
            name="course"
            onChange={(e)=> setCourse(e.target.value)}
            value={course}
            type="text"
            className="border rounded px-3 py-2 text-white"
            placeholder="Enter your Course"
            required
          />

          <label htmlFor="Year" className="text-sm text-white">
            Year
          </label>
          <input
            id="Year"
            name="Year"
            onChange={(e)=> setyear(e.target.value)}
            value={Year}
            type="text"
            className="border rounded px-3 py-2 text-white"
            placeholder="Enter your year"
            required
          />
          <button
          type="submit"
          className=" mt-6 bg-green-600 text-white px-4 py-2 rounded  hover:bg-green-700"
        >
          Submit
        </button>
        </div>

        
      </form>
    </div>
  );
}
