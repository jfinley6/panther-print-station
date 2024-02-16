import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function NotFound() {
    const [animatedNumber, setAnimatedNumber] = useState(3);
    const navigate = useNavigate();

    useEffect(() => {
        animatedNumber > 0 && setTimeout(() => setAnimatedNumber(animatedNumber - 1), 1250);
        if (animatedNumber === 0) {
            navigate(-1);
        }
    }, [animatedNumber]);

    return (
        <div className="main not-found">
            <h1>Page not Found</h1>
            <p>The page you requested was not packaged correctly.</p>
            <p>
                Redirecting to home page in{" "}
                <span style={{ fontVariantNumeric: "tabular-nums" }}>
                    <b>{animatedNumber}</b>
                </span>
            </p>
        </div>
    );
}

export default NotFound;
