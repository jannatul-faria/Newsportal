import React from 'react';
import { Link } from '@inertiajs/react';
import post01 from '@/Assets/images/popular-post-01.jpg';
import post02 from '@/Assets/images/popular-post-02.jpg';
import post03 from '@/Assets/images/popular-post-03.jpg';
import post04 from '@/Assets/images/icons/logo-02.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const popularPosts = [
    {
      id: 1,
      image: post01,
      title: 'Donec metus orci, malesuada et lectus vitae',
      date: 'Feb 17'
    },
    {
      id: 2,
      image: post02,
      title: 'Lorem ipsum dolor sit amet, consectetur',
      date: 'Feb 16'
    },
    {
      id: 3,
      image: post03,
      title: 'Suspendisse dictum enim quis imperdiet auctor',
      date: 'Feb 15'
    }
  ];

  const categories = [
    { name: 'Fashion', count: 22 },
    { name: 'Technology', count: 29 },
    { name: 'Street Style', count: 15 },
    { name: 'Life Style', count: 28 },
    { name: 'DIY & Crafts', count: 16 }
  ];

  return (
    <footer>
      <div className="bg2 p-t-40 p-b-25">
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-lg-4 p-b-20">
              <div className="size-h-3 flex-s-c">
                <Link href="/">
                  <img 
                    className="max-s-full" 
                    src= {post04}
                    alt="Newspaper Logo" 
                  />
                </Link>
              </div>

              <div>
                <p className="f1-s-1 cl11 p-b-16">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor magna eget elit efficitur, at accumsan sem placerat. Nulla tellus libero, mattis nec molestie at, facilisis ut turpis. Vestibulum dolor metus, tincidunt eget odio
                </p>

                <p className="f1-s-1 cl11 p-b-16">
                  Any questions? Call us on (+1) 96 716 6879
                </p>

                <div className="p-t-15">
                  <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                    <span className="fab fa-facebook-f"></span>
                  </a>
                  <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                    <span className="fab fa-twitter"></span>
                  </a>
                  <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                    <span className="fab fa-pinterest-p"></span>
                  </a>
                  <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                    <span className="fab fa-vimeo-v"></span>
                  </a>
                  <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                    <span className="fab fa-youtube"></span>
                  </a>
                </div>
              </div>
            </div>

            {/* Popular Posts */}
            <div className="col-sm-6 col-lg-4 p-b-20">
              <div className="size-h-3 flex-s-c">
                <h5 className="f1-m-7 cl0">
                  Popular Posts
                </h5>
              </div>

              <ul>
                {popularPosts.map(post => (
                  <li key={post.id} className="flex-wr-sb-s p-b-20">
                    <Link href="#" className="size-w-4 wrap-pic-w hov1 trans-03">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                      />
                    </Link>

                    <div className="size-w-5">
                      <h6 className="p-b-5">
                        <Link href="#" className="f1-s-5 cl11 hov-cl10 trans-03">
                          {post.title}
                        </Link>
                      </h6>
                      <span className="f1-s-3 cl6">
                        {post.date}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="col-sm-6 col-lg-4 p-b-20">
              <div className="size-h-3 flex-s-c">
                <h5 className="f1-m-7 cl0">
                  Category
                </h5>
              </div>

              <ul className="m-t--12">
                {categories.map((category, index) => (
                  <li key={index} className="how-bor1 p-rl-5 p-tb-10">
                    <Link 
                      href="#" 
                      className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8"
                    >
                      {category.name} ({category.count})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg11">
        <div className="container size-h-4 flex-c-c p-tb-15">
          <span className="f1-s-1 cl0 txt-center">
            Copyright © {currentYear} Newspaper. All rights reserved. 
            Template by <a href="https://colorlib.com" target="_blank" className="f1-s-1 cl10 hov-link1">Colorlib</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;