import React, { Component } from 'react';

class EvenAndOdd extends Component {

    constructor() {
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    handleClick(userInput) {
        let arr = userInput.split(',').map(num => parseInt(num, 10));
        let odds = [];
        let evens = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evens.push(arr[i]);
            } else {
                odds.push(arr[i]);
            }
        }
        this.setState({ evenArray: evens })
        this.setState({ oddArray: odds })
    }


    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input
                    className='inputLine'
                    onChange={e => { this.handleChange(e.target.value) }}
                />
                <button
                    className='confirmationButton'
                    onClick={() => { this.handleClick(this.state.userInput) }}>
                    Split
                </button>
                <span className='resultsBox'>
                    Evens: {JSON.stringify(this.state.evenArray)}
                </span>
                <span className='resultsBox'>
                    Odds: {JSON.stringify(this.state.oddArray)}
                </span>
            </div>
        )
    }
}



export default EvenAndOdd;