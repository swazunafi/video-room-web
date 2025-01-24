
"use client";

import FooterComponent from "./Footer";
import HeaderComponent from "./Header";

const MainLayout = ({ children }) => {

    return (
        <>
            <HeaderComponent />
            <div id="container">
                <div id="content">
                    <div className="widthfix_10px">
                        {children}
                    </div>
                </div>
            </div>
            <FooterComponent />
        </>
    )
}

export default MainLayout
