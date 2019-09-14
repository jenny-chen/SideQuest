import React, { Component } from 'react';
import Navbar from '../Components/Navbar';

const posInterests = [
    ['design', 'Design'],
    ['education', 'Education'],
    ['health', 'Healthcare'],
    ['science', 'Science'],
    ['shopping', 'Shopping'],
    ['sports', 'Sports'],
];

const posKeywords = [
    ['android', 'Android'],
    ['api', 'API'],
    ['blockchain', 'Blockchain'],
    ['graphic-design', 'Graphic Design'],
    ['ios', 'iOS'],
    ['ml', 'Machine Learning'],
    ['oop', 'Object Oriented'],
    ['scripting', 'Scripting'],
    ['web', 'Web'],
];

export default class SubmitPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keywords: [],
            interests: [],
        };
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
                    <form>
                        <div className="form-group">
                            <label htmlFor="title" class="font-weight-bold">Project Title</label>
                            <input type="text" className="form-control" placeholder="My Project"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="author" class="font-weight-bold">Author</label>
                            <input type="text" className="form-control" placeholder="John Doe"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1" class="font-weight-bold">Email Address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>


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


                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1" class="font-weight-bold">Example select</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect2" class="font-weight-bold">Example multiple select</label>
                            <select multiple className="form-control" id="exampleFormControlSelect2">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1" class="font-weight-bold">Project Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlFile1" class="font-weight-bold">File Upload</label>
                            <input type="file" class="form-control-file" id="exampleFormControlFile1" multiple></input>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
