import React from 'react';

const PopularPosts = () => {
  const posts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Proin velit consectetur non neque",
    "Nunc vestibulum, enim vitae condimentum volutpat lobortis ante",
    "Proin velit justo consectetur non neque elementum",
    "Proin velit consectetur non neque"
  ];

  return (
    <div>
      <div className="how2 how2-cl4 flex-s-c">
        <h3 className="f1-m-2 cl3 tab01-title">
          Most Popular
        </h3>
      </div>

      <ul className="p-t-35">
        {posts.map((post, index) => (
          <li key={index} className="flex-wr-sb-s p-b-22">
            <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
              {index + 1}
            </div>
            <a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
              {post}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularPosts;