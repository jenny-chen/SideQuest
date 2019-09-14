import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import options from '../options.json';
import axios from 'axios';

const posInterests = options.interests;

const posKeywords = options.keywords;

export default class SubmitPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keywords: [],
            interests: [],
        };

        this.keywordSelect = this.keywordSelect.bind(this);
        this.interestSelect = this.interestSelect.bind(this);
        this.removeKeyword = this.removeKeyword.bind(this);
        this.removeInterest = this.removeInterest.bind(this);
        this.submit = this.submit.bind(this);
    }

    keywordSelect() {
        let alreadyIn = false;
        for (const keywordObj of this.state.keywords) {
            if (keywordObj[0] === document.getElementById('skill').value) {
                alreadyIn = true;
                break;
            }
        }
        if (!alreadyIn) {
            this.setState({
                keywords: [
                    ...this.state.keywords,
                    [
                        document.getElementById('skill').value,
                        document.getElementById('skill').options[document.getElementById('skill').selectedIndex].text
                    ]
                ]
            });
            document.getElementById('skill').value = 'placeholder';
        }
    }

    interestSelect() {
        let alreadyIn = false;
        for (const keywordObj of this.state.interests) {
            if (keywordObj[0] === document.getElementById('interest').value) {
                alreadyIn = true;
                break;
            }
        }
        if (!alreadyIn) {
            this.setState({
                interests: [
                    ...(this.state.interests.filter((value) => { return value[0] !== 'all'; })),
                    [
                        document.getElementById('interest').value,
                        document.getElementById('interest').options[document.getElementById('interest').selectedIndex].text
                    ]
                ]
            });
            document.getElementById('interest').value = 'placeholder';
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
        });
    }

    async submit(e) {
        e.preventDefault();
        const object = {
            author: document.getElementById('author').value,
            description: document.getElementById('description').value,
            image: document.getElementById('image-url').value,
            name: document.getElementById('name').value,
            skills: this.state.keywords.map((value) => { return value[0]; }),
            interests: this.state.interests.map((value) => { return value[0]; })
        };
        const res = (await axios.post('https://us-central1-graph-intelligence.cloudfunctions.net/addProject', object, {
            crossdomain: true
        })).data;
        console.log(res);
    }

    render() {
        const keywordsList = this.state.keywords.map((value) => {
            return (
                <span style={{ cursor: 'pointer' }} onClick={() => { this.removeKeyword(value[0]); }} key={value[0]} className="badge badge-secondary ml-1">{value[1]}</span>
            );
        });

        const interestsList = this.state.interests.map((value) => {
            return (
                <span style={{ cursor: 'pointer' }} onClick={() => { this.removeInterest(value[0]); }} key={value[0]} className="badge badge-secondary ml-1">{value[1]}</span>
            );
        });

        return (
            <div>
                <Navbar />
                <div className='container mt-4'>
                    <form onSubmit={this.submit}>
                        <div className="form-group">
                            <label htmlFor="title" className="font-weight-bold">Project Title</label>
                            <input type="text" id='name' className="form-control" placeholder="My Project" required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="author" className="font-weight-bold">Author</label>
                            <input type="text" id='author' className="form-control" placeholder="John Doe" required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1" className="font-weight-bold">Email Address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
                        </div>

                        <div className="row">
                            <div className="col">
                                <div>
                                    <div className='d-inline font-weight-bold'>
                                        Skills:
                                    </div>
                                    <div className='d-inline'>
                                        {keywordsList}
                                    </div>
                                </div>

                                <div className="input-group mt-2">
                                    <select id='skill' className="custom-select" onChange={this.keywordSelect}>
                                        <option value='placeholder' selected>Add Skill...</option>
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
                            <div className="col">
                                <div>
                                    <div className='d-inline font-weight-bold'>
                                        Related Fields:
                                    </div>
                                    <div className='d-inline'>
                                        {interestsList}
                                    </div>
                                </div>

                                <div className="input-group mt-2">
                                    <select id='interest' className="custom-select" onChange={this.interestSelect}>
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

                        <div className="form-group mt-3">
                            <label className="font-weight-bold">Project Description</label>
                            <textarea id='description' className="form-control" rows="3" required></textarea>
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Image URL</label>
                            <input id='image-url' type="text" className="form-control" placeholder="Enter image URL" />
                        </div>

                        <button className='btn btn-primary'>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}
