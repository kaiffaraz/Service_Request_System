import { useState } from "react";

import {

  FaRobot,
  FaPaperPlane,
  FaTimes,
  FaCircle

} from "react-icons/fa";

import {

  motion,
  AnimatePresence

} from "framer-motion";

function AIChatbot() {

  const [isOpen, setIsOpen] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [chat, setChat] =
    useState([

      {

        sender: "bot",

        text:
          "Hello 👋 I am your AI Service Assistant. How can I help you today?"

      }

    ]);

  // AI RESPONSE SYSTEM
  const getBotResponse = (msg) => {

    const lowerMsg =
      msg.toLowerCase();

    // GREETINGS
    if (

      lowerMsg.includes("hello") ||
      lowerMsg.includes("hi") ||
      lowerMsg.includes("hey")

    ) {

      return "Hello 👋 Welcome to the AI Service Assistant. How may I assist you today?";

    }

    // CREATE REQUEST
    else if (

      lowerMsg.includes("create request") ||
      lowerMsg.includes("raise request") ||
      lowerMsg.includes("submit request") ||
      lowerMsg.includes("how to create request")

    ) {

      return "Go to the Create Request page, fill in your issue details, choose the category, and submit the request.";

    }

    // SERVICES
    else if (

      lowerMsg.includes("services") ||
      lowerMsg.includes("available services") ||
      lowerMsg.includes("what services")

    ) {

      return "We currently provide Electrical, Plumbing, Cleaning, and Maintenance services.";

    }

    // ELECTRICAL
    else if (

      lowerMsg.includes("electrical") ||
      lowerMsg.includes("power") ||
      lowerMsg.includes("light") ||
      lowerMsg.includes("fan")

    ) {

      return "Electrical services include switch repair, power issues, fan repair, wiring problems, and lighting support.";

    }

    // PLUMBING
    else if (

      lowerMsg.includes("plumbing") ||
      lowerMsg.includes("pipe") ||
      lowerMsg.includes("water") ||
      lowerMsg.includes("leak")

    ) {

      return "Plumbing services include pipe leakage, drainage issues, tap repair, bathroom maintenance, and water supply support.";

    }

    // CLEANING
    else if (

      lowerMsg.includes("cleaning") ||
      lowerMsg.includes("garbage") ||
      lowerMsg.includes("dirty")

    ) {

      return "Cleaning services include garbage cleaning, room cleaning, maintenance cleaning, and sanitation services.";

    }

    // MAINTENANCE
    else if (

      lowerMsg.includes("maintenance") ||
      lowerMsg.includes("repair") ||
      lowerMsg.includes("fix")

    ) {

      return "Maintenance services include general repairs, damaged equipment fixing, and property maintenance support.";

    }

    // TRACK REQUEST
    else if (

      lowerMsg.includes("track") ||
      lowerMsg.includes("status") ||
      lowerMsg.includes("request status")

    ) {

      return "You can track your request status directly from the dashboard section.";

    }

    // RESPONSE TIME
    else if (

      lowerMsg.includes("response time") ||
      lowerMsg.includes("how long") ||
      lowerMsg.includes("when will team contact")

    ) {

      return "Our average response time is approximately 2 to 4 hours depending on the issue type.";

    }

    // LOGIN
    else if (

      lowerMsg.includes("login") ||
      lowerMsg.includes("register") ||
      lowerMsg.includes("signup")

    ) {

      return "You can login or register from the authentication pages to access the service platform.";

    }

    // EMERGENCY
    else if (

      lowerMsg.includes("emergency") ||
      lowerMsg.includes("urgent") ||
      lowerMsg.includes("immediate help")

    ) {

      return "For urgent service requests, please mention the issue clearly while creating the request so our team can prioritize it.";

    }

    // SUPPORT TEAM
    else if (

      lowerMsg.includes("support") ||
      lowerMsg.includes("customer care") ||
      lowerMsg.includes("help desk")

    ) {

      return "Our support team is available to assist you with all service-related issues and requests.";

    }

    // THANK YOU
    else if (

      lowerMsg.includes("thank you") ||
      lowerMsg.includes("thanks")

    ) {

      return "You're welcome 😊 Happy to assist you anytime.";

    }

    // DASHBOARD
    else if (

      lowerMsg.includes("dashboard")

    ) {

      return "The dashboard allows you to manage requests, track statuses, and access services.";

    }

    // AI FEATURES
    else if (

      lowerMsg.includes("ai") ||
      lowerMsg.includes("artificial intelligence")

    ) {

      return "This platform uses AI-assisted features like smart request categorization and intelligent support assistance.";

    }

    // DEFAULT RESPONSE
    else {

      return "I understand your query. Our support team will assist you shortly. Please provide more details if needed.";

    }

  };

  // SEND MESSAGE
  const sendMessage = () => {

    if (!message.trim()) return;

    // USER MESSAGE
    const userMessage = {

      sender: "user",

      text: message

    };

    // BOT RESPONSE
    const botMessage = {

      sender: "bot",

      text: getBotResponse(message)

    };

    setChat([
      ...chat,
      userMessage,
      botMessage
    ]);

    setMessage("");

  };

  return (

    <div className="fixed bottom-6 right-6 z-50">

      {/* CHAT BUTTON */}
      {

        !isOpen && (

          <motion.button

            whileHover={{ scale: 1.05 }}

            whileTap={{ scale: 0.95 }}

            onClick={() =>
              setIsOpen(true)
            }

            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-cyan-500/40 hover:shadow-2xl text-white px-6 py-4 rounded-2xl flex items-center gap-4 shadow-2xl"

          >

            {/* ICON */}
            <div className="bg-white/20 p-3 rounded-full">

              <FaRobot size={24} />

            </div>

            {/* TEXT */}
            <div className="text-left">

              <h3 className="font-bold text-lg">

                AI Assistant

              </h3>

              <p className="text-sm text-gray-100">

                Ask anything...

              </p>

            </div>

          </motion.button>

        )

      }

      {/* CHAT WINDOW */}
      <AnimatePresence>

        {

          isOpen && (

            <motion.div

              initial={{
                opacity: 0,
                y: 50,
                scale: 0.9
              }}

              animate={{
                opacity: 1,
                y: 0,
                scale: 1
              }}

              exit={{
                opacity: 0,
                y: 50,
                scale: 0.9
              }}

              transition={{
                duration: 0.3
              }}

              className="w-[420px] h-[650px] bg-[#0B113B]/95 backdrop-blur-2xl border border-cyan-500/20 rounded-[32px] shadow-[0_0_40px_rgba(0,255,255,0.15)] overflow-hidden flex flex-col"

            >

              {/* HEADER */}
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-5 flex items-center justify-between">

                {/* LEFT */}
                <div className="flex items-center gap-4">

                  {/* BOT ICON */}
                  <div className="bg-white/20 p-3 rounded-full">

                    <FaRobot
                      className="text-white"
                      size={24}
                    />

                  </div>

                  {/* TEXT */}
                  <div>

                    <h2 className="text-white font-bold text-xl">

                      AI Assistant

                    </h2>

                    <div className="flex items-center gap-2 text-green-200 text-sm">

                      <FaCircle size={10} />

                      Online

                    </div>

                  </div>

                </div>

                {/* CLOSE BUTTON */}
                <button

                  onClick={() =>
                    setIsOpen(false)
                  }

                  className="text-white hover:text-red-300 transition"

                >

                  <FaTimes size={22} />

                </button>

              </div>

              {/* CHAT AREA */}
              <div className="flex-1 overflow-y-auto p-6 space-y-5">

                {

                  chat.map((msg, index) => (

                    <div

                      key={index}

                      className={`flex ${
                        msg.sender === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}

                    >

                      <div

                        className={`max-w-[80%] px-5 py-4 rounded-3xl text-sm leading-relaxed ${
                          msg.sender === "user"
                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                            : "bg-white/10 text-gray-200 border border-white/10"
                        }`}

                      >

                        {msg.text}

                      </div>

                    </div>

                  ))

                }

              </div>

              {/* INPUT AREA */}
              <div className="p-5 border-t border-white/10 bg-black/10">

                <div className="flex items-center gap-3">

                  <input

                    type="text"

                    placeholder="Type your message..."

                    value={message}

                    onChange={(e) =>
                      setMessage(e.target.value)
                    }

                    onKeyDown={(e) => {

                      if (e.key === "Enter") {

                        sendMessage();

                      }

                    }}

                    className="flex-1 bg-white/10 text-white placeholder-gray-400 px-5 py-4 rounded-2xl outline-none border border-white/10 focus:border-cyan-400"

                  />

                  <motion.button

                    whileHover={{ scale: 1.05 }}

                    whileTap={{ scale: 0.95 }}

                    onClick={sendMessage}

                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-cyan-500/40 hover:shadow-xl text-white p-5 rounded-2xl"

                  >

                    <FaPaperPlane />

                  </motion.button>

                </div>

              </div>

            </motion.div>

          )

        }

      </AnimatePresence>

    </div>

  )

}

export default AIChatbot;