import React, { useState, useEffect } from 'react';
import moment from "moment";
import AlertIcon from "../../images/alert_icon.png";
import PropertyImage from "../../images/property.jpg";
import CommentData from "../../data/comment-data.json";
import "./style.css";

const Comments = () => {
    
    const [comments, setComments] = useState([]);

    useEffect(() => {
        setComments(CommentData);
    });

    return (
        <div>
            <div className="container-fluid pt-4">
                <div className="row button-row">
                    <div className="col-md-12">
                        <div className="dropdown">
                            <button id="alert-btn" className="btn btn-custom float-right m-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img className="icon-image" src={AlertIcon} /></button>
                            <div class="dropdown-menu mt-1 mr-2 comment-dropdown" aria-labelledby="dropdownMenuButton">
                                <form>
                                <div className="col-md-12">
                                    {comments.map(comment => (
                                        < div className="row comment-row m-1 pb-1 pt-1" >
                                            <div className="col-md-2">
                                                <img className="img-fluid comment-user-img" src={comment.user.image.thumb_url} />
                                            </div>
                                            <div className="col-md-10">
                                                <p className="comment-details" id="comment-username">{comment.user.first_name} {comment.user.last_name}</p>
                                                <p className="comment-details" id="comment-body">{comment.body}</p>
                                                <p className="comment-details"><span id="comment-elapsed-time">2 minutes ago | </span><span id="comment-mark-seen">Mark as Seen</span></p>
                                            </div>
                                        </div>
                                    ))
                                    }
                                    <div className="row">
                                        <div className="col-md-12 text-center">
                                            <button type="button" className="btn btn-success">Acknowledge</button>
                                        </div>
                                    </div>
                                </div>
                                </form>
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
        </div >
    )
}

export default Comments;