import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import Card from './Card';
import './Dashboard.css';
import {fetchLaunch} from '../actions/actions';

function Dashboard(props) {
    useEffect(() => {
        props.fetchLaunch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
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

const mapDispatchToProps = dispatch => {
    return {
        fetchLaunch: () => {dispatch(fetchLaunch())},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
