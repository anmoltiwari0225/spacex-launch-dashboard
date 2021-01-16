import React from 'react';
import { connect } from 'react-redux';

import { setIsLaunchSuccessfulValue, setIsLandingSuccessfulValue, setLaunchYear, fetchLaunch } from '../actions';

function FilterBox(props) {
    const onChangeLaunchSuccessful = (value) => {
        switch(value) {
            case true:
                if(props.isLaunchSuccessful === true) {
                    props.setIsLaunchSuccessfulValue('');
                } else {
                    props.setIsLaunchSuccessfulValue(true);
                }
                props.fetchLaunch();
                return;
            case false:
                if(props.isLaunchSuccessful === false) {
                    props.setIsLaunchSuccessfulValue('');
                } else {
                    props.setIsLaunchSuccessfulValue(false);
                }
                props.fetchLaunch();
                return;
            default:
                return;
        } 
    }

    const onChangeLandingSuccessful = (value) => {
        switch(value) {
            case true:
                if(props.isLandingSuccessful === true) {
                    props.setIsLandingSuccessfulValue('');
                } else {
                    props.setIsLandingSuccessfulValue(true);
                }
                props.fetchLaunch();
                return;
            case false:
                if(props.isLandingSuccessful === false) {
                    props.setIsLandingSuccessfulValue('');
                } else {
                    props.setIsLandingSuccessfulValue(false);
                }
                props.fetchLaunch();
                return;
            default:
                return;
        } 
    }

    const onChangeFilter = (year) => {
        if (year === props.launchYear) {
            props.setLaunchYear('');
        } else {
            props.setLaunchYear(year);
        }
        props.fetchLaunch();
    }

    return (
        <div>
            FilterBox
            Year
            <button onClick={onChangeFilter('2014')}>2014</button>

            Launch Successful
            <button onClick={onChangeLaunchSuccessful(true)}>True</button>
            <button onClick={onChangeLaunchSuccessful(false)}>False</button>
            Landing Successful
            <button onClick={onChangeLandingSuccessful(true)}>True</button>
            <button onClick={onChangeLandingSuccessful(false)}>False</button>
        </div>
    )
};

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
        setIsLaunchSuccessfulValue: (value) => dispatch(setIsLaunchSuccessfulValue(value)),
        setIsLandingSuccessfulValue: (value) => dispatch(setIsLandingSuccessfulValue(value)),
        setLaunchYear: (year) => dispatch(setLaunchYear(year)),
        fetchLaunch: () => dispatch(fetchLaunch()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBox)
