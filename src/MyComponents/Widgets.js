import React from 'react';
import '../css/widgets.css';
import { Search } from '@material-ui/icons';
import { TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed' ;

export const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <Search className="widgets__searchIcon" />
                <input type="text" placeholder="Search Twitter" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening?</h2>
                 <TwitterTweetEmbed tweetId={'1223184526064656385'}/>
                <TwitterTweetEmbed tweetId={"1406914841571377156"} />
                <TwitterTweetEmbed tweetId={"1410129656070639618"} />
                
                <TwitterShareButton options={{text:"Now I just going to tweet something"}}/>
            </div>
        </div>
    )
}
