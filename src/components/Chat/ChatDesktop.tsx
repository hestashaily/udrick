// app/chat/page.tsx
"use client";

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MoreVertical, Send } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

const initialContacts = [
  {
    id: 1,
    name: "Oluwaseun Adeyemi",
    subtitle: "Modern Downtown Apartment",
    lastMessage: "The property viewing is confi...",
    time: "2 min ago",
    unread: 2,
  },
  {
    id: 2,
    name: "Mike Chen",
    subtitle: "Luxury Family Villa",
    lastMessage: "I have some similar propertie...",
    time: "1 hour ago",
    unread: 0,
  },
  {
    id: 3,
    name: "Emma Wilson",
    subtitle: "Cozy Studio Loft",
    lastMessage: "Thank you for your interest i",
    time: "3 hours ago",
    unread: 0,
  },
];

const initialMessages: Record<
  number,
  { id: number; text: string; time: string; sender: "user" | "agent" }[]
> = {
  1: [
    {
      id: 1,
      text: "Hi! I saw your interest in the Modern Downtown Apartment. I'd be happy to help you with any questions you might have.",
      time: "10:30AM",
      sender: "agent",
    },
    {
      id: 2,
      text: "Thank you! I'm really interested in this property. Could we schedule a viewing?",
      time: "10:35AM",
      sender: "user",
    },
    {
      id: 3,
      text: "Absolutely! I have availability tomorrow afternoon. Would 2 PM work for you?",
      time: "10:37AM",
      sender: "agent",
    },
    {
      id: 4,
      text: "That works perfectly! Should I bring any documents with me?",
      time: "10:35AM",
      sender: "user",
    },
    {
      id: 5,
      text: "Great! Just bring a valid ID. I'll also prepare some information about the neighborhood and financing options.",
      time: "10:42AM",
      sender: "agent",
    },
    {
      id: 6,
      text: "The property viewing is confirmed for tomorrow at 2 PM. I'll meet you at the lobby entrance.",
      time: "10:45AM",
      sender: "agent",
    },
  ],
  2: [],
  3: [],
};

const Chat = () => {
  const [input, setInput] = useState("");
  const [selectedContactId, setSelectedContactId] = useState(1);
  const [messages, setMessages] = useState(initialMessages);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const selectedContact = initialContacts.find(
    (c) => c.id === selectedContactId
  )!;
  const currentMessages = messages[selectedContactId];

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = {
      id: Date.now(),
      text: input,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      sender: "user" as const,
    };
    setMessages((prev) => ({
      ...prev,
      [selectedContactId]: [...prev[selectedContactId], newMessage],
    }));
    setInput("");
  };

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, selectedContactId]);

  return (
    // <div className="flex container mx-auto p-4 gap-4 h-[calc(100vh-74px)]">
    <div className="flex flex-col sm:flex-row w-full max-w-screen-xl mx-auto gap-4 p-4 h-[calc(100vh-74px)]">
      {/* Sidebar */}
      {/* <aside className="w-full sm:w-[300px] border rounded-2xl border-gray-200 p-4"> */}
      <aside className="w-full sm:w-[300px] border rounded-2xl border-gray-200 p-4">
        <Input placeholder="Search Conversation" className="mb-4" />
        <ul className="space-y-2">
          {initialContacts.map((contact) => (
            <li
              key={contact.id}
              className={clsx(
                "rounded-xl p-3 cursor-pointer",
                contact.id === selectedContactId
                  ? "bg-muted"
                  : "hover:bg-muted/50"
              )}
              onClick={() => setSelectedContactId(contact.id)}
            >
              <div className="flex items-center gap-3">
                <Image
                  src={`/chat/user.svg`}
                  alt={contact.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-foreground">
                    {contact.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {contact.subtitle}
                  </p>
                </div>
                {contact.unread > 0 && (
                  <span className="text-xs bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center">
                    {contact.unread}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-1 truncate">
                {contact.lastMessage}
              </p>
            </li>
          ))}
        </ul>
      </aside>

      {/* Chat Area */}
      {/* <main className="flex-1 flex border  rounded-2xl flex-col"> */}
      <main className="flex-1 flex border rounded-2xl flex-col overflow-hidden">
        <div className="border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex gap-6 items-center">
            <Image
              src={`/chat/user.svg`}
              alt="user"
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
            <div>
              <h2 className="font-semibold">{selectedContact.name}</h2>
              <p className="text-sm text-muted-foreground">
                {selectedContact.subtitle}
              </p>
            </div>
          </div>
          <MoreVertical className="text-muted-foreground" />
        </div>

        <div
          className="flex-1 overflow-y-auto p-4 space-y-4 bg-background"
          style={{
            scrollbarWidth: "none",
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {currentMessages.map((msg) => (
            <div
              key={msg.id}
              className={clsx("max-w-sm p-3 rounded-lg text-sm font-normal", {
                "bg-[#D4A574] text-white self-end ml-auto": msg.sender === "user",
                "bg-[#F8F6F2] text-[#515151] self-start": msg.sender === "agent",
              })}
            >
              {msg.text}
              <p className={clsx(
                "text-[10px] mt-1 text-left ",{

                    "text-[#EFEFEF]" : msg.sender === "user",
                    "text-[#B7B7B7]" : msg.sender === "agent"

                }
              )}>
                {msg.time}
              </p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t border-gray-200 p-4 flex items-center gap-2">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 px-4 py-3 text-sm"
          />
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full bg-gradient-to-t from-[#A68A64] to-[#936639] w-10 h-10"
            onClick={handleSend}
          >
            <Send className="text-white w-5 h-5" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Chat;
