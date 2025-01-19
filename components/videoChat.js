const VideoChatBlock = () => {
  return (
    <div className="VideoChat_Container">

      {/* For 1 Participant */}
      {/* <div className="VideoChat_BoxI">
        <div className="box">
          <div className="Name">Participant Name</div>
          <div className="webcamOff"></div>
        </div>
      </div> */}

      {/* For 2 Participant */}
      {/* <div className="VideoChat_BoxII" style={{ display: "none" }}>
        <div className="box">
          <div className="Name">Participant Name</div>
          <div className="webcamOff"></div>
        </div>
        <div className="box">
          <div className="Name">Participant Name</div>
        </div>
      </div> */}

      <div id="container">
        <div id="column1">Column 1 Content</div>
        <div id="column2">Column 2 Content</div>
      </div>
    </div>

  );
};

export default VideoChatBlock;
