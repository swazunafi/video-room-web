"use client";

import React, { useState } from "react";
import FeedbackComponent from "./Feedback";
import ParticipantComponent from "./ParticipantPop";

import { useDispatch, useSelector } from 'react-redux';
import { getSelfPeer } from '@redux/features/peersSlice';

const HeaderComponent = () => {

  const dispatch = useDispatch();

  const peers = useSelector((state) => state.peersReducer);
  const selfPeer = Object.values(peers).find(peer => peer.self);

  const [isOpen, setIsOpen] = useState(false);
  const [showParticipantPopup, setShowParticipantPopup] = useState(false);

  const dispatchValue = (e, name, value) => {
    e.preventDefault();
    //dispatch(setToolBox({ [name]: value }));
  };

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const handleParticipantClick = () => {
    setShowParticipantPopup(!showParticipantPopup);
  };

  return (
    <>
      <header className="header">
        <div className="widthfix_10px">
          <ul className="headerIIIcol">
            <li className="headerIIIcol">
              <div className="intRoomLogoIcon logoIconPos"></div>
              <ul className="timerIconBlk">
                <li className="timerIcon"></li>
                <li className="timer">0:00</li>
              </ul>
            </li>
            <li className="headerIIIcol">&nbsp;</li>
            <li className="headerIIIcol">
              <ul className="rightContentBlk">
                <li className="participantBlk" onClick={handleParticipantClick}>
                  <div className="participantIcon"></div>
                  <div className="iconText">Participant</div>
                </li>
                <li
                  className="chatBlk"
                  onClick={(e) => dispatchValue(e, "chat", !selfPeer?.chat)}
                >
                  <div className="chatIcon"></div>
                  <div className="iconText">Chat</div>
                </li>
                <li
                  className="noteBlk"
                  onClick={(e) => dispatchValue(e, "note", !selfPeer?.note)}
                >
                  <div className="noteIcon"></div>
                  <div className="iconText">Notes</div>
                </li>
                <li className="headIconPartition">&nbsp;</li>
                <li className="webcamBlk" onClick={(e) => dispatchValue(e, "webcam", !selfPeer?.webcam)}>
                  <div className={selfPeer?.webcam ? "webcamOn" : "webcamOff"} ></div>
                  <div className="iconText">Camera</div>
                </li>
                <li className="micBlk" onClick={(e) => dispatchValue(e, "mic", !selfPeer?.mic)}>
                  <div className={selfPeer?.mic ? "micOn" : "micOff"} ></div>
                  <div className="iconText">Mic</div>
                </li>
                <li className="feedbackBtn">
                  <button onClick={togglePanel} className="buttonFeedback">
                    {isOpen ? "Feedback Form" : "Feedback Form"}
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </header>

      <div className={`FeedbackPanel ${isOpen ? "open" : ""}`}>
        <button onClick={togglePanel} className="close-button">
          X
        </button>
        <div className="panel-content">
          <FeedbackComponent />
        </div>
      </div>

      {/* Participant Pop-up */}
      {showParticipantPopup && (
        <div className="participant-popup">
          <button
            className="close-popup"
            onClick={() => setShowParticipantPopup(false)}
          >
            X
          </button>
          <div className="popup-content">
            <ParticipantComponent />
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderComponent;
