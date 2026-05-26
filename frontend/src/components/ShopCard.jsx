import { motion } from "framer-motion";

import {

  FaStar,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCheckCircle

} from "react-icons/fa";



function ShopCard({ provider }) {

  return (

    <motion.div

      whileHover={{ y: -10, scale: 1.02 }}

      transition={{ duration: 0.3 }}

      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden shadow-2xl"

    >

      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={provider.image}
          alt={provider.name}
          className="w-full h-72 object-cover hover:scale-110 transition duration-500"
        />



        {/* Verified Badge */}

        {

          provider.verified && (

            <div className="absolute top-5 right-5 bg-cyan-500 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold shadow-lg">

              <FaCheckCircle />

              Verified

            </div>

          )

        }

      </div>



      {/* Content */}

      <div className="p-8">

        {/* Shop Name */}

        <div className="flex items-center justify-between mb-4">

          <h2 className="text-3xl font-bold text-white">

            {provider.name}

          </h2>



          <div className="flex items-center gap-2 bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-full">

            <FaStar />

            <span>{provider.rating}</span>

          </div>

        </div>



        {/* Reviews */}

        <p className="text-gray-300 mb-5">

          {provider.reviews}

        </p>



        {/* Address */}

        <div className="flex items-start gap-3 mb-5">

          <FaMapMarkerAlt className="text-cyan-400 text-xl mt-1" />



          <p className="text-gray-300 leading-7">

            {provider.address}

          </p>

        </div>



        {/* Timing */}

        <p className="text-green-400 font-semibold mb-5">

          {provider.timing}

        </p>



        {/* Customer Review */}

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6">

          <p className="text-gray-300 leading-7 italic">

            "{provider.customerReview}"

          </p>



          <h3 className="text-white font-semibold mt-4">

            — {provider.customerName}

          </h3>

        </div>



        {/* Buttons */}

        <div className="flex gap-4">

          {/* Call */}

          <a
            href={`tel:${provider.phone}`}
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition duration-300 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 shadow-xl"
          >

            <FaPhoneAlt />

            Call Now

          </a>



          {/* Location */}

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${provider.mapCode}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition duration-300 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 shadow-xl"
          >

            <FaMapMarkerAlt />

            Location

          </a>

        </div>

      </div>

    </motion.div>

  )

}



export default ShopCard