import React, { useState, useEffect} from "react";
import { connect } from 'react-redux';
import './App.css'
import { requestRobots, setSearchField } from "../actions";
import MainPage from "../components/MainPage";

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}
const App = (props) => {

    return (
            <MainPage { ...props } />
        );
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);