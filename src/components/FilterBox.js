import React from 'react';
import { connect } from 'react-redux';

import { setIsLaunchSuccessfulValue, setIsLandingSuccessfulValue, setLaunchYear, fetchLaunch, setSelectAction } from '../actions/actions';
import './FilterBox.css';

function FilterBox(props) {

    const onChangeLaunchSuccessful = (value) => {
        switch(value) {
            case true:
                if(props.isLaunchSuccessful.toString() === "true") {
                    props.setIsLaunchSuccessfulValue('');
                    props.setSelectAction(false);
                } else {
                    props.setIsLaunchSuccessfulValue(true);
                    props.setSelectAction(true);
                }
                props.fetchLaunch();
                return;
            case false:
                if(props.isLaunchSuccessful.toString() === "false") {
                    props.setIsLaunchSuccessfulValue('');
                    props.setSelectAction(false);
                } else {
                    props.setIsLaunchSuccessfulValue(false);
                    props.setSelectAction(true);
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
                    props.setSelectAction(false);
                } else {
                    props.setIsLandingSuccessfulValue(true);
                    props.setSelectAction(true);
                }
                props.fetchLaunch();
                return;
            case false:
                if(props.isLandingSuccessful === false) {
                    props.setIsLandingSuccessfulValue('');
                    props.setSelectAction(false);
                } else {
                    props.setIsLandingSuccessfulValue(false);
                    props.setSelectAction(true);
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
            props.setSelectAction(false);
        } else {
            props.setLaunchYear(year);
            props.setSelectAction(true);
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
                <button className="button-toggle" style={props.isSelected && props.launchYear === "2006"? {border: "2px solid black"}: {}} onClick={() => onChangeFilter('2006')}>2006</button>
                <button className="button-toggle" style={props.isSelected && props.launchYear === "2007"? {border: "2px solid black"}: {}} onClick={() => onChangeFilter('2007')}>2007</button>
                <br />
                <button className="button-toggle" style={props.isSelected && props.launchYear === "2008"? {border: "2px solid black"}: {}} onClick={() => onChangeFilter('2008')}>2008</button>
                <button className="button-toggle" style={props.isSelected && props.launchYear === "2009"? {border: "2px solid black"}: {}} onClick={() => onChangeFilter('2009')}>2009</button>
                <br />
                <button className="button-toggle" style={props.isSelected && props.launchYear === "2010"? {border: "2px solid black"}: {}} onClick={() => onChangeFilter('2010')}>2010</button>
                <button className="button-toggle" style={props.isSelected && props.launchYear === "2011"? {border: "2px solid black"}: {}} onClick={() => onChangeFilter('2011')}>2011</button>
                <br />
                <button className="button-toggle" style={props.isSelected && props.launchYear === "2012"? {border: "2px solid black"}: {}} onClick={() => onChangeFilter('2012')}>2012</button>
                <button className="button-toggle" style={props.isSelected && props.launchYear === "2013"? {border: "2px solid black"}: {}} onClick={() => onChangeFilter('2013')}>2013</button>
                <br />
                <button className="button-toggle" style={props.isSelected && props.launchYear === "2014"? {border: "2px solid black"}: {}} onClick={() => onChangeFilter('2014')}>2014</button>
                <button className="button-toggle" style={props.isSelected && props.launchYear === "2015"? {border: "2px solid black"}: {}} onClick={() => onChangeFilter('2015')}>2015</button>
                <br />
                <button className="button-toggle" style={props.isSelected && props.launchYear === "2016"? {border: "2px solid black"}: {}} onClick={() => onChangeFilter('2016')}>2016</button>
                <button className="button-toggle" style={props.isSelected && props.launchYear === "2017"? {border: "2px solid black"}: {}} onClick={() => onChangeFilter('2017')}>2017</button>
                <br />
                <button className="button-toggle" style={props.isSelected && props.launchYear === "2018"? {border: "2px solid black"}: {}} onClick={() => onChangeFilter('2018')}>2018</button>
                <button className="button-toggle" style={props.isSelected && props.launchYear === "2019"? {border: "2px solid black"}: {}} onClick={() => onChangeFilter('2019')}>2019</button>
                <br />
                <button className="button-toggle" style={props.isSelected && props.launchYear === "2020"? {border: "2px solid black"}: {}} onClick={() => onChangeFilter('2020')}>2020</button>
                <h4 className="filter-subheading">
                    Launch Successful
                </h4>
                <hr />
                <button className="button-toggle" style={props.isSelected && props.isLaunchSuccessful === true? {border: "2px solid black"}: {}} onClick={() => onChangeLaunchSuccessful(true)}>True</button>
                <button className="button-toggle" style={props.isSelected && props.isLaunchSuccessful === false? {border: "2px solid black"}: {}} onClick={() => onChangeLaunchSuccessful(false)}>False</button>
                <h4 className="filter-subheading">
                    Landing Successful
                </h4>
                <hr />
                <button className="button-toggle" style={props.isSelected && props.isLandingSuccessful === true? {border: "2px solid black"}: {}} onClick={() => onChangeLandingSuccessful(true)}>True</button>
                <button className="button-toggle" style={props.isSelected && props.isLandingSuccessful === false? {border: "2px solid black"}: {}} onClick={() => onChangeLandingSuccessful(false)}>False</button>
        </div>
    </div>
    )
};

const mapStateToProps = state => {
    return {
        launches: state.launches,
        launchYear: state.launchYear,
        isLaunchSuccessful: state.isLaunchSuccessful,
        isLandingSuccessful: state.isLandingSuccessful,
        isSelected: state.isSelected,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setIsLaunchSuccessfulValue: (value) => {dispatch(setIsLaunchSuccessfulValue(value))},
        setIsLandingSuccessfulValue: (value) => {dispatch(setIsLandingSuccessfulValue(value))},
        setLaunchYear: (year) => {dispatch(setLaunchYear(year))},
        fetchLaunch: () => {dispatch(fetchLaunch())},
        setSelectAction: (val) => {dispatch(setSelectAction(val))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBox)
