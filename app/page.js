"use client";

import Link from 'next/link';
import PinPageComponent from '@components/PinPageComponent';

const PinPage = () => {
  return (
    <>
      <div id="containerPin">
        <div id="contentPin">
          <ul className='pinPageBlk'>
            <li className='pinBlk'>
              <PinPageComponent />
            </li>
            <li className='sysReqBlk'>
              <div className='sysReqHead'>System Requirements:</div>
              <ul className='sysReqPoints'>
                <li>A laptop/desktop with minimum 6GB of RAM and a quad-core processor.</li>
                <li>A Webcam capable of producing high-quality video.</li>
                <li>Broadband Internet speed with 50+ Mbps of upstream.</li>
                <li>A high quality Audio (Microphone & Speaker).</li>
              </ul>
            </li>
          </ul>
          
          <div className="powered">Powered By: <Link href="http://www.swazuna.com/" title='Swazuna Technologies' target="_blank">Swazuna Technologies</Link></div>
        </div>
      </div>
    </>
  )
}

export default PinPage;
