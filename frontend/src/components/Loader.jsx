import { motion } from "framer-motion";



function Loader() {

  return (

    <div className="flex items-center justify-center py-20">

      <div className="relative">

        {/* Outer Ring */}

        <motion.div

          animate={{ rotate: 360 }}

          transition={{

            duration: 1.5,

            repeat: Infinity,

            ease: "linear"

          }}

          className="w-24 h-24 rounded-full border-4 border-cyan-500 border-t-transparent"

        />



        {/* Inner Glow */}

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="w-10 h-10 bg-cyan-400 rounded-full blur-md"></div>

        </div>

      </div>

    </div>

  )

}



export default Loader