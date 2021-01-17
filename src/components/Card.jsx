import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className="card">
            <img src={props.launch.links.mission_patch} alt={`Mission Patch`} style={{"width":"10%"}} />
                <h4><b>{`Mission Name: ${props.launch.mission_name}`}</b></h4>
                <h4><b>{`Mission ID: ${props.launch.mission_id}`}</b></h4>
                <h4><b>{`Launch Year: ${props.launch.launch_year}`}</b></h4>
                <h4><b>{`Successful Launch: ${props.launch.mission_id}`}</b></h4>
                <h4><b>{`Successful Landing: ${props.launch.mission_id}`}</b></h4>
        </div>
    )
}

export default Card;
