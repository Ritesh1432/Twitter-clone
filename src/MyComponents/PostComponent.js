import React from 'react';
import { forwardRef } from 'react';
import { Avatar } from '@material-ui/core';
import { VerifiedUser } from '@material-ui/icons';
import { ChatBubbleOutlineRounded } from '@material-ui/icons';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import PublishIcon from '@material-ui/icons/Publish';
import '../css/post.css';

export const PostComponent = forwardRef(({displayName, username, verified, text, image, avatar},ref) => {
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>{displayName}{" "}<span className="header__usernameText">{verified ? <VerifiedUser className="post__badge"/>:""}{username}</span></h3>
                    </div>
                </div>
                <div className="post__headerDescription">
                    <p>{text}</p>
                </div>
                <img src={image} alt="" />
                <div className="post__footer">
                   <ChatBubbleOutlineRounded />
                   <RepeatRoundedIcon />
                   <FavoriteBorderSharpIcon />
                   <PublishIcon />
            </div>
            </div>
        </div>
       
    )
})
