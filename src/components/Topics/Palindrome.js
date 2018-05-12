import React, { Component } from 'react';

class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            userInput: "",
            palindrome: ""
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    handleClick() {
        let str = this.state.userInput.toLowerCase();
        let revStr = this.state.userInput.toLowerCase().split('').reverse().join('');

        if (str === revStr) {
            this.setState({ palindrome: true });
        } else {
            this.setState({ palindrome: false });
        }
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input
                    className="inputLine"
                    onChange={e => { this.handleChange(e.target.value) }} />
                <button
                    className="confirmationButton"
                    onClick={() => { this.handleClick(this.state.userInput) }}>
                    Check
                </button>
                <span className="resultsBox">
                    Palindrome:
                    {JSON.stringify(this.state.palindrome)}
                </span>
            </div>
        )
    }
}

export default Palindrome;