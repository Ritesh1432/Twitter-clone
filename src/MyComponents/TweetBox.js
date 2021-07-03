import React,{useState} from 'react';
import '../css/tweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from '../firebase';

export const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("")

    const sendTweet = e => {
        e.preventDefault();
      
        db.collection('posts').add({
            displayName:"Ritesh Dewoolkar",
            username:"Ritesh@1234",
            verified:true,
            text:tweetMessage,
            image:tweetImage,
            avatar:"https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
        });
        setTweetImage("");
        setTweetMessage("");
        
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                   <Avatar src='https://creativomentes.com/wp-content/uploads/2020/11/cropped-android-chrome-192x192-1-3.png' />
                   <input type="text" placeholder="What's happening?" 
                    value={tweetMessage} onChange={(e => setTweetMessage(e.target.value))}/>
                </div>
                <input type="text" placeholder="Optional: Enter image URL" className="tweetBox__imageInput" value={tweetImage} onChange={(e=>setTweetImage(e.target.value))}/>
                <Button type="submit" onClick={sendTweet} className="tweetBox__button">Tweet</Button>
            </form>
        </div>
    )
}
