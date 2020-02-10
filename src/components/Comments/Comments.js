import React, { useState, useEffect } from 'react';
import moment from "moment";
import AlertIcon from "../../images/alert_icon.png";
import InactiveAlertIcon from "../../images/inactive-alert-icon.png"
import PropertyImage from "../../images/property.jpg";
import CommentData from "../../data/comment-data.json";
import "./style.css";

const Comments = () => {


    const [comments, setComments] = useState([]);
    var [unacknowledgedCount] = useState(0)

    useEffect(() => {
        setComments(CommentData);
        setUnacknowledged();
    });

    const setUnacknowledged = () => {
        for (var i = 0; i < CommentData.length; i++) {
            if (CommentData[i].acknowledged == false) {
                unacknowledgedCount += 1
            }
        }
        console.log(unacknowledgedCount);
    }

    const setCommentRead = (event) => {
        event.preventDefault();

        var selectedCommentIndex = event.currentTarget.dataset.commentIndex;

        console.log(selectedCommentIndex);

        comments[selectedCommentIndex].acknowledged = true;
        console.log(comments[selectedCommentIndex].acknowledged);
    }

    return (
        <div>
            <div className="container-fluid pt-4">
                <div className="row button-row">
                    <div className="col-md-12">
                        <div className="dropdown">
                            {unacknowledgedCount > 0 &&
                                <button id="active-alert-btn" className="btn btn-custom float-right m-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img className="icon-image" src={AlertIcon} />
                                </button>
                            }
                            {unacknowledgedCount === 0 &&
                                <button id="inactive-alert-btn" className="btn btn-custom float-right m-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img className="icon-image" src={InactiveAlertIcon} />
                                </button>
                            }
                            <div class="dropdown-menu mt-1 mr-2 comment-dropdown" aria-labelledby="dropdownMenuButton">
                                <form>
                                    <div className="col-md-12">
                                        {comments.map((comment, index) => (
                                            < div className="row comment-row m-1 pb-1 pt-1" >
                                                <div className="col-md-2">
                                                    <img className="img-fluid comment-user-img" src={comment.user.image.thumb_url} />
                                                </div>
                                                <div className="col-md-10">
                                                    <p className="comment-details" id="comment-username">{comment.user.first_name} {comment.user.last_name}</p>
                                                    <p className="comment-details" id="comment-body">{comment.body}</p>
                                                    <p className="comment-details"><span id="comment-elapsed-time">2 minutes ago</span>
                                                        {comment.acknowledged == false &&
                                                            <span id="comment-mark-seen" data-comment-index={index} onClick={setCommentRead}><span id="comment-line-break"> | </span>Mark as Seen</span>
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
                        <img className="img-fluid property-image" src={PropertyImage} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Comments;