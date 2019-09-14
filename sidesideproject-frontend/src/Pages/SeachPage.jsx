import React, { Component } from 'react';
import Navbar from '../Components/Navbar';

const posInterests = [
    ['health', 'Healthcare'],
    ['science', 'Science'],
    ['design', 'Design'],
    ['shopping', 'Shopping'],
    ['sports', 'Sports'],
    ['education', 'Education'],
];

const posKeywords = [
    ['ml', 'Machine Learning'],
    ['blockchain', 'Blockchain'],
    ['api', 'API'],
    ['ios', 'iOS'],
    ['android', 'Android'],
    ['web', 'Web'],
    ['oop', 'Object Oriented'],
    ['scripting', 'Scripting'],
    ['graphic-design', 'Graphic Design'],
];


export default class SearchPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            keywords: [],
            interests: [['all', 'All']]
        };

        this.keywordSelect = this.keywordSelect.bind(this);
        this.interestSelect = this.interestSelect.bind(this);
        this.removeKeyword = this.removeKeyword.bind(this);
        this.removeInterest = this.removeInterest.bind(this);
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
            document.getElementById('keyword-select').value = 'placeholder';
        }
    }

    removeKeyword(value) {
        this.setState({
            keywords: this.state.keywords.filter((keyValue) => {
                return keyValue[0] !== value;
            })
        });
    }

    removeInterest(value) {
        this.setState({
            interests: this.state.interests.filter((keyValue) => {
                return keyValue[0] !== value;
            })
        }, () => {
            if (this.state.interests.length === 0) {
                this.setState({
                    interests: [['all', 'All']]
                });
            }
        });
    }

    interestSelect() {
        let alreadyIn = false;
        for (const keywordObj of this.state.interests) {
            if (keywordObj[0] === document.getElementById('interest-select').value) {
                alreadyIn = true;
                break;
            }
        }
        if (!alreadyIn) {
            this.setState({
                interests: [
                    ...(this.state.interests.filter((value) => { return value[0] != 'all'; })),
                    [
                        document.getElementById('interest-select').value,
                        document.getElementById('interest-select').options[document.getElementById('interest-select').selectedIndex].text
                    ]
                ]
            });
            document.getElementById('interest-select').value = 'placeholder';
        }
    }

    render() {
        const keywordsList = this.state.keywords.map((value) => {
            return (
                <span style={{ cursor: 'pointer' }} onClick={() => { this.removeKeyword(value[0]); }} key={value[0]} className="badge badge-secondary ml-1">{value[1]}</span>
            );
        });

        const interestsList = this.state.interests.map((value) => {
            if (value[0] === 'all') {
                return (
                    <span style={{ cursor: 'pointer' }} key={value[0]} className="badge badge-secondary ml-1">{value[1]}</span>
                );
            } else {
                return (
                    <span style={{ cursor: 'pointer' }} onClick={() => { this.removeInterest(value[0]); }} key={value[0]} className="badge badge-secondary ml-1">{value[1]}</span>
                );
            }
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
                                            <option value='placeholder' selected>Add Keyword...</option>
                                            {
                                                posKeywords.map((value) => {
                                                    return (
                                                        <option key={value[0]} value={value[0]}>{value[1]}</option>
                                                    );
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div className='mt-3'>
                                    <div>
                                        <div className='d-inline'>
                                            Interests:
                                        </div>
                                        <div className='d-inline'>
                                            {interestsList}
                                        </div>
                                    </div>

                                    <div className="input-group mt-2">
                                        <select className="custom-select" id="interest-select" onChange={this.interestSelect}>
                                            <option value='placeholder' selected>Add Interest...</option>
                                            {
                                                posInterests.map((value) => {
                                                    return (
                                                        <option key={value[0]} value={value[0]}>{value[1]}</option>
                                                    );
                                                })
                                            }
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
