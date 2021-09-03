import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import db from '../firebase/config';
import { YouTube, GitHub, Instagram, Telegram } from '@material-ui/icons';
import Reveal from 'react-reveal/Reveal';
// import YouTubeIcon from '@material-ui/icons/YouTube'
// import YouTubeIcon from '@material-ui/icons/YouTube'
// import YouTubeIcon from '@material-ui/icons/YouTube'
// import YouTubeIcon from '@material-ui/icons/YouTube'

export default function AboutInfo() {

    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        db.collection("portfolio").onSnapshot((snapshot) => 
            setPortfolios(snapshot.docs.map((doc) => doc.data()))
        )
    }, [])



    return (
        <div className="aboutInfo">
            {portfolios.map(portfolio => (
                <>
                    <div className="side2">
                        <img src={portfolio.image} alt="myimage" className="myImage" />
                    </div>
                    <div className="side1">
                        <Reveal effect="fadeInup" duration="1250">
                            <h1 className="title">{portfolio.title}</h1>
                            <p className="description">{portfolio.description}</p>
                        </Reveal>
                        <div className="buttons">
                            <Link className="linkBtn" to="/portfolio">Portfolio</Link>
                            <Link className="linkBtn" to="/">About me</Link>
                        </div>
                        <div className="socialNet">
                            <a href="#" target="_blank" className="links"><YouTube className="iconSvg" /></a>
                            <a href="#" target="_blank" className="links"><GitHub className="iconSvg" /></a>
                            <a href="#" target="_blank" className="links"><Instagram className="iconSvg" /></a>
                            <a href="#" target="_blank" className="links"><Telegram className="iconSvg" /></a>
                        </div>
                    </div>
                </>
            ))}
        </div>
    )
}
