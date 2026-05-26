import { useState } from "react";
import {
  FaClipboardList,
  FaBars,
  FaTimes,
  FaUserCircle,
  FaPhoneAlt,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

function Navbar() {
  const navigate = useNavigate();

  const [mobileMenu, setMobileMenu] =
    useState(false);

  // GET USER NAME FROM LOCAL STORAGE

  const user =
    JSON.parse(
      localStorage.getItem("user")
    )?.name || "User";

  // SCROLL FUNCTION

  const scrollToSection = (id) => {
    const section =
      document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMobileMenu(false);
  };

  // LOGOUT

  const handleLogout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("username");

    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="sticky top-4 z-50 px-4 sm:px-8 lg:px-14 xl:px-20"
    >
      <div className="relative rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.3)]">
        
        {/* GLOW EFFECTS */}

        <div className="absolute top-[-80px] left-[10%] w-[180px] h-[180px] bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="absolute top-[-80px] right-[10%] w-[180px] h-[180px] bg-pink-500/10 rounded-full blur-3xl"></div>

        <div className="relative flex items-center justify-between px-6 lg:px-10 py-4">

          {/* LEFT SECTION */}

          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            className="flex items-center gap-4 cursor-pointer"
            onClick={() =>
              scrollToSection(
                "dashboard-home"
              )
            }
          >
            {/* ICON */}

            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-40 rounded-3xl"></div>

              <div className="relative bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 p-4 rounded-3xl shadow-[0_0_30px_rgba(0,255,255,0.4)] border border-white/10">
                <FaClipboardList className="text-white text-2xl" />
              </div>
            </div>

            {/* TEXT */}

            <div>
              <h1 className="text-2xl font-extrabold text-white tracking-wide">
                Service Request
              </h1>

              <p className="text-cyan-300 text-sm tracking-wide">
                AI Powered Platform
              </p>
            </div>
          </motion.div>

          {/* CENTER MENU */}

          <div className="hidden lg:flex items-center gap-8">
            {[
              {
                name: "Home",
                id: "dashboard-home",
              },
              {
                name: "Services",
                id: "services-section",
              },
              {
                name: "Requests",
                id: "request-section",
              },
              {
                name: "Reviews",
                id: "reviews-section",
              },
            ].map((item, index) => (
              <motion.button
                key={index}
                whileHover={{
                  scale: 1.06,
                }}
                onClick={() =>
                  scrollToSection(item.id)
                }
                className="relative text-gray-300 hover:text-cyan-300 hover:drop-shadow-[0_0_12px_rgba(0,255,255,0.9)] transition duration-300 font-semibold text-[15px]"
              >
                {item.name}

                <span className="absolute left-0 -bottom-2 w-0 hover:w-full h-[2px] bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300"></span>
              </motion.button>
            ))}
          </div>

          {/* RIGHT SECTION */}

          <div className="hidden lg:flex items-center gap-4">

            {/* CONTACT */}

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              onClick={() =>
                scrollToSection(
                  "contact-section"
                )
              }
              className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl text-white hover:bg-white/10 hover:shadow-[0_0_25px_rgba(0,255,255,0.35)] transition duration-300 backdrop-blur-xl"
            >
              <FaPhoneAlt className="text-cyan-400" />

              Contact Us
            </motion.button>

            {/* USER */}

            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl backdrop-blur-xl hover:shadow-[0_0_25px_rgba(0,255,255,0.25)] transition duration-300"
            >
              <FaUserCircle className="text-cyan-400 text-2xl" />

              <span className="text-white font-bold uppercase tracking-wide">
                {user}
              </span>
            </motion.div>

            {/* LOGOUT */}

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={handleLogout}
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] transition duration-300 px-6 py-3 rounded-2xl text-white font-bold"
            >
              Logout
            </motion.button>
          </div>

          {/* MOBILE BUTTON */}

          <button
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            className="lg:hidden text-white text-2xl"
          >
            {mobileMenu ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}

        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              className="lg:hidden border-t border-white/10 px-6 py-6"
            >
              <div className="flex flex-col gap-5 text-white font-semibold">

                <button
                  onClick={() =>
                    scrollToSection(
                      "dashboard-home"
                    )
                  }
                  className="text-left hover:text-cyan-300 transition duration-300"
                >
                  Home
                </button>

                <button
                  onClick={() =>
                    scrollToSection(
                      "services-section"
                    )
                  }
                  className="text-left hover:text-cyan-300 transition duration-300"
                >
                  Services
                </button>

                <button
                  onClick={() =>
                    scrollToSection(
                      "request-section"
                    )
                  }
                  className="text-left hover:text-cyan-300 transition duration-300"
                >
                  Requests
                </button>

                <button
                  onClick={() =>
                    scrollToSection(
                      "reviews-section"
                    )
                  }
                  className="text-left hover:text-cyan-300 transition duration-300"
                >
                  Reviews
                </button>

                <button
                  onClick={() =>
                    scrollToSection(
                      "contact-section"
                    )
                  }
                  className="flex items-center gap-2 text-left hover:text-cyan-300 transition duration-300"
                >
                  <FaPhoneAlt />

                  Contact Us
                </button>

                {/* MOBILE USER */}

                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl">
                  <FaUserCircle className="text-cyan-400 text-2xl" />

                  <span className="uppercase">
                    {user}
                  </span>
                </div>

                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 py-3 rounded-2xl font-bold hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition duration-300"
                >
                  Logout
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Navbar;