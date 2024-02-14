import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <Link to="/logs" className="btn btn-primary">
                Logs
            </Link>
            <Link to="/settings" className="btn btn-primary btn-secondary">
                Settings
            </Link>
        </div>
    );
}

export default Footer;
