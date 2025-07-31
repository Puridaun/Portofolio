import { useState, useEffect } from "react";

const Navbar = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const handleScreenResize = () => {
        setScreenSize(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", handleScreenResize);
        return () => {
            window.removeEventListener("resize", handleScreenResize);
        };
    }, []);
    return (
        <>
            <div className="navbar-container">
                <div className="nav">
                    <div className="nav-container-left">
                        <div className="image-place"></div>
                        <span>Hrițcu Serafim</span>
                    </div>

                    {screenSize > 540 ? (

                        <div className="nav-container-right">
                            <button>Projects</button>
                            <button>About</button>
                            <button className="button-std">Get in touch</button>
                        </div>
                    ) : (
                        <div className="flex flex-row items-center">
                            <button>Projects</button>
                            <button>About</button>
                            <button className="button-std">Get in touch</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}


export default Navbar