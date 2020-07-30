import React, { Component } from 'react';
import vogue from '../../images/voguee.jpg';
import ecomm from '../../images/ecomm.jpeg';
import blog from '../../images/blog.jpeg';
import './style.css';

export class Cards extends Component {
    render () {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                    <div className="card text-center">
                        <div className="overflow">
                            <img src={vogue} alt="" className="card-img-top"/>
                        </div>
                        <div className="card-body text-dark">
                        <h4 className="card-title">Title</h4>
                        <p>hfiewlfnowfh fhwoihflffw</p>
                        <a href="#" className="btn btn-outline-success">Anywhere</a> 
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card text-center">
                        <div className="overflow">
                            <img src={ecomm} alt="" className="card-img-top"/>
                        </div>
                        <div className="card-body text-dark">
                        <h4 className="card-title">Title</h4>
                        <p>hfiewlfnowfh fhwoihflffw</p>
                        <a href="#" className="btn btn-outline-success">Anywhere</a> 
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card text-center">
                        <div className="overflow">
                            <img src={blog} alt="" className="card-img-top"/>
                        </div>
                        <div className="card-body text-dark">
                        <h4 className="card-title">Title</h4>
                        <p>hfiewlfnowfh fhwoihflffw</p>
                        <a href="#" className="btn btn-outline-success">Anywhere</a> 
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Cards;
