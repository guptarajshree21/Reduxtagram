
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router-dom';

function Main() {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="apptitle">REDUXtagram</div>
      <div className="appBody">
      {posts.map(p => {
        return (
          <div className="tile" key={p.id}>
            <Link to ={"/detail/" + p.id}>
            <img src={p.display_src} className="tileimage" />
          </Link>
             <div className="tilecaption">{p.caption}</div>
            <div>
              <button className="btnLike fa fa-heart" onClick={()=>dispatch({type: "INCREMENT",id: p.id})}>
                <span style={{paddingLeft:4}}>{p.likes}</span>
              </button>
              <span className="iconlike fa fa-heart"></span>
              <button className="btnDelete" onClick={()=>dispatch({type:'DELETE',id: p.id})}><i class="fa fa-trash" style={{paddingRight:5,fontSize:14}}></i>Delete</button>
                <CSSTransitionGroup
                    transitionName="like"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                  >
                    <span key={p.likes} className="likes-heart">
                      {p.likes}
                    </span>
                  </CSSTransitionGroup>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default Main;
