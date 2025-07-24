"use client";

import React from "react";


import ChatDesktop from "./ChatDesktop";
import { useIsMobile } from "./CustomHooks/CustomHookChat";
import ChatMobile from "./ChatMobileUi";

export default function ChatWrapper() {
  const isMobile = useIsMobile();

  return isMobile ? <ChatMobile /> : <ChatDesktop />;
}
