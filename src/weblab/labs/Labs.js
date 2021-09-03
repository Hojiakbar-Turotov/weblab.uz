import React from 'react';
import Reveal from 'react-reveal/Reveal';
import Home from '../home/Home';
import LabsHead from './LabsHead';
import LabsBody from './LabsBody';

export default function Labs() {
    return (
        <>
            <Reveal effect="animNav" duration="750">
                <Home />
            </Reveal>
            <Reveal effect="fadeInup" duration="1200">
                <LabsHead />
            </Reveal>
            <Reveal effect="labsAnim" duration="1500">
                <LabsBody />
            </Reveal>
        </>
    )
}
