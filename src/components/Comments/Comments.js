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
                            <button id="alert-btn" className="btn btn-custom float-right m-1"><img className="icon-image" src={AlertIcon} /></button>
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