import React from 'react';
import { Link } from '@inertiajs/react';
import logoImg from '@/Assets/images/icons/logo-01.png';
import bannerImg from '@/Assets/images/banner-01.jpg';

export default function LogoBanner() {
  return (
    <div className="wrap-logo container">
      {/* Logo desktop */}
      <div className="logo">
        <Link href="/">
          <img src={logoImg} alt="LOGO" />
        </Link>
      </div>

      {/* Banner */}
      <div className="banner-header">
        <a
          href="https://themewagon.com/themes/free-bootstrap-4-html5-news-website-template-magnews2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={bannerImg} alt="Banner" />
        </a>
      </div>
    </div>
  );
}
