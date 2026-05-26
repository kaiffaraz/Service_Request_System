import { motion } from "framer-motion";



function BackgroundEffects() {

  return (

    <div className="absolute inset-0 overflow-hidden -z-10">

      {/* Top Left Glow */}

      <motion.div

        animate={{

          x: [0, 40, 0],

          y: [0, 30, 0]

        }}

        transition={{

          duration: 12,

          repeat: Infinity

        }}

        className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px]"

      />



      {/* Bottom Right Glow */}

      <motion.div

        animate={{

          x: [0, -40, 0],

          y: [0, -30, 0]

        }}

        transition={{

          duration: 14,

          repeat: Infinity

        }}

        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[140px]"

      />



      {/* Floating Circle 1 */}

      <motion.div

        animate={{

          y: [0, -20, 0]

        }}

        transition={{

          duration: 6,

          repeat: Infinity

        }}

        className="absolute top-32 right-32 w-20 h-20 bg-cyan-400/20 rounded-full blur-2xl"

      />



      {/* Floating Circle 2 */}

      <motion.div

        animate={{

          y: [0, 20, 0]

        }}

        transition={{

          duration: 7,

          repeat: Infinity

        }}

        className="absolute bottom-32 left-32 w-28 h-28 bg-purple-500/20 rounded-full blur-2xl"

      />

    </div>

  )

}



export default BackgroundEffects