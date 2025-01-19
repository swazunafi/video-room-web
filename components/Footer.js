import React from 'react';
import Link from 'next/link';

const FooterComponent = () => {

    return (
        <div id="footer">
            <div className="footer_blk">
                <div className="widthfix_10px">
                    <ul className="footerBlk">
                        <li className="footerBlk">
                            Swazuna Technologies &copy; {new Date().getFullYear()} | All rights reserved
                        </li>
                        <li className="footerBlk">
                            <Link href="/">
                            <input 
                                type="button"
                                value="End Session"
                                className="buttonEndSession"
                            />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent;
