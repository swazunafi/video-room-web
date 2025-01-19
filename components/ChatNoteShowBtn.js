import React from "react";

const ChatNoteShow = ({ isNotesVisible, isChatVisible, toggleNotes, toggleChat }) => {
  return (
    <div>
      {!isNotesVisible && (
        <button onClick={toggleNotes} className="open-notes">
          Notes
        </button>
      )}
      {!isChatVisible && (
        <button onClick={toggleChat} className="open-chat">
          Chat
        </button>
      )}
    </div>
  );
};

export default ChatNoteShow;
