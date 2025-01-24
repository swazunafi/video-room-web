

const PeerVideoBlock = ({ peer }) => {

    const { name, webcam } = peer;

    return (
        <div className="box">
            <div className="Name">{name}</div>
            {!webcam ? <div className="webcamOff" /> : null}
        </div>
    );
};

export default PeerVideoBlock;
