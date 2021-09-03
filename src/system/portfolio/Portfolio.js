import React from 'react';
import NavSec from '../home/NavSec';
import Reveal from 'react-reveal/Reveal';
import PageInfo from './PageInfo';
import Project from './Project';


export default function Portfolio() {
    return (
        <>
            <Reveal effect="animNav" duration="750">
                <NavSec /> 
            </Reveal>
            <Reveal effect="fadeInup" duration="1250">
                <PageInfo />
            </Reveal>
            <Reveal effect="porfolioAnim" duration="1500">
                <Project />
            </Reveal>
        </>
    )
}
