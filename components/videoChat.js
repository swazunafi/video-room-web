
import React from 'react';
import PeerVideoBlock from './peer';
import { useSelector } from 'react-redux';

const MemoizedPeerVideoBlock = React.memo(PeerVideoBlock);

const VideoChatBlock = () => {

  const peersReducer = useSelector((state) => state.peersReducer);
  const peers = Object.values(peersReducer);
  const style = peers.length > 1 ? "VideoChat_BoxII" : "VideoChat_BoxI";

  return (
    <div className="VideoChat_Container">

      {peers.map(peer => (
        <div className={style} key={peer.id}>
          <MemoizedPeerVideoBlock peer={peer} suppressHydrationWarning={true} />
        </div>
      ))}

    </div>

  );
};

export default VideoChatBlock;
