import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super();

        this.state = {
            unFilteredArray: [{ 'firstname': 'Anne', 'employee': 'Legal Assistant' }, { 'firstname': 'Christine', 'employee': 'Standardist' }, { 'firstname': 'Ambroise', 'director': 'CTO' }, { 'firstname': 'France', 'unemployed': 'student' }],

            userInput: '',

            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    handleClick(userInput) {
        let family = this.state.unFilteredArray;
        let filteredFamily = [];

        for (let i = 0; i < family.length; i++) {
            if (family[i].hasOwnProperty(userInput)) {
                filteredFamily.push(family[i]);
            }
        }
        if (filteredFamily.length === 0) {
            this.setState({ filteredArray: this.state.unFilteredArray })
        }
        else {
            this.setState({ filteredArray: filteredFamily })
        }
    }

    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>{JSON.stringify(this.state.unFilteredArray)}</span>
                <input
                    className='inputLine'
                    onChange={e => { this.handleChange(e.target.value) }} />
                <button
                    className='confirmationButton'
                    onClick={() => { this.handleClick(this.state.userInput) }}>
                    Filter
                </button>
                <span className='resultsBox filterObjectRB'>
                    Filtered:
                    {JSON.stringify(this.state.filteredArray)}
                </span>
            </div >
        )
    }
}

export default FilterObject;