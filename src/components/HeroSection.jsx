import React from 'react';
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Link } from "react-router-dom";


function HeroSection() {
    return (
        <div className="hero-container">
            <h1>EXPLORE ARARAT</h1>
            <p>Where History Is All Around</p>
        <div className="hero-btns">
        <Link to="/attractions" className="btn-mobile">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large"> SEE & DO </Button>
                </Link>
        <Link to="/food" className="btn-mobile">      
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large"> EAT & DRINK </Button>
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;