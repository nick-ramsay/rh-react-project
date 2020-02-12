import React, { useState, useEffect } from 'react';
import moment from "moment";
import AlertIcon from "../../images/alert_icon.png";
import InactiveAlertIcon from "../../images/inactive-alert-icon.png"
import PropertyImage from "../../images/property.jpg";
import CommentData from "../../data/comment-data.json";
import "./style.css";

const Comments = () => {


    var [comments, setComments] = useState(CommentData);
    var [unacknowledgedCount, setUnacknowledgedCount] = useState(0)

    useEffect(() => {
        setComments(CommentData);
        getUnacknowledgedCount();
    },[]);

    const getUnacknowledgedCount = () => {
        setUnacknowledgedCount(unacknowledgedCount = 0);
        for (var i = 0; i < comments.length; i++) {
            if (comments[i].acknowledged === false) {
                setUnacknowledgedCount(unacknowledgedCount += 1);
            }
        }
    }

    const setCommentRead = event => {
        event.preventDefault();
        var currentComments = comments;
        var selectedCommentIndex = event.currentTarget.dataset.commentIndex;
        currentComments[selectedCommentIndex].acknowledged = true;
        setComments(comments => currentComments);
        getUnacknowledgedCount();
    }

    return (
        <div>
            <div className="container-fluid pt-4">
                <div className="row button-row">
                    <div className="col-md-12">
                        <div className="dropdown">
                            {unacknowledgedCount > 0 &&
                                <button id="active-alert-btn" className="btn btn-custom float-right m-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img className="icon-image" alt="Active Alert Icon" src={AlertIcon} />
                                    <span className="badge badge-pill badge-danger">{unacknowledgedCount}</span>
                                </button>
                            }
                            {unacknowledgedCount === 0 &&
                                <button id="inactive-alert-btn" className="btn btn-custom float-right m-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img className="icon-image" alt="Inactive Alert Icon" src={InactiveAlertIcon} />
                                </button>
                            }
                            <div className="dropdown-menu mt-1 mr-2 comment-dropdown" aria-labelledby="dropdownMenuButton">
                                <form>
                                    <div className="col-md-12">
                                        {comments
                                            .sort(({ id: lastID }, { id: currentID }) => currentID - lastID)
                                            .map((comment, index) => (
                                                <div key={index} className="row comment-row m-1 pb-1 pt-1" >
                                                    <div className="col-md-2">
                                                        <img className="img-fluid comment-user-img" alt={comment.user.first_name + comment.user.last_name + "Image"} src={comment.user.image.thumb_url} />
                                                    </div>
                                                    <div className="col-md-10">
                                                        <p className="comment-details" id="comment-username">{comment.user.first_name} {comment.user.last_name}</p>
                                                        <p className="comment-details" id="comment-body">{comment.body}</p>
                                                        <p className="comment-details">
                                                            <span id="comment-elapsed-time">{moment().diff(moment(comment.dates.created.date_time, "DD/MM/YYYY"), "days")} days ago</span>
                                                            {!comment.acknowledged &&
                                                                <span>
                                                                    <span id="comment-line-break"> | </span>
                                                                    <span id="comment-mark-seen" data-comment-index={index} onClick={setCommentRead}>Mark as Seen</span>
                                                                </span>
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <button type="button" className="btn btn-success">Mark As Approved</button>
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
                        <img className="img-fluid property-image" alt="Property" src={PropertyImage} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Comments;