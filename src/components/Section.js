import React from "react";
import './style.css';
import { useState } from "react";

const Section = (props) => {
    const [Likes, setLikes] = useState(props.obj[props.user].likes);
    const [strLike, setStrLike] = useState("Like");
    return (
        <div className="section">
            <div className="sect_head">Post: {props.user}</div>
            <div className="sect_img"><img src={props.obj[props.user].image} alt="feed images" /></div>
            <div className="sect_lc">
                <div className="sect_likes"><button onClick={() => setLikes(Likes => {
                    if (Likes === props.obj[props.user].likes) { setStrLike("Unlike"); return (Likes + 1) } else { setStrLike("like"); return props.obj[props.user].likes }
                })}> {strLike}
                    </button>&nbsp;&nbsp;Likes:{Likes}</div>
                <div className="sect_comments">Comment: {props.obj[props.user].comments}</div>
            </div>
        </div>
    )
}

export default Section;