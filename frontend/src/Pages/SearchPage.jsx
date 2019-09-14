import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import options from '../options.json';

const posInterests = options.interests;

const posKeywords = options.keywords;


export default class SearchPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            keywords: [],
            interests: [['all', 'All']],
            projects: [],
            searching: false
        };

        this.keywordSelect = this.keywordSelect.bind(this);
        this.interestSelect = this.interestSelect.bind(this);
        this.removeKeyword = this.removeKeyword.bind(this);
        this.removeInterest = this.removeInterest.bind(this);
        this.search = this.search.bind(this);
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
                    ...(this.state.interests.filter((value) => { return value[0] !== 'all'; })),
                    [
                        document.getElementById('interest-select').value,
                        document.getElementById('interest-select').options[document.getElementById('interest-select').selectedIndex].text
                    ]
                ]
            });
            document.getElementById('interest-select').value = 'placeholder';
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

    async search() {
        this.setState({
            searching: true
        });
        const res = (await axios.post('https://us-central1-graph-intelligence.cloudfunctions.net/searchProjects?fbclid=IwAR162ulayDPSRpwNfo2-vKlRrsJaouTGLbXY6J7LdrsQsuAgHmzOupDLTlo', {
            'skills': this.state.keywords,
            'interests': this.state.interests,
            'query': document.getElementById('query').value
        }, {
            crossdomain: true
        })).data;
        this.setState({
            projects: res.body.projects,
            searching: false
        });
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

        const projectList = this.state.projects.map((value) => {
            return (
                <div className='card mt-1 mx-2' style={{ width: '20rem' }} key={value.name}>
                    <img src={value.image} className="card-img-top" alt="..." />
                    <div className='card-body'>
                        <h5 className='card-title'>{value.name}</h5>
                        <p className="card-text">{value.description}</p>
                        {
                            value.skills.map((value, i) => {
                                return (
                                    <span style={{ cursor: 'pointer' }} key={i} className="badge badge-secondary ml-1">{value}</span>
                                );
                            })
                        }
                        <footer className="mt-2 blockquote-footer">
                            <small className="text-muted">
                                {value.author}
                            </small>
                        </footer>
                    </div>
                </div>
            );
        });

        if (projectList.length === 0) {
            projectList.push(
                <p key='key'>No projects found.</p>
            );
        }

        return (
            <div>
                <Navbar />
                <div className='container mt-4'>
                    <div className='card'>
                        <div className="card-body">
                            <h3>Search</h3>
                            <div className='mt-3'>
                                <div className='mt-3'>

                                    <div className="form-group">
                                        <label htmlFor="query" className="font-weight-bold">Keywords: </label>
                                        <input type="text" className="form-control" id='query' placeholder="Enter search keywords (optional)"></input>
                                    </div>

                                    <div>
                                        <div className='d-inline font-weight-bold'>
                                            Skills:
                                        </div>
                                        <div className='d-inline'>
                                            {keywordsList}
                                        </div>
                                    </div>

                                    <div className="input-group mt-2">
                                        <select className="custom-select" id="keyword-select" onChange={this.keywordSelect}>
                                            <option value='placeholder' selected>Add Skills...</option>
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
                                        <div className='d-inline font-weight-bold'>
                                            Related Field:
                                        </div>
                                        <div className='d-inline'>
                                            {interestsList}
                                        </div>
                                    </div>

                                    <div className="input-group mt-2">
                                        <select className="custom-select" id="interest-select" onChange={this.interestSelect}>
                                            <option value='placeholder' selected>Add Related Field...</option>
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

                            <button onClick={this.search} className='btn btn-primary mt-3'>
                                <div>
                                    {
                                        this.state.searching ?
                                            <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                                            :
                                            null
                                    }
                                    Search
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='card mt-2'>
                        <div className="card-body">
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                {projectList}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
