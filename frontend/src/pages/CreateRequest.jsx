import { useState } from "react";

import { motion } from "framer-motion";

import { toast } from "react-toastify";

import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

import {

  FaClipboardList,
  FaMapMarkerAlt,
  FaTools,
  FaCalendarAlt,
  FaFileAlt,
  FaRobot,
  FaExclamationTriangle,
  FaChartLine,
  FaClock

} from "react-icons/fa";

import Navbar from "../components/Navbar";

import BackgroundEffects from "../components/BackgroundEffects";

import API from "../services/api";

function CreateRequest() {

  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [aiCategory, setAiCategory] =
    useState("");

  const [priority, setPriority] =
    useState("");

  const [confidence, setConfidence] =
    useState("");

  const [estimatedTime, setEstimatedTime] =
    useState("");

  const [urgent, setUrgent] =
    useState(false);

  const [formData, setFormData] =
    useState({

      title: "",
      description: "",
      category: "",
      address: "",
      preferred_time: ""

    });

  // AI CATEGORY DETECTION
  const detectCategory = (text) => {

    const lowerText =
      text.toLowerCase();

    // ELECTRICAL
    if (

      lowerText.includes("switch") ||
      lowerText.includes("power") ||
      lowerText.includes("electric") ||
      lowerText.includes("light") ||
      lowerText.includes("fan") ||
      lowerText.includes("wiring")

    ) {

      setPriority("High");
      setConfidence("95%");
      setEstimatedTime("1 - 2 Hours");

      return "Electrical";

    }

    // PLUMBING
    else if (

      lowerText.includes("water") ||
      lowerText.includes("pipe") ||
      lowerText.includes("tap") ||
      lowerText.includes("leak") ||
      lowerText.includes("drain") ||
      lowerText.includes("bathroom")

    ) {

      setPriority("Medium");
      setConfidence("92%");
      setEstimatedTime("2 - 4 Hours");

      return "Plumbing";

    }

    // CLEANING
    else if (

      lowerText.includes("clean") ||
      lowerText.includes("garbage") ||
      lowerText.includes("dust") ||
      lowerText.includes("dirty")

    ) {

      setPriority("Low");
      setConfidence("90%");
      setEstimatedTime("4 - 6 Hours");

      return "Cleaning";

    }

    // MAINTENANCE
    else if (

      lowerText.includes("repair") ||
      lowerText.includes("maintenance") ||
      lowerText.includes("broken") ||
      lowerText.includes("fix")

    ) {

      setPriority("Medium");
      setConfidence("88%");
      setEstimatedTime("3 - 5 Hours");

      return "Maintenance";

    }

    return "";

  };

  // URGENCY DETECTION
  const detectUrgency = (text) => {

    const lowerText =
      text.toLowerCase();

    if (

      lowerText.includes("urgent") ||
      lowerText.includes("emergency") ||
      lowerText.includes("immediately") ||
      lowerText.includes("danger")

    ) {

      setUrgent(true);

    }

    else {

      setUrgent(false);

    }

  };

  // HANDLE CHANGE
  const handleChange = (e) => {

    const { name, value } = e.target;

    if (name === "description") {

      const predictedCategory =
        detectCategory(value);

      detectUrgency(value);

      setAiCategory(
        predictedCategory
      );

      setFormData({

        ...formData,

        description: value,

        category:
          predictedCategory ||
          formData.category

      });

    }

    else {

      setFormData({

        ...formData,

        [name]: value

      });

    }

  };

  // RESET FORM
  const resetForm = () => {

    setAiCategory("");
    setPriority("");
    setConfidence("");
    setEstimatedTime("");
    setUrgent(false);

    setFormData({

      title: "",
      description: "",
      category: "",
      address: "",
      preferred_time: ""

    });

  };

  // SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const token =
        localStorage.getItem("token");

      await API.post(

        "/requests",

        formData,

        {

          headers: {

            Authorization:
              `Bearer ${token}`

          }

        }

      );

      const ticketId =

        "SR" +

        Math.floor(

          100000 +
          Math.random() * 900000

        );

      toast.success(
        "Request created successfully"
      );

      Swal.fire({

        icon: "success",

        title:
          "Request Submitted Successfully",

        background: "#111827",

        color: "#ffffff",

        confirmButtonColor: "#06b6d4",

        confirmButtonText:
          "Create Another Request",

        html: `

          <div style="text-align:left;font-size:15px">

            <p>
              <strong>Ticket ID:</strong>
              ${ticketId}
            </p>

            <p>
              <strong>Status:</strong>
              Pending Review
            </p>

            <p>
              <strong>AI Category:</strong>
              ${formData.category}
            </p>

            <p>
              <strong>Priority:</strong>
              ${priority}
            </p>

            <p>
              <strong>AI Confidence:</strong>
              ${confidence}
            </p>

            <p>
              <strong>Estimated Response:</strong>
              ${estimatedTime}
            </p>

          </div>

        `

      });

      resetForm();

    }

    catch (error) {

      console.log(error);

      toast.error(
        "Failed to create request"
      );

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#060B28] via-[#0B113B] to-[#130F40]">

      <BackgroundEffects />

      <Navbar />

      <div

        id="create-request-section"

        className="relative z-10 max-w-4xl mx-auto px-6 py-16"

      >

        {/* Heading */}
        <motion.div

          initial={{
            opacity: 0,
            y: -20
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          className="text-center mb-14"

        >

          <h1 className="text-6xl font-extrabold text-white mb-5">

            Create Service Request

          </h1>

          <p className="text-gray-300 text-xl">

            AI Assisted Request Classification System

          </p>

        </motion.div>

        {/* FORM */}
        <motion.div

          initial={{
            opacity: 0,
            y: 40
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[36px] shadow-2xl p-10"

        >

          <form
            onSubmit={handleSubmit}
            className="space-y-8"
          >

            {/* TITLE */}
            <div>

              <label className="block text-white font-semibold mb-3 text-lg">

                Request Title

              </label>

              <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl px-5 py-4">

                <FaClipboardList className="text-cyan-400 text-xl mr-4" />

                <input
                  type="text"
                  name="title"
                  placeholder="Enter request title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="bg-transparent w-full outline-none text-white placeholder-gray-400"
                />

              </div>

            </div>

            {/* DESCRIPTION */}
            <div>

              <label className="block text-white font-semibold mb-3 text-lg">

                Description

              </label>

              <div className="flex items-start bg-white/5 border border-white/10 rounded-2xl px-5 py-4">

                <FaFileAlt className="text-cyan-400 text-xl mr-4 mt-1" />

                <textarea
                  name="description"
                  placeholder="Describe your issue"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="bg-transparent w-full outline-none text-white placeholder-gray-400 resize-none"
                />

              </div>

            </div>

            {/* AI INSIGHTS */}
            {

              aiCategory && (

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  {/* CATEGORY */}
                  <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-5">

                    <div className="flex items-center gap-3 text-cyan-300 font-bold mb-2">

                      <FaRobot />

                      AI Category

                    </div>

                    <p className="text-white text-xl">

                      {aiCategory}

                    </p>

                  </div>

                  {/* PRIORITY */}
                  <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5">

                    <div className="flex items-center gap-3 text-red-300 font-bold mb-2">

                      <FaExclamationTriangle />

                      Priority

                    </div>

                    <p className="text-white text-xl">

                      {priority}

                    </p>

                  </div>

                  {/* CONFIDENCE */}
                  <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-5">

                    <div className="flex items-center gap-3 text-green-300 font-bold mb-2">

                      <FaChartLine />

                      AI Confidence

                    </div>

                    <p className="text-white text-xl">

                      {confidence}

                    </p>

                  </div>

                  {/* RESPONSE */}
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-5">

                    <div className="flex items-center gap-3 text-yellow-300 font-bold mb-2">

                      <FaClock />

                      Estimated Response

                    </div>

                    <p className="text-white text-xl">

                      {estimatedTime}

                    </p>

                  </div>

                </div>

              )

            }

            {

              urgent && (

                <div className="bg-red-500/20 border border-red-500/30 text-red-300 px-6 py-4 rounded-2xl font-bold">

                  🚨 Urgency Detected:
                  This request may require immediate attention.

                </div>

              )

            }

            {/* CATEGORY */}
            <div>

              <label className="block text-white font-semibold mb-3 text-lg">

                Category

              </label>

              <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl px-5 py-4">

                <FaTools className="text-cyan-400 text-xl mr-4" />

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="bg-transparent w-full outline-none text-white"
                >

                  <option className="text-black" value="">
                    Select Category
                  </option>

                  <option className="text-black">
                    Electrical
                  </option>

                  <option className="text-black">
                    Plumbing
                  </option>

                  <option className="text-black">
                    Cleaning
                  </option>

                  <option className="text-black">
                    Maintenance
                  </option>

                </select>

              </div>

            </div>

            {/* ADDRESS */}
            <div>

              <label className="block text-white font-semibold mb-3 text-lg">

                Address

              </label>

              <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl px-5 py-4">

                <FaMapMarkerAlt className="text-cyan-400 text-xl mr-4" />

                <input
                  type="text"
                  name="address"
                  placeholder="Enter address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="bg-transparent w-full outline-none text-white placeholder-gray-400"
                />

              </div>

            </div>

            {/* TIME */}
            <div>

              <label className="block text-white font-semibold mb-3 text-lg">

                Preferred Time

              </label>

              <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl px-5 py-4">

                <FaCalendarAlt className="text-cyan-400 text-xl mr-4" />

                <input
                  type="datetime-local"
                  name="preferred_time"
                  value={formData.preferred_time}
                  onChange={handleChange}
                  required
                  className="bg-transparent w-full outline-none text-white"
                />

              </div>

            </div>

            {/* BUTTON */}
            <motion.button

              whileHover={{
                scale: 1.03
              }}

              whileTap={{
                scale: 0.97
              }}

              type="submit"

              disabled={loading}

              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-cyan-500/30 hover:shadow-2xl transition duration-300 text-white py-5 rounded-2xl font-bold text-xl"

            >

              {

                loading
                  ? "Creating Request..."
                  : "Create Request"

              }

            </motion.button>

          </form>

        </motion.div>

      </div>

    </div>

  )

}

export default CreateRequest;