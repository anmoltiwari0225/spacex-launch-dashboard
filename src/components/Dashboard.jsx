import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';
import './Dashboard.css';

function Dashboard(props) {
    
    return (
        <div className="main">
            {props.launches.map((launch, key) => {
                return (
                        <Card key={key} launch={launch} />
                );
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        launches: state.launches,
        launchYear: state.launchYear,
        isLaunchSuccessful: state.isLandingSuccessful,
        isLandingSuccessful: state.isLandingSuccessful,
    }
};

export default connect(mapStateToProps, null)(Dashboard)
