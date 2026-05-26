import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import {

  FaUser,
  FaEnvelope,
  FaLock

} from "react-icons/fa";

import API from "../services/api";



function Register() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({

    name: "",
    email: "",
    password: ""

  });


  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post(

        "/auth/register",

        formData

      );


      alert(response.data.message);

      navigate("/");

    }

    catch (error) {

      alert(

        error.response?.data?.message ||

        "Registration failed"

      );

    }

  };



  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-cyan-900 to-blue-700 px-4">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8">

        {/* Heading */}

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-white mb-3">

            Create Account

          </h1>

          <p className="text-cyan-100">

            Register your new account

          </p>

        </div>



        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Name */}

          <div>

            <label className="text-white block mb-2">

              Full Name

            </label>

            <div className="flex items-center bg-white/20 rounded-xl px-4">

              <FaUser className="text-cyan-200" />

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent outline-none px-3 py-4 text-white placeholder-cyan-100"
              />

            </div>

          </div>



          {/* Email */}

          <div>

            <label className="text-white block mb-2">

              Email

            </label>

            <div className="flex items-center bg-white/20 rounded-xl px-4">

              <FaEnvelope className="text-cyan-200" />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent outline-none px-3 py-4 text-white placeholder-cyan-100"
              />

            </div>

          </div>



          {/* Password */}

          <div>

            <label className="text-white block mb-2">

              Password

            </label>

            <div className="flex items-center bg-white/20 rounded-xl px-4">

              <FaLock className="text-cyan-200" />

              <input
                type="password"
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-transparent outline-none px-3 py-4 text-white placeholder-cyan-100"
              />

            </div>

          </div>



          {/* Button */}

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-400 transition duration-300 text-white py-4 rounded-xl font-semibold shadow-lg"
          >

            Register

          </button>

        </form>



        {/* Login Link */}

        <p className="text-center text-cyan-100 mt-6">

          Already have an account?

          <Link
            to="/"
            className="text-white font-semibold ml-2 hover:underline"
          >

            Login

          </Link>

        </p>

      </div>

    </div>

  )

}



export default Register