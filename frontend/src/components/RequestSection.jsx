import { motion } from "framer-motion";

import {
  FaTrash,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

import API from "../services/api";

import { toast } from "react-toastify";

function RequestSection({
  requests,
  deleteRequest,
  loading,
}) {

  // MARK AS COMPLETED

  const markAsCompleted = async(id)=>{

    try{

      const token =
      localStorage.getItem("token");

      await API.put(
        `/requests/${id}`,
        {
          status:"Completed"
        },
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      );

      toast.success(
        "Service marked as completed"
      );

      window.location.reload();

    }

    catch(error){

      toast.error(
        "Failed to update status"
      );

    }

  };

  // LOADING

  if(loading){

    return(

      <div className="text-center text-white text-2xl font-bold py-20">

        Loading Requests...

      </div>

    );

  }

  return(

    <div className="mt-10">

      {/* SECTION TITLE */}

      <div className="text-center mb-16">

        <h2 className="text-5xl font-bold text-white mb-5">

          Service Requests

        </h2>

        <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-9">

          Track and manage all your AI-powered service requests with smart status updates and premium UI experience.

        </p>

        <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto rounded-full mt-6"></div>

      </div>

      {/* EMPTY STATE */}

      {

        requests.length === 0 ? (

          <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[36px] p-16 text-center">

            <FaClock className="text-cyan-400 text-7xl mx-auto mb-8" />

            <h2 className="text-4xl font-bold text-white mb-5">

              No Requests Found

            </h2>

            <p className="text-gray-300 text-xl">

              Create your first service request to get started.

            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {

              requests.map((request,index)=>(

                <motion.div
                  key={request.id}
                  initial={{
                    opacity:0,
                    y:30
                  }}
                  animate={{
                    opacity:1,
                    y:0
                  }}
                  transition={{
                    duration:0.5,
                    delay:index * 0.1
                  }}
                  whileHover={{
                    y:-8
                  }}
                  className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.25)] hover:shadow-[0_0_50px_rgba(0,255,255,0.12)] transition duration-500"
                >

                  {/* GLOW EFFECT */}

                  <div className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] bg-cyan-500/10 rounded-full blur-3xl"></div>

                  {/* TOP SECTION */}

                  <div className="relative z-10 flex items-start justify-between gap-5">

                    <div>

                      <h2 className="text-3xl font-bold text-white mb-3">

                        {request.title}

                      </h2>

                      <p className="text-gray-300 leading-8">

                        {request.description}

                      </p>

                    </div>

                    {/* STATUS */}

                    <div
                      className={`px-5 py-3 rounded-2xl text-sm font-bold shadow-lg ${
                        request.status === "Completed"
                          ? "bg-green-500/20 text-green-400 border border-green-400/30"
                          : request.status === "Pending"
                          ? "bg-yellow-500/20 text-yellow-300 border border-yellow-400/30"
                          : "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30"
                      }`}
                    >

                      {request.status}

                    </div>

                  </div>

                  {/* DETAILS */}

                  <div className="relative z-10 mt-8 space-y-5">

                    <div className="flex items-center justify-between border-b border-white/10 pb-4">

                      <span className="text-gray-400">

                        Category

                      </span>

                      <span className="text-white font-semibold">

                        {request.category}

                      </span>

                    </div>

                    <div className="flex items-center justify-between border-b border-white/10 pb-4">

                      <span className="text-gray-400">

                        Address

                      </span>

                      <span className="text-white font-semibold text-right max-w-[60%]">

                        {request.address}

                      </span>

                    </div>

                    <div className="flex items-center justify-between border-b border-white/10 pb-4">

                      <span className="text-gray-400">

                        Preferred Time

                      </span>

                      <span className="text-white font-semibold">

                        {new Date(
                          request.preferred_time
                        ).toLocaleString()}

                      </span>

                    </div>

                  </div>

                  {/* IMAGE */}

                  {

                    request.image && (

                      <div className="relative z-10 mt-8 overflow-hidden rounded-3xl border border-white/10">

                      <img
                        src={`https://service-request-system.onrender.com/uploads/${request.image}`}
                        alt="Request"
                        className="w-full h-64 object-cover group-hover:scale-105 transition duration-700"
                      />

                      </div>

                    )

                  }

                  {/* BUTTONS */}

                  <div className="relative z-10 flex flex-wrap gap-4 mt-8">

                    {/* COMPLETE BUTTON */}

                    {

                      request.status !== "Completed" && (

                        <button
                          onClick={()=>
                            markAsCompleted(
                              request.id
                            )
                          }
                          className="flex items-center gap-3 bg-green-500 hover:bg-green-600 px-6 py-4 rounded-2xl text-white font-bold transition duration-300 hover:scale-105 shadow-[0_0_25px_rgba(34,197,94,0.35)]"
                        >

                          <FaCheckCircle />

                          Completed

                        </button>

                      )

                    }

                    {/* DELETE BUTTON */}

                    <button
                      onClick={()=>
                        deleteRequest(
                          request.id
                        )
                      }
                      className="flex items-center gap-3 bg-red-500 hover:bg-red-600 px-6 py-4 rounded-2xl text-white font-bold transition duration-300 hover:scale-105 shadow-[0_0_25px_rgba(239,68,68,0.35)]"
                    >

                      <FaTrash />

                      Delete

                    </button>

                  </div>

                </motion.div>

              ))

            }

          </div>

        )

      }

    </div>

  );

}

export default RequestSection;