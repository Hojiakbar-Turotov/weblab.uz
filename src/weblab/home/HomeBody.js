import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import database from '../firebase';
import { YouTube, GitHub, Instagram, Telegram } from '@material-ui/icons';
import Reveal from 'react-reveal/Reveal';
// import YouTubeIcon from '@material-ui/icons/YouTube'
// import YouTubeIcon from '@material-ui/icons/YouTube'
// import YouTubeIcon from '@material-ui/icons/YouTube'
// import YouTubeIcon from '@material-ui/icons/YouTube'

export default function HomeBody() {

    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        database.collection("weblab").onSnapshot((snapshot) => 
            setPortfolios(snapshot.docs.map((doc) => doc.data()))
        )
    }, [])



    return (
        <div className="aboutInfo">
            {portfolios.map(weblab => (
                <>
                    <div className="side2">
                        <img src={weblab.image} alt="myimage" className="myImage" />
                    </div>
                    <div className="side1">
                        <Reveal effect="fadeInup" duration="1250">
                            <h1 className="title">{weblab.title}</h1>
                            <p className="description">{weblab.description}</p>
                        </Reveal>
                        <div className="buttons">
                            <Link className="linkBtn" to="/labs">WebLab</Link>
                            <Link className="linkBtn" to="/">About</Link>
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
