import React from 'react';

import { 
    Col,
 } from "react-bootstrap";
const ExperienceCard = ({data}) => {
    return ( 
        <Col lg="6">
            <div className="pb-5 text-center mb-5" style={{boxShadow: '0px 2px 5px black', borderRadius: '2px'}}>
                <img className="bg-white mb-3" src={data.companylogo} alt="" height="150px" width="100%"/>
                <p className="lead">
                    <strong>{data.company}</strong>
                    <br/>
                    {data.role}
                    <br/>
                    {data.date}
                </p>
            </div>
        </Col>
     );
}
 
export default ExperienceCard;