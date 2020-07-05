import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Detail = ({ match }) => {
  const postId = match.params.postId;
  const data = useSelector(state => state);
  let postData = data.posts.filter(i => i.id === postId)[0];
  let commentData = data.comments;
  const dispatch = useDispatch();

  return (
    <div>
      <Link to="/"><div className="apptitle">REDUXtagram</div></Link>
      <div style={{ display: 'grid', gridTemplateColumns: '600px auto', padding: '25px 30px 25px 30px' }}>
        <div className="detailImg">
          <img src={postData.display_src} style={{ width: '100%', height: '100%' }} />
          <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            <span key={postData.likes} className="likes-heart">{postData.likes}</span>
          </CSSTransitionGroup>
        </div>
        <div className="detailDsc">
          <div style={{ paddingBottom: 20 }}>{postData.caption}</div>
          {postData.code in commentData ?
            commentData[postData.code].map(i =>
              <div style={{ display: 'grid', gridTemplateColumns: '170px auto' }}>
                <div className="user" style={{ fontWeight: 600, color: '#033261', padding: 4 }}>{i.user}</div>
                <div className="comment" style={{ padding: 4 }}>{i.text}</div>
              </div>
            )

            :
            <div>
              No comments yet!!
            </div>
          }
          <button style={{ marginTop: '5%' }} onClick={() => dispatch({ type: "INCREMENT", id: postData.id })} className="btnLike fa fa-heart"><span>{postData.likes}</span></button>

        </div>
      </div>
    </div>
  );
}

export default Detail;
