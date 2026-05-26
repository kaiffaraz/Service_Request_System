import { motion } from "framer-motion";

import { FaClipboardList } from "react-icons/fa";



function EmptyState() {

  return (

    <motion.div

      initial={{ opacity: 0, y: 20 }}

      animate={{ opacity: 1, y: 0 }}

      className="text-center py-20"

    >

      {/* Icon */}

      <div className="bg-white/5 border border-white/10 w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-8">

        <FaClipboardList className="text-cyan-400 text-5xl" />

      </div>



      {/* Heading */}

      <h2 className="text-4xl font-bold text-white mb-4">

        No Requests Found

      </h2>



      {/* Description */}

      <p className="text-gray-300 text-lg max-w-xl mx-auto leading-8">

        You haven’t created any service requests yet.
        Start by creating your first request.

      </p>

    </motion.div>

  )

}



export default EmptyState