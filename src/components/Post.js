import React from 'react';

export default ({ post: { title, body, id , starred}, onDelete, star}) => {
	let isStarred =  starred ? "post starred" : "post"; //for further CSS-styles
  return (
    <div className = {isStarred} >
      <h2>{ title }</h2>
      <p>{ body }</p>
      <button className="btn btn-danger" type="button" onClick={() => onDelete(id)}>
        Remove
      </button>
      <button className="toStar" onClick={()=> star(id)}>
        <i class="fa fa-star"></i>
      </button>
    </div>
  );
};