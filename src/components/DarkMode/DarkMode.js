import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    const dark_mode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
    };
    const light_mode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
    };
    const toggleTheme = (e) => {
        if (e.target.checked) dark_mode();
        else light_mode();
    }

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
