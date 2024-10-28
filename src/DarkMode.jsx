import React from "react";
import "./DarkMode.css"
import Light from "./assets/Darker/light-mode-button.png"
import Dark from "./assets/Darker/dark-mode-button.png"
import { useState } from "react"
const DarkMode = () => {
    const [theme, settheme] = React.useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light");

    const element=document.documentElement;

    React.useEffect(()=>{
        localStorage.setItem("theme",theme);
        if(theme==="dark"){
            element.classList.add("dark")
            element.classList.add("dark")            
        }
        else{
            element.classList.remove("light")
            element.classList.remove("dark")
        }
    });
    return (
        <>
            <div className="main-light">
                <img onClick={() => settheme(theme == "dark" ? "light" : "dark")} src={Light} alt="Light" className={`light-section ${theme == "dark" ? "high" : "low"}`} />

                <img onClick={()=>settheme(theme=="light"?"dark":"light")} src={Dark} alt="Light" className={` dark-section ${theme == "dark" ? "low" : "high"}`} />
            </div>
        </>
    )
}
export default DarkMode;