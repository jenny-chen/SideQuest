import React, { Component } from 'react';
import Navbar from '../Components/Navbar';


export default class SearchPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            keywords: [],
            interests: []
        };

        this.keywordSelect = this.keywordSelect.bind(this);
        this.interestSelect = this.interestSelect.bind(this);
    }

    keywordSelect() {
        let alreadyIn = false;
        for (const keywordObj of this.state.keywords) {
            if (keywordObj[0] === document.getElementById('keyword-select').value) {
                alreadyIn = true;
                break;
            }
        }
        if (!alreadyIn) {
            this.setState({
                keywords: [
                    ...this.state.keywords,
                    [
                        document.getElementById('keyword-select').value,
                        document.getElementById('keyword-select').options[document.getElementById('keyword-select').selectedIndex].text
                    ]
                ]
            });
        }
    }

    interestSelect() {
        let alreadyIn = false;
        for (const keywordObj of this.state.keywords) {
            if (keywordObj[0] === document.getElementById('interest-select').value) {
                alreadyIn = true;
                break;
            }
        }
        if (!alreadyIn) {
            this.setState({
                keywords: [
                    ...this.state.keywords,
                    [
                        document.getElementById('interest-select').value,
                        document.getElementById('interest-select').options[document.getElementById('interest-select').selectedIndex].text
                    ]
                ]
            });
        }
    }

    render() {
        const keywordsList = this.state.keywords.map((value) => {
            return (
                <span key={value[0]} className="badge badge-secondary ml-1">{value[1]}</span>
            );
        });

        const interetsList = this.state.interests.map((value) => {
            return (
                <span key={value[0]} className="badge badge-secondary ml-1">{value[1]}</span>
            );
        });

        return (
            <div>
                <Navbar />
                <div className='container mt-4'>
                    <div className='card'>
                        <div className="card-body">
                            <h3>Search</h3>
                            <div className='mt-3'>
                                <div className='mt-3'>
                                    <div>
                                        <div className='d-inline'>
                                            Keywords:
                                        </div>
                                        <div className='d-inline'>
                                            {keywordsList}
                                        </div>
                                    </div>

                                    <div className="input-group mt-2">
                                        <select className="custom-select" id="keyword-select" onChange={this.keywordSelect}>
                                            <option selected>Add Keyword...</option>
                                            <option value="react">React</option>
                                            <option value="node-js">Node.js</option>
                                            <option value="html">HTML</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='mt-3'>
                                    <div>
                                        <div className='d-inline'>
                                            Interests:
                                        </div>
                                        <div className='d-inline'>
                                            {interetsList}
                                        </div>
                                    </div>

                                    <div className="input-group mt-2">
                                        <select className="custom-select" id="interset-select">
                                            <option selected>Add Interest...</option>
                                            <option value="science">Science</option>
                                            <option value="chemistry">Chemistry</option>
                                            <option value="biology">Biology</option>
                                        </select>
                                    </div>
                                </div>

                            </div>

                            <button className='btn btn-primary mt-3'>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
