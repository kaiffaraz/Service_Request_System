import { motion } from "framer-motion";

import { useParams } from "react-router-dom";



import Navbar from "../components/Navbar";

import BackgroundEffects from "../components/BackgroundEffects";

import ShopCard from "../components/ShopCard";



import { servicesData }

from "../data/servicesData";



import {

  FaStar,
  FaCheckCircle

} from "react-icons/fa";



function ServicesPage() {

  // GET URL PARAM

  const { serviceType } = useParams();



  // GET SERVICE DATA

  const service = servicesData[serviceType];



  // IF SERVICE NOT FOUND

  if (!service) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-black text-white text-4xl font-bold">

        Service Not Found

      </div>

    )

  }



  return (

    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#060B28] via-[#0B113B] to-[#130F40]">

      {/* Background */}

      <BackgroundEffects />



      {/* Navbar */}

      <Navbar />



      {/* Main Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">

        {/* Hero */}

        <motion.div

          initial={{ opacity: 0, y: -20 }}

          animate={{ opacity: 1, y: 0 }}

          className="mb-16"

        >

          {/* Heading */}

          <div className="flex flex-wrap items-center gap-5 mb-6">

            <h1 className="text-6xl font-extrabold text-white">

              {service.title}

            </h1>



            <div className="bg-yellow-400/20 text-yellow-300 px-5 py-2 rounded-full flex items-center gap-2 text-lg font-semibold">

              <FaStar />

              {service.rating}

            </div>

          </div>



          {/* Description */}

          <p className="text-gray-300 text-xl leading-9 max-w-4xl mb-8">

            {service.description}

          </p>



          {/* Bookings */}

          <div className="flex items-center gap-3 text-cyan-400 text-lg font-semibold">

            <FaCheckCircle />



            <span>

              {service.bookings}

            </span>

          </div>

        </motion.div>



        {/* Categories */}

        <div className="mb-20">

          <h2 className="text-4xl font-bold text-white mb-10">

            Select a Service

          </h2>



          <div className="flex flex-wrap gap-5">

            {

              service.categories.map(

                (category, index) => (

                  <motion.div

                    key={index}

                    whileHover={{ scale: 1.05 }}

                    className="bg-white/5 backdrop-blur-xl border border-white/10 px-7 py-4 rounded-2xl text-white font-semibold shadow-xl hover:border-cyan-400 transition duration-300 cursor-pointer"

                  >

                    {category}

                  </motion.div>

                )

              )

            }

          </div>

        </div>



        {/* Providers */}

        <div className="mb-24">

          <h2 className="text-4xl font-bold text-white mb-12">

            Verified Service Providers

          </h2>



          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {

              service.providers.map(

                (provider) => (

                  <ShopCard

                    key={provider.id}

                    provider={provider}

                  />

                )

              )

            }

          </div>

        </div>



        {/* Reviews */}

        <div>

          <h2 className="text-4xl font-bold text-white mb-12">

            Customer Reviews

          </h2>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {

              service.customerReviews.map(

                (review, index) => (

                  <motion.div

                    key={index}

                    whileHover={{ y: -8 }}

                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"

                  >

                    {/* Stars */}

                    <div className="flex gap-1 text-yellow-400 mb-5">

                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />

                    </div>



                    {/* Review */}

                    <p className="text-gray-300 leading-8 mb-6">

                      {review.review}

                    </p>



                    {/* Name */}

                    <h3 className="text-white text-2xl font-bold mb-2">

                      {review.name}

                    </h3>



                    {/* Location */}

                    <p className="text-cyan-400">

                      {review.location}

                    </p>

                  </motion.div>

                )

              )

            }

          </div>

        </div>

      </div>

    </div>

  )

}



export default ServicesPage