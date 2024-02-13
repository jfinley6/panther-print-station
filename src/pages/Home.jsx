import React from "react";
import Bars from "../components/decor/Bars";
import "../index.css";
import PantherVideo from "../components/decor/PantherVideo";

function Home() {
    return (
        <div className="main">
            <Bars />
            <PantherVideo />
        </div>
    );
}

export default Home;
