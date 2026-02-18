"use client";

import React, { useState, useRef, useEffect } from "react";
import { IoChatbubbleEllipses, IoClose, IoSend } from "react-icons/io5";
import { FiUser, FiCpu } from "react-icons/fi";
import { useScrollVisibility } from "@/app/hooks/useScrollVisibility";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!res.ok) throw new Error("API error");

      const reader = res.body?.getReader();
      let assistantMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: "",
      };

      if (reader) {
        const decoder = new TextDecoder();
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          assistantMessage.content += decoder.decode(value);
          setMessages((prev) => [
            ...prev.filter((m) => m.id !== assistantMessage.id),
            assistantMessage,
          ]);
        }
      } else {
        const data = await res.text();
        assistantMessage.content = data;
        setMessages((prev) => [...prev, assistantMessage]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chatbox */}
      {isOpen && (
        <div className="fixed right-2 md:right-24 bottom-20 md:bottom-6 z-50 sm:w-85 md:w-96 
                        h-[calc(100vh-200px)] sm:h-125 md:h-140
                        bg-[#120718] border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-4 bg-[#7849d5] text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FiCpu />
              <span className="font-semibold">Ed's AI Agent</span>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <IoClose size={22} />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 scroll-smooth"
          >
            {messages.length === 0 && !isLoading && (
              <div className="text-gray-500 text-xs text-center mt-10 sm:mt-20 italic px-4">
                Ask me about my services or tech stack!
              </div>
            )}

            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex gap-2 max-w-[90%] sm:max-w-[85%] ${
                    m.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`mt-1 p-1.5 rounded-full h-fit shrink-0 ${
                      m.role === "user" ? "bg-[#7849d5]" : "bg-gray-800"
                    }`}
                  >
                    {m.role === "user" ? (
                      <FiUser size={12} className="text-white" />
                    ) : (
                      <FiCpu size={12} className="text-white" />
                    )}
                  </div>
                  <div
                    className={`p-2.5 sm:p-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-[#7849d5] text-white rounded-tr-none shadow-md"
                        : "bg-gray-800 text-gray-200 rounded-tl-none border border-gray-700"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-none animate-pulse text-gray-400 text-xs">
                  Typing...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="p-2 sm:p-3 bg-[#1a0b2e] border-t border-gray-800 flex gap-2"
          >
            <input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-[#120718] border border-gray-700 rounded-xl px-3 sm:px-4 py-2 text-white text-xs sm:text-sm focus:outline-none focus:border-[#7849d5] placeholder:text-gray-600"
            />
            <button
              type="submit"
              disabled={isLoading || !inputText.trim()}
              className="p-2.5 sm:p-3 bg-[#7849d5] text-white rounded-xl hover:bg-[#663dbd] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
            >
              <IoSend className="text-base sm:text-lg" />
            </button>
          </form>
        </div>
      )}

      {/* Launcher button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-6 z-50 bg-[#7849d5] w-12 h-12 flex justify-center items-center rounded-full shadow-[0_0_20px_rgba(120,73,213,0.4)] hover:scale-105 active:scale-95 transition-all text-white"
        style={{ bottom: 24 }}
      >
        {isOpen ? <IoClose size={28} /> : <IoChatbubbleEllipses size={28} />}
      </button>
    </>
  );
};

export default Chatbot;