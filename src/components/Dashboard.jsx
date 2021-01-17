import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

function Dashboard(props) {
    return (
        <div>
            <h1>
                Launch Dashboard   
            </h1>
            <div className="row">
                    {props.launches.map((launch, key) => {
                        return (
                            <div className="column">
                                <Card key={key} launch={launch} />
                            </div>
                        );
                    })}
            </div>
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
