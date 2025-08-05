import React, { useState } from 'react';
import PostItem from './PostItem';

const CategoryTabs = ({ title, colorClass, tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="tab01 p-b-20">
      <div className={`tab01-head how2 how2-${colorClass} bocl12 flex-s-c m-r-10 m-r-0-sr991`}>
        <h3 className={`f1-m-2 ${colorClass} tab01-title`}>
          {title}
        </h3>
        
        <ul className="nav nav-tabs" role="tablist">
          {tabs.map(tab => (
            <li key={tab.id} className="nav-item">
              <button
                className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
              </button>
            </li>
          ))}
          <li className="nav-item-more dropdown dis-none">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
              <i className="fa fa-ellipsis-h"></i>
            </a>
            <ul className="dropdown-menu"></ul>
          </li>
        </ul>
        
        <a href="#" className="tab01-link f1-s-1 cl9 hov-cl10 trans-03">
          View all
          <i className="fs-12 m-l-5 fa fa-caret-right"></i>
        </a>
      </div>
      
      <div className="tab-content p-t-35">
        {tabs.map(tab => (
          <div 
            key={tab.id}
            className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`}
            role="tabpanel"
          >
            <div className="row">
              {/* Main Post */}
              <div className="col-sm-6 p-r-25 p-r-15-sr991">
                <PostItem 
                  image="/images/post-05.jpg"
                  category="Music"
                  title="American live music lorem ipsum dolor sit amet consectetur"
                  date="Feb 18"
                  isLarge={true}
                />
              </div>
              
              {/* Side Posts */}
              <div className="col-sm-6 p-r-25 p-r-15-sr991">
                <PostItem 
                  image="/images/post-06.jpg"
                  category="Music"
                  title="Donec metus orci, malesuada et lectus vitae"
                  date="Feb 17"
                />
                <PostItem 
                  image="/images/post-07.jpg"
                  category="Game"
                  title="Donec metus orci, malesuada et lectus vitae"
                  date="Feb 16"
                />
                <PostItem 
                  image="/images/post-08.jpg"
                  category="Celebrity"
                  title="Donec metus orci, malesuada et lectus vitae"
                  date="Feb 12"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;