import { motion } from "framer-motion";

import {

  FaClipboardList,
  FaCheckCircle,
  FaClock

} from "react-icons/fa";

function StatsCards({

  totalRequests,
  completedRequests,
  pendingRequests

}) {

  const stats = [

    {

      title: "Total Requests",
      value: totalRequests,
      icon: <FaClipboardList />,
      glow: "from-cyan-500 to-blue-600"

    },

    {

      title: "Completed",
      value: completedRequests,
      icon: <FaCheckCircle />,
      glow: "from-green-400 to-emerald-600"

    },

    {

      title: "Pending",
      value: pendingRequests,
      icon: <FaClock />,
      glow: "from-yellow-400 to-orange-500"

    }

  ];

  return (

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

      {

        stats.map((card, index) => (

          <motion.div

            key={index}

            whileHover={{
              y: -10,
              scale: 1.02
            }}

            className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-[0_0_40px_rgba(255,255,255,0.05)]"

          >

            {/* GLOW */}

            <div className={`absolute top-[-50px] right-[-50px] w-[140px] h-[140px] rounded-full bg-gradient-to-r ${card.glow} opacity-20 blur-3xl`}></div>

            <div className="relative z-10 flex items-center justify-between">

              <div>

                <p className="text-gray-400 text-lg mb-3">

                  {card.title}

                </p>

                <h2 className="text-5xl font-extrabold text-white">

                  {card.value}

                </h2>

              </div>

              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${card.glow} flex items-center justify-center text-white text-3xl shadow-2xl`}>

                {card.icon}

              </div>

            </div>

            {/* LINE */}

            <div className="w-full h-[2px] bg-white/10 mt-8 rounded-full"></div>

          </motion.div>

        ))

      }

    </div>

  );

}

export default StatsCards;