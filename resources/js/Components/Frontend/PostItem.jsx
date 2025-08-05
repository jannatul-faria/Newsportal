import React from 'react';

const PostItem = ({ image, category, title, date, isLarge = false }) => {
  return (
    <div className={`${isLarge ? 'm-b-30' : 'flex-wr-sb-s m-b-30'}`}>
      <a href="#" className={`${isLarge ? 'wrap-pic-w' : 'size-w-1 wrap-pic-w'} hov1 trans-03`}>
        <img src={image} alt="Post" />
      </a>
      
      <div className={isLarge ? "p-t-20" : "size-w-2"}>
        <h5 className="p-b-5">
          <a href="#" className={`${isLarge ? 'f1-m-3' : 'f1-s-5'} cl3 hov-cl10 trans-03`}>
            {title}
          </a>
        </h5>
        
        <span className="cl8">
          <a href="#" className={`${isLarge ? 'f1-s-4' : 'f1-s-6'} cl8 hov-cl10 trans-03`}>
            {category}
          </a>
          <span className="f1-s-3 m-rl-3">-</span>
          <span className="f1-s-3">{date}</span>
        </span>
      </div>
    </div>
  );
};

export default PostItem;