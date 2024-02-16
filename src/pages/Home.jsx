import React from "react";
import Bars from "../components/decor/Bars";
import Footer from "../components/footer/Footer";
import "../index.css";
import PantherVideo from "../components/decor/PantherVideo";

function Home() {
    return (
        <>
            <div className="main home">
                <Bars />
                <PantherVideo />
            </div>
            <Footer />
        </>
    );
}

export default Home;
