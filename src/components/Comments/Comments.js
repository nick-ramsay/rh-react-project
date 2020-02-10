import React, { Component } from "react";
import AlertIcon from "../../images/alert_icon.png";
import PropertyImage from "../../images/property.jpg";
import "./style.css";

class Comments extends Component {
    state = {

    }


    render() {
        return (
            <div>
                <div className="container-fluid pt-4">
                    <div className="row button-row">
                        <div className="col-md-12">
                            <div className="dropdown">
                                <button id="alert-btn" className="btn btn-custom float-right m-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img className="icon-image" src={AlertIcon} /></button>
                                <div class="dropdown-menu mt-1 mr-2" aria-labelledby="dropdownMenuButton">
                                    <div className="col-md-12">
                                        <div className="row comment-row m-1">
                                            <div className="col-md-2">
                                                <p>img</p>
                                            </div>
                                            <div className="col-md-10">
                                                <p className="comment-details">Frank Greeff</p>
                                                <p className="comment-details">Also, the address is 79/104 New Order Road not 78</p>
                                                <p className="comment-details"><span>2 minutes ago</span><span> | </span><span>Mark as Seen</span></p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <button className="btn btn-success">Acknowledge</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3 mt-3">
                            <img className="img-fluid property-image" src={PropertyImage} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Comments;