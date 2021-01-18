import React from 'react';
import { connect } from 'react-redux';

import { setIsLaunchSuccessfulValue, setIsLandingSuccessfulValue, setLaunchYear, fetchLaunch } from '../actions/actions';
import './FilterBox.css';

function FilterBox(props) {

    const onChangeLaunchSuccessful = (value) => {
        switch(value) {
            case true:
                if(props.isLaunchSuccessful.toString() === "true") {
                    props.setIsLaunchSuccessfulValue('');
                } else {
                    props.setIsLaunchSuccessfulValue(true);
                }
                props.fetchLaunch();
                return;
            case false:
                if(props.isLaunchSuccessful.toString() === "false") {
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
        <div className="sidebar">
            <h3>
                Filters
            </h3>
            <hr />
            <div className="filter-box">
                <h4 className="filter-subheading">
                    Launch Year
                </h4>
                <hr />
                <button className="button-toggle" onClick={() => onChangeFilter('2006')}>2006</button>
                <button className="button-toggle" onClick={() => onChangeFilter('2007')}>2007</button>
                <br />
                <button className="button-toggle" onClick={() => onChangeFilter('2008')}>2008</button>
                <button className="button-toggle" onClick={() => onChangeFilter('2009')}>2009</button>
                <br />
                <button className="button-toggle" onClick={() => onChangeFilter('2010')}>2010</button>
                <button className="button-toggle" onClick={() => onChangeFilter('2011')}>2011</button>
                <br />
                <button className="button-toggle" onClick={() => onChangeFilter('2012')}>2012</button>
                <button className="button-toggle" onClick={() => onChangeFilter('2013')}>2013</button>
                <br />
                <button className="button-toggle" onClick={() => onChangeFilter('2014')}>2014</button>
                <button className="button-toggle" onClick={() => onChangeFilter('2015')}>2015</button>
                <br />
                <button className="button-toggle" onClick={() => onChangeFilter('2016')}>2016</button>
                <button className="button-toggle" onClick={() => onChangeFilter('2017')}>2017</button>
                <br />
                <button className="button-toggle" onClick={() => onChangeFilter('2018')}>2018</button>
                <button className="button-toggle" onClick={() => onChangeFilter('2019')}>2019</button>
                <br />
                <button className="button-toggle" onClick={() => onChangeFilter('2020')}>2020</button>
                <h4 className="filter-subheading">
                    Launch Successful
                </h4>
                <hr />
                <button className="button-toggle" onClick={() => onChangeLaunchSuccessful(true)}>True</button>
                <button className="button-toggle" onClick={() => onChangeLaunchSuccessful(false)}>False</button>
                <h4 className="filter-subheading">
                    Landing Successful
                </h4>
                <hr />
                <button className="button-toggle" onClick={() => onChangeLandingSuccessful(true)}>True</button>
                <button className="button-toggle" onClick={() => onChangeLandingSuccessful(false)}>False</button>
        </div>
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
        setIsLaunchSuccessfulValue: (value) => {dispatch(setIsLaunchSuccessfulValue(value))},
        setIsLandingSuccessfulValue: (value) => {dispatch(setIsLandingSuccessfulValue(value))},
        setLaunchYear: (year) => {dispatch(setLaunchYear(year))},
        fetchLaunch: () => {dispatch(fetchLaunch())},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBox)
