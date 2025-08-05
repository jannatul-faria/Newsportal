import React from 'react';
import { Link } from '@inertiajs/react';

export default function PostMiniCard({ image, title, category, date }) {
  return (
    <div>
      <Link href="/blog-detail" className="wrap-pic-w hov1 trans-03">
        <img src={image} alt="Post Thumbnail" />
      </Link>

      <div className="p-t-10">
        <h5 className="p-b-5">
          <Link href="/blog-detail" className="f1-s-5 cl3 hov-cl10 trans-03">
            {title}
          </Link>
        </h5>

        <span className="cl8">
          <Link href="#" className="f1-s-6 cl8 hov-cl10 trans-03">{category}</Link>
          <span className="f1-s-3 m-rl-3">-</span>
          <span className="f1-s-3">{date}</span>
        </span>
      </div>
    </div>
  );
}
