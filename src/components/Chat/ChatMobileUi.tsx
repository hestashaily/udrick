"use client";
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

// Define user type
type User = {
  id: number;
  name: string;
  profile: string;
  lastMessage: string;
  time: string;
};

// Mock data
const mockUsers: User[] = [
  {
    id: 1,
    name: "Oluwaseun Adeyemi",
    profile: "/chat/user.svg",
    lastMessage: "Hi! I’m interested in your 5 Bedroom Pavilion...",
    time: "10:45 AM",
  },
  {
    id: 2,
    name: "Ravi Kumar",
    profile: "/chat/user.svg",

    lastMessage: "Can I schedule a visit tomorrow?",
    time: "9:15 AM",
  },
];

export default function ChatMobile() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { text: string; sender: "user" | "agent"; time: string }[]
  >([]);

  const handleBack = () => setSelectedUser(null);

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessage = {
      text: input,
      sender: "user" as const,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput(""); // clear input
  };

  return (
    <div className="h-[calc(100vh-74px)] flex flex-col">
      {!selectedUser ? (
        // 🔹 Chat List View
        <div className="flex-1 overflow-y-auto">
          {mockUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-3 p-4 border-b cursor-pointer"
              onClick={() => setSelectedUser(user)}
            >
              <Image
                src={user.profile}
                alt={user.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex-1">
                <div className="font-medium">{user.name}</div>
                <div className="text-xs text-gray-500 truncate">
                  {user.lastMessage}
                </div>
              </div>
              <span className="text-xs text-gray-400">{user.time}</span>
            </div>
          ))}
        </div>
      ) : (
        // 🔹 Chat View
        <>
          {/* Header */}
          <div className="bg-gradient-to-t from-[#A68A64] to-[#936639] px-4 py-3 flex items-center gap-2">
            <ArrowLeft
              className="text-white cursor-pointer"
              onClick={handleBack}
            />
            <div className="flex items-center gap-2">
              <Image
                src={selectedUser.profile}
                alt={selectedUser.name}
                width={30}
                height={30}
                className="rounded-full"
              />
              <span className="text-white font-medium">
                {selectedUser.name}
              </span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="self-start bg-white px-4 py-2 rounded-2xl shadow-md max-w-xs text-sm">
              {selectedUser.lastMessage}
            </div>
            <p className="text-[10px] text-gray-500">{selectedUser.time}</p>

            {messages.map((msg, index) => (
              <div key={index}>
                <div
                  className={`px-4 py-2 rounded-2xl max-w-xs text-sm ${
                    msg.sender === "user"
                      ? "self-end bg-[#936639] text-white ml-auto"
                      : "self-start bg-white shadow-md"
                  }`}
                >
                  {msg.text}
                </div>
                <p
                  className={`text-[10px] text-gray-500 ${
                    msg.sender === "user" ? "text-right" : ""
                  }`}
                >
                  {msg.time}
                </p>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type message..."
              className="flex-1 px-3 py-2 rounded-full bg-gray-100 text-sm"
            />
            <button
              onClick={handleSend}
              className="bg-[#936639] text-white px-4 py-2 rounded-full text-sm"
            >
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
}
