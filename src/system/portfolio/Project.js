import { GitHub, Link } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import db from '../firebase/config';

const Project = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        db.collection("project").onSnapshot((snapshot) =>
            setProjects(snapshot.docs.map((doc) => doc.data()))
        )
    }, [])


    return (
        <>
            <Container>
                <Row>
                    {projects.map((project, index) => (
                        <Col md="12" key={index}>
                            <div className="projectCard">
                                <img src={project.image} className="projectImage"/>
                                <div className="projectInfo">
                                    <div className="projectAbout">
                                        <h3 className="projectName">{project.projectName}</h3>
                                        <p className="projectDec">{project.projectDec}</p>
                                    </div> 
                                    <div className="projectButtons">
                                        <a href={project.linkAbout} target="_blank" className="buttons">
                                            About <GitHub />
                                        </a>
                                        <a href={project.linkApp} target="_blank" className="buttons">
                                            App <Link />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};


export default Project;