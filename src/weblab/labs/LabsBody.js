import { TouchAppTwoTone, VideoLabelTwoTone } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import database from '../firebase';

const LabsBody = () => {
    const [Labss, setLabss] = useState([]);

    useEffect(() => {
        database.collection("Labs").onSnapshot((snapshot) =>
            setLabss(snapshot.docs.map((doc) => doc.data()))
        )
    }, [])

    return (
        <>
            <Container>
                <Row>
                    {Labss.map((Labs, index) => (
                        <Col md="12" key={index}>
                            <div className="labsCard">
                                <img src={Labs.image} className="labsImage" />
                                <div className="labsInfo">
                                    <div className="labsBody">
                                        <h3 className="labsName">{Labs.labsName}</h3>
                                        <p className="labsDesc">{Labs.labsDesc}</p>
                                    </div>
                                    <div className="labsBtns">
                                        <a href={Labs.labsLink} target="_blank" className="btns">
                                            Labaratoriya <TouchAppTwoTone />
                                        </a>
                                        <a href={Labs.malumotLink} target="_blank" className="btns">
                                            Ma'lumot <VideoLabelTwoTone />
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


export default LabsBody;