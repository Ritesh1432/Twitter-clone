import React, {useState, useEffect} from 'react';
import FlipMove from 'react-flip-move';
import '../css/feed.css';
import { TweetBox } from './TweetBox';
import { PostComponent } from './PostComponent';
import db from '../firebase';

export const MainContent = () => {
    const [posts, setPosts] = useState([])
    
    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    },[])
    return (
        <div className="main-content">
            {/* Top Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            {/* Tweet Box */}
            <TweetBox />

           <FlipMove>
            {/* Post Component */}
            {posts.map(post=>(
               <PostComponent 
               key = {post.text}
               displayName={post.displayName}
               username={post.username}
               verified={post.verified}
               text={post.text}
               image={post.image}
               avatar={post.avatar} />
            ))}

            </FlipMove>
            
            


        </div>
    )
}
