import React from "react";
import Headers from "./component/Header";
import MainContent from "./component/MainContent";
import Footer from "./component/Footer";


function ParentChild () {
    return(
        <div className="">

            <Headers />
            <MainContent />
            <Footer />
        </div>
    )
}

export default ParentChild;