import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import StatsCards from "../components/StatsCards";
import RequestSection from "../components/RequestSection";
import BackgroundEffects from "../components/BackgroundEffects";

import API from "../services/api";
import { toast } from "react-toastify";

import electricalImg from "../assets/services/electrical.jpg";
import plumbingImg from "../assets/services/plumbing.jpg";
import cleaningImg from "../assets/services/cleaning.jpg";
import maintenanceImg from "../assets/services/maintenance.jpg";

import {
  FaStar,
  FaBolt,
  FaTint,
  FaBroom,
  FaTools,
  FaPaperPlane,
  FaArrowRight,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviewName, setReviewName] = useState("");
  const [userReviews, setUserReviews] = useState([]);

  // FETCH REQUESTS

  const fetchRequests = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await API.get("/requests", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setRequests(response.data);

      setLoading(false);
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // DELETE REQUEST

  const deleteRequest = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await API.delete(`/requests/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchRequests();

      toast.success("Request deleted successfully");
    } catch (error) {
      toast.error("Failed to delete request");
    }
  };

  // STATS

  const totalRequests = requests.length;

  const completedRequests = requests.filter(
    (request) => request.status === "Completed"
  ).length;

  const pendingRequests = requests.filter(
    (request) => request.status === "Pending"
  ).length;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#140B45]">
      <BackgroundEffects />

      {/* PREMIUM BLOBS */}

      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="absolute top-[20%] right-[-120px] w-[420px] h-[420px] bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-150px] left-[30%] w-[350px] h-[350px] bg-blue-500/20 rounded-full blur-3xl"></div>

      <Navbar />

      <div
        id="dashboard-home"
        className="relative z-10 w-full px-4 sm:px-8 lg:px-14 xl:px-20 py-8"
      >
        {/* HERO SECTION */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[50px] bg-gradient-to-r from-[#1B1464]/90 via-[#2B1E8A]/90 to-[#1B1464]/90 border border-white/10 backdrop-blur-2xl shadow-[0_0_100px_rgba(0,255,255,0.08)] p-8 md:p-16 mb-20"
        >
          <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-3xl"></div>

          <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-pink-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}

            <div>
              <div className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-400/20 px-6 py-3 rounded-full text-cyan-300 font-semibold mb-8">
                🤖 AI Powered Smart Platform
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-8">
                Creative
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-500 bg-clip-text text-transparent">
                  AI Service
                </span>
                Platform
              </h1>

              <p className="text-gray-300 text-xl leading-10 max-w-2xl mb-10">
                Manage service requests smarter with our futuristic AI-powered
                platform designed for modern homes and businesses.
              </p>

              <div className="flex flex-wrap gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/create-request")}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-5 rounded-2xl text-white font-bold text-lg shadow-[0_0_40px_rgba(0,255,255,0.3)]"
                >
                  Create Request
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    document
                      .getElementById("services-section")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                  className="bg-white/5 border border-white/10 backdrop-blur-xl px-8 py-5 rounded-2xl text-white font-bold text-lg"
                >
                  Explore Services
                </motion.button>
              </div>

              {/* FEATURE TAGS */}

              <div className="flex flex-wrap gap-4 mt-10">
                {[
                  "AI Tracking",
                  "24/7 Support",
                  "Fast Service",
                  "Smart Categorization",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 border border-white/10 px-5 py-3 rounded-2xl text-gray-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}

            <div className="relative flex justify-center items-center">
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                }}
                className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-[50px] bg-gradient-to-br from-cyan-500/20 to-pink-500/20 border border-white/10 backdrop-blur-2xl shadow-[0_0_70px_rgba(0,255,255,0.15)]"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                    }}
                    className="w-44 h-44 md:w-56 md:h-56 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 flex items-center justify-center shadow-[0_0_60px_rgba(0,255,255,0.5)]"
                  >
                    <span className="text-7xl md:text-8xl">🤖</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* STATS */}

        <StatsCards
          totalRequests={totalRequests}
          completedRequests={completedRequests}
          pendingRequests={pendingRequests}
        />

        {/* ABOUT SECTION */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-24">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] p-10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our Platform?
            </h2>

            <p className="text-gray-300 text-lg leading-9">
              Our intelligent service management system helps users create,
              manage, and track service requests efficiently.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4 text-white">
                <FaArrowRight className="text-cyan-400" />
                AI Powered Tracking
              </div>

              <div className="flex items-center gap-4 text-white">
                <FaArrowRight className="text-pink-400" />
                Premium User Experience
              </div>

              <div className="flex items-center gap-4 text-white">
                <FaArrowRight className="text-blue-400" />
                Responsive Modern Design
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-pink-500/10 backdrop-blur-2xl border border-white/10 rounded-[36px] p-10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Smart Features
            </h2>

            <div className="grid grid-cols-2 gap-6">
              {["Tracking", "Requests", "Responsive", "Secure"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 p-6 rounded-3xl"
                  >
                    <h3 className="text-cyan-300 text-2xl font-bold mb-3">
                      0{index + 1}
                    </h3>

                    <p className="text-gray-300">{item}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* SERVICES */}

        <div id="services-section" className="mt-28">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Our Premium Services
            </h2>

            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-9">
              Explore professional home and business services powered by modern
              AI-based request management and intelligent tracking.
            </p>

            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
            {[
              {
                title: "Electrical",
                image: electricalImg,
                icon: <FaBolt className="text-cyan-400 text-4xl mb-5" />,
                description:
                  "Professional electrical repair and installation services.",
                link: "/services/electrical",
              },
              {
                title: "Plumbing",
                image: plumbingImg,
                icon: <FaTint className="text-green-400 text-4xl mb-5" />,
                description:
                  "Expert plumbing solutions for homes and businesses.",
                link: "/services/plumbing",
              },
              {
                title: "Cleaning",
                image: cleaningImg,
                icon: <FaBroom className="text-purple-400 text-4xl mb-5" />,
                description:
                  "High-quality residential and commercial cleaning services.",
                link: "/services/cleaning",
              },
              {
                title: "Maintenance",
                image: maintenanceImg,
                icon: <FaTools className="text-orange-400 text-4xl mb-5" />,
                description:
                  "Complete maintenance support for all property needs.",
                link: "/services/maintenance",
              },
            ].map((service, index) => (
              <Link key={index} to={service.link}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] hover:shadow-cyan-500/20 transition duration-500"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="p-7">
                    {service.icon}

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 leading-8">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* REQUEST SECTION */}

        <div id="request-section" className="mt-28">
          <RequestSection
            requests={requests}
            deleteRequest={deleteRequest}
            loading={loading}
          />
        </div>

        {/* REVIEWS */}

        <div id="reviews-section" className="mt-28">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Customer Reviews
            </h2>

            <p className="text-gray-300 text-xl">
              See what users say about our premium AI-powered platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {userReviews.map((review, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[32px] p-8"
              >
                <div className="flex items-center gap-2 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-yellow-400 text-xl"
                    />
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {review.name}
                </h3>

                <p className="text-gray-300 leading-8">
                  {review.review}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FEEDBACK */}

        <div id="feedback-section" className="mt-28 mb-20">
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-pink-500/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8 md:p-14">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-white mb-5">
                Share Your Experience
              </h2>

              <p className="text-gray-300 text-xl">
                Your feedback helps us improve the platform.
              </p>
            </div>

            <div className="space-y-6 max-w-3xl mx-auto">
              <input
                type="text"
                placeholder="Enter Your Name"
                value={reviewName}
                onChange={(e) => setReviewName(e.target.value)}
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-gray-400 outline-none"
              />

              <textarea
                rows="6"
                placeholder="Write your experience..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-gray-400 outline-none resize-none"
              />

              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                  >
                    <FaStar
                      className={`text-3xl ${
                        star <= rating
                          ? "text-yellow-400"
                          : "text-gray-500"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                onClick={async () => {
                  if (!reviewName || !reviewText || rating === 0) {
                    toast.error("Please fill all feedback details");
                    return;
                  }

                  try {
                    await API.post("/reviews", {
                      name: reviewName,
                      review: reviewText,
                      rating,
                    });

                    setUserReviews([
                      {
                        name: reviewName,
                        review: reviewText,
                        rating,
                      },
                      ...userReviews,
                    ]);

                    toast.success(
                      "Feedback submitted successfully!"
                    );

                    setReviewName("");
                    setReviewText("");
                    setRating(0);
                  } catch (error) {
                    toast.error("Failed to submit feedback");
                  }
                }}
                className="bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 px-8 py-5 rounded-2xl text-white font-bold text-lg flex items-center gap-3"
              >
                <FaPaperPlane />
                Submit Feedback
              </motion.button>
            </div>
          </div>
        </div>

        {/* FOOTER */}

        <footer
          id="contact-section"
          className="mt-28 border-t border-white/10 bg-white/5 backdrop-blur-2xl"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

              {/* LEFT */}

              <div>
                <h2 className="text-3xl font-bold text-white mb-5">
                  AI Service Platform
                </h2>

                <p className="text-gray-300 leading-8">
                  Modern AI-powered service request platform designed for smart
                  service management, seamless tracking, premium UI experience
                  and fast user support.
                </p>
              </div>

              {/* CENTER */}

              <div>
                <h2 className="text-3xl font-bold text-white mb-5">
                  Quick Links
                </h2>

                <div className="flex flex-col gap-4">
                  <button
                    onClick={() =>
                      document
                        .getElementById("dashboard-home")
                        ?.scrollIntoView({
                          behavior: "smooth",
                        })
                    }
                    className="text-left text-gray-300 hover:text-cyan-400 transition duration-300"
                  >
                    Home
                  </button>

                  <button
                    onClick={() =>
                      document
                        .getElementById("services-section")
                        ?.scrollIntoView({
                          behavior: "smooth",
                        })
                    }
                    className="text-left text-gray-300 hover:text-cyan-400 transition duration-300"
                  >
                    Services
                  </button>

                  <button
                    onClick={() =>
                      document
                        .getElementById("request-section")
                        ?.scrollIntoView({
                          behavior: "smooth",
                        })
                    }
                    className="text-left text-gray-300 hover:text-cyan-400 transition duration-300"
                  >
                    Requests
                  </button>

                  <button
                    onClick={() =>
                      document
                        .getElementById("reviews-section")
                        ?.scrollIntoView({
                          behavior: "smooth",
                        })
                    }
                    className="text-left text-gray-300 hover:text-cyan-400 transition duration-300"
                  >
                    Reviews
                  </button>
                </div>
              </div>

              {/* RIGHT */}

              <div>
                <h2 className="text-3xl font-bold text-white mb-5">
                  Connect With Me
                </h2>

                <div className="flex items-center gap-5 mb-6">
                  <a
                    href="https://www.linkedin.com/in/kaiffaraz"
                    target="_blank"
                    rel="noreferrer"
                    className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-cyan-400 text-2xl hover:scale-110 hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition duration-300"
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href="https://github.com/kaiffaraz"
                    target="_blank"
                    rel="noreferrer"
                    className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white text-2xl hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition duration-300"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.instagram.com/kaif_faraz_18?igsh=cWt1M3h5bTJsd3c0"
                    target="_blank"
                    rel="noreferrer"
                    className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-pink-400 text-2xl hover:scale-110 hover:shadow-[0_0_25px_rgba(255,0,128,0.5)] transition duration-300"
                  >
                    <FaInstagram />
                  </a>
                </div>

                <p className="text-gray-300 leading-8">
                  Founder & Developed By
                </p>

                <h3 className="text-2xl font-bold text-white mt-2">
                  Shaik Mohammad Kaif Faraz
                </h3>

                <p className="text-cyan-300 mt-3">
                  smdkaiffaraz@gmail.com
                </p>
              </div>
            </div>

            {/* BOTTOM */}

            <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
              <p className="text-gray-400 text-center md:text-left">
                © 2026 AI Service Platform. All Rights Reserved.
              </p>

              <p className="text-gray-400 text-center md:text-right">
                Designed & Developed By
                <span className="text-cyan-400 font-semibold">
                  {" "}Shaik Mohammad Kaif Faraz
                </span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Dashboard;