import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className="card">
            <img src={props.launch.links.mission_patch} alt={`Mission Patch`} style={{"width":"50%"}} />
                <h5><b>Mission Name: </b><span className="mission-details">{props.launch.mission_name !== ''?props.launch.mission_name: "Data not available"}</span></h5>
                <h5><b>Mission ID: </b> <span className="mission-details">{props.launch.mission_id.toString() !== ""? props.launch.mission_id: "Data not available"}</span></h5>
                <h5><b>Launch Year: </b> <span className="mission-details">{props.launch.launch_year !== ''? props.launch.launch_year: "Data not available"}</span></h5>
                <h5><b>Successful Launch: </b> <span className="mission-details">{props.launch.launch_success !== ''? props.launch.launch_success.toString(): "Data not available"}</span></h5>
                <h5><b>Successful Landing: </b> <span className="mission-details">{props.launch.rocket.first_stage.cores[0].land_success !== null? props.launch.rocket.first_stage.cores[0].land_success.toString(): "Data not available"}</span></h5>
        </div>
    )
}

export default Card;
