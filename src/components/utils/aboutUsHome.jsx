import React from "react";
import './aboutUsHome.css'

const AboutUsHome = () => {
    return (
        <div className="row">
            {/* Card 1 */}
            <div className="col-12 col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">About Us</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">Know more</a>
                    </div>
                </div>
            </div>
            
            {/* Card 2 */}
            <div className="col-12 col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Project Executed Country</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">See Our Client</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsHome;
