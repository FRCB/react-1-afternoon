import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();

        this.state = {
            unFilteredArray: ['Pierre-Emmanuel', 'Marie-Line', 'Anne', 'Christine', 'Ambroise', 'France'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }


    handleClick(userInput) {
        var names = this.state.unFilteredArray;
        var filteredNames = [];

        for (var i = 0; i < names.length; i++) {
            if (names[i].includes(userInput)) {
                filteredNames.push(names[i]);
            }
        }
        this.setState({ filteredArray: filteredNames });
    }


    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input
                    className="inputLine"
                    onChange={e => { this.handleChange(e.target.value) }} />
                <button
                    className="confirmationButton"
                    onClick={() => { this.handleClick(this.state.userInput) }}>
                    Filter
                </button>
                <span className="resultsBox filterStringRB">
                    Filtered:
                    {JSON.stringify(this.state.filteredArray)}
                </span>

            </div >
        )
    }
}

export default FilterString;