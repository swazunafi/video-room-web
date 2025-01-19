"use client";

import React, { useState, useEffect } from "react";

import MainLayout from "@components/MainLayout";
import VideoChatBlock from "@components/videoChat";
import ChatComponent from "@components/Chat";
import NoteComponent from "@components/Note";

const TwoColumnLayout = () => {

  const [chatNotes, setChatNotes] = useState({ chat: false, note: false });

  const [isRightColumnVisible, setIsRightColumnVisible] = useState(false);

  const OnHeaderNaviClicked = (e) => {
    setChatNotes((prev) => ({ ...prev, [e.name]: e.state }));
  };

  useEffect(()=>{
    setIsRightColumnVisible(chatNotes.chat || chatNotes.note);
  },[chatNotes]);

  return (
    <MainLayout onNaviClicked={OnHeaderNaviClicked}>
      <div className="videoChat_IIcol">
        {/* Left Column */}
        <ul
          className={`left-column ${!isRightColumnVisible ? "full-width" : ""}`}
        >
          <li>
            <VideoChatBlock />
          </li>
        </ul>

        {/* Right Column */}
        {isRightColumnVisible && (
          <ul className="right-column">
            {chatNotes.note && (
              <li
                className={`notes ${
                  chatNotes.chat ? "half-height" : "full-height"
                }`}
              >
                <button
                  onClick={() =>
                    OnHeaderNaviClicked({ name: "note", state: false })
                  }
                >
                  X
                </button>
                <NoteComponent />
              </li>
            )}
            {chatNotes.chat && (
              <li
                className={`chat ${
                  chatNotes.note ? "half-height" : "full-height"
                }`}
              >
                <button onClick={() =>
                    OnHeaderNaviClicked({ name: "chat", state: false })
                  }>X</button>
                <ChatComponent />
              </li>
            )}
          </ul>
        )}
      </div>
    </MainLayout>
  );
};

export default TwoColumnLayout;
