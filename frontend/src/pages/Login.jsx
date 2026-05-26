import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { FaEnvelope, FaLock } from "react-icons/fa";

import { toast } from "react-toastify";

import API from "../services/api";



function Login() {

  const navigate = useNavigate();


  const [loading, setLoading] = useState(false);


  const [formData, setFormData] = useState({

    email: "",

    password: ""

  });


  // HANDLE INPUT CHANGE
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };



  // HANDLE LOGIN
  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      setLoading(true);


      const response = await API.post(

        "/auth/login",

        formData

      );


      // SAVE TOKEN
      localStorage.setItem(

        "token",

        response.data.token

      );


      // SAVE USER
      localStorage.setItem(

        "user",

        JSON.stringify(response.data.user)

      );


      toast.success("Login successful");


      navigate("/dashboard");

    }

    catch (error) {

      toast.error(

        error.response?.data?.message ||

        "Login failed"

      );

    }

    finally {

      setLoading(false);

    }

  };



  return (

    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-10">

      {/* Card */}

      <motion.div

        initial={{ opacity: 0, y: 40 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.5 }}

        className="w-full max-w-md bg-white rounded-[32px] shadow-2xl p-10"

      >

        {/* Heading */}

        <div className="text-center mb-10">

          <h1 className="text-5xl font-extrabold text-primary mb-4">

            Welcome Back

          </h1>

          <p className="text-secondary text-lg">

            Login to your account

          </p>

        </div>



        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-7"
        >

          {/* Email */}

          <div>

            <label className="block text-dark font-semibold mb-3">

              Email

            </label>



            <div className="flex items-center bg-[#F4F5F7] border border-gray-200 rounded-2xl px-5 py-4 focus-within:border-accent transition">

              <FaEnvelope className="text-accent text-lg mr-4" />



              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-transparent w-full outline-none text-dark placeholder-secondary"
              />

            </div>

          </div>



          {/* Password */}

          <div>

            <label className="block text-dark font-semibold mb-3">

              Password

            </label>



            <div className="flex items-center bg-[#F4F5F7] border border-gray-200 rounded-2xl px-5 py-4 focus-within:border-accent transition">

              <FaLock className="text-accent text-lg mr-4" />



              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="bg-transparent w-full outline-none text-dark placeholder-secondary"
              />

            </div>

          </div>



          {/* Button */}

          <motion.button

            whileHover={{ scale: 1.03 }}

            whileTap={{ scale: 0.97 }}

            type="submit"

            disabled={loading}

            className="w-full bg-primary hover:bg-accent transition duration-300 text-white py-4 rounded-2xl font-bold text-lg shadow-lg"

          >

            {

              loading

                ? "Logging in..."

                : "Login"

            }

          </motion.button>

        </form>



        {/* Register */}

        <div className="text-center mt-8">

          <p className="text-secondary">

            Don’t have an account?{" "}

            <Link
              to="/register"
              className="text-primary font-bold hover:text-accent transition"
            >

              Register

            </Link>

          </p>

        </div>

      </motion.div>

    </div>

  )

}



export default Login