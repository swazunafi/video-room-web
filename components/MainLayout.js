
"use client";

import FooterComponent from "./Footer";
import HeaderComponent from "./Header";

const MainLayout = ({ children, onNaviClicked }) => {

    const OnHeaderNaviClicked = (e) =>{
        if ( onNaviClicked) onNaviClicked(e);
    }
    
    return (
        <>
            <HeaderComponent onNaviClicked={OnHeaderNaviClicked}/>
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
