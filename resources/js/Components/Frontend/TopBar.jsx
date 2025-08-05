import React from 'react';
import { Link } from '@inertiajs/react';
import iconNight from '@/Assets/images/icons/icon-night.png'; 

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="content-topbar container h-100">
        <div className="left-topbar">
          <span className="left-topbar-item flex-wr-s-c">
            <span>New York, NY</span>

            <img
              className="m-b-1 m-rl-8"
              src={iconNight}
              alt="Night Icon"
            />

            <span>HI 58° LO 56°</span>
          </span>

          <Link href="#" className="left-topbar-item">About</Link>
          <Link href="#" className="left-topbar-item">Contact</Link>
          <Link href="#" className="left-topbar-item">Sign up</Link>
          <Link href="#" className="left-topbar-item">Log in</Link>
        </div>

        <div className="right-topbar">
          <Link href="#"><span className="fab fa-facebook-f"></span></Link>
          <Link href="#"><span className="fab fa-twitter"></span></Link>
          <Link href="#"><span className="fab fa-pinterest-p"></span></Link>
          <Link href="#"><span className="fab fa-vimeo-v"></span></Link>
          <Link href="#"><span className="fab fa-youtube"></span></Link>
        </div>
      </div>
    </div>
  );
}
