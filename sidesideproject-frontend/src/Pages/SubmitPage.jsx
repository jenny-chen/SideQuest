import React, { Component } from 'react';
import Navbar from '../Components/Navbar';

export default class SubmitPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return {
            <div>
                <Navbar />
                <div className='container mt-4'>
                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Example select</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect2">Example multiple select</label>
                                <select multiple class="form-control" id="exampleFormControlSelect2">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </form>
                    // <div className='card'>
                    //     <div className="card-body">
                    //         <h3>Search</h3>
                    //         <div className='mt-3'>
                    //             <div className='mt-3'>
                    //                 <div>
                    //                     <div className='d-inline'>
                    //                         Title:
                    //                     </div>
                    //                     <div className='d-inline'>
                    //                         {interestsList}
                    //                     </div>
                    //                 </div>
                    //
                    //             </div>
                    //
                    //         </div>
                    //
                    //         <button className='btn btn-primary mt-3'>
                    //             Search
                    //         </button>
                    //     </div>
                    // </div>
                </div>
            </div>
        }
    }
}
