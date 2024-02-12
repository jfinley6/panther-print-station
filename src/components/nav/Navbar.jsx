import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import { Outlet } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate()

    useEffect(() => {
        const routeRedirect = localStorage.getItem("lastVisitedRoute")
        navigate(routeRedirect)
    }, []);

    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: 0,
        height: 0,
    });

    console.log(size.width);
    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 992 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const elements = [
        {
            route: "/serial-numbers",
            title: "Serial Numbers",
        },
        {
            route: "/production-tags",
            title: "Production Tags",
        },
        {
            route: "/crate-tags",
            title: "Crate Tags",
        },
        {
            route: "/rma-tags",
            title: "RMA Tags",
        },
    ];

    const listItemElements = elements.map((element, idx) => {
        return (
            <li key={idx}>
                <NavLink
                    onClick={() => {
                        menuOpen && size.width < 992 ? menuToggleHandler() : "";
                        localStorage.setItem("lastVisitedRoute", element.route)
                    }}
                    to={element.route}
                >
                    {element.title}
                </NavLink>
            </li>
        );
    });

    return (
        <>
            <header className="header">
                <div className="header__content">
                    <Link to="/" className="header__content__logo">
                        <img src="/pm-logo-panther.svg" />
                    </Link>
                    <nav
                        className={`${"header__content__nav"} 
          ${menuOpen && size.width < 992 ? `${"isMenu"}` : ""} 
          }`}
                    >
                        <ul>{listItemElements}</ul>
                    </nav>
                    <div className="header__content__toggle">
                        {!menuOpen ? (
                            <BiMenuAltRight onClick={menuToggleHandler} />
                        ) : (
                            <AiOutlineClose onClick={menuToggleHandler} />
                        )}
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    );
}

export default Navbar;
