import React from 'react';

const StayConnected = () => {
  const socials = [
    { 
      platform: 'facebook', 
      icon: 'fab fa-facebook-f', 
      count: '6879 Fans',
      action: 'Like'
    },
    { 
      platform: 'twitter', 
      icon: 'fab fa-twitter', 
      count: '568 Followers',
      action: 'Follow'
    },
    { 
      platform: 'youtube', 
      icon: 'fab fa-youtube', 
      count: '5039 Subscribers',
      action: 'Subscribe'
    }
  ];

  return (
    <div className="p-t-50">
      <div className="how2 how2-cl4 flex-s-c">
        <h3 className="f1-m-2 cl3 tab01-title">
          Stay Connected
        </h3>
      </div>

      <ul className="p-t-35">
        {socials.map((social, index) => (
          <li key={index} className="flex-wr-sb-c p-b-20">
            <a href="#" className={`size-a-8 flex-c-c borad-3 size-a-8 bg-${social.platform} fs-16 cl0 hov-cl0`}>
              <span className={social.icon}></span>
            </a>

            <div className="size-w-3 flex-wr-sb-c">
              <span className="f1-s-8 cl3 p-r-20">
                {social.count}
              </span>
              <a href="#" className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03">
                {social.action}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StayConnected;