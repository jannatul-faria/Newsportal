import React, { useState } from 'react';
import CategoryTabs from './CategoryTabs';
import PopularPosts from './PopularPosts';
import StayConnected from './StayConnected';

const PostsSection = () => {
  return (
    <section className="bg0 p-t-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="p-b-20">
              <CategoryTabs 
                title="Entertainment"
                colorClass="cl1"
                tabs={[
                  { id: 'tab1-1', name: 'All' },
                  { id: 'tab1-2', name: 'Celebrity' },
                  { id: 'tab1-3', name: 'Movies' },
                  { id: 'tab1-4', name: 'Music' },
                  { id: 'tab1-5', name: 'Games' }
                ]}
              />
              
              <CategoryTabs 
                title="Business"
                colorClass="cl2"
                tabs={[
                  { id: 'tab2-1', name: 'All' },
                  { id: 'tab2-2', name: 'Finance' },
                  { id: 'tab2-3', name: 'Money & Markets' },
                  { id: 'tab2-4', name: 'Small Business' }
                ]}
              />
              
              <CategoryTabs 
                title="Travel"
                colorClass="cl3"
                tabs={[
                  { id: 'tab3-1', name: 'All' },
                  { id: 'tab3-2', name: 'Hotels' },
                  { id: 'tab3-3', name: 'Flight' },
                  { id: 'tab3-4', name: 'Beachs' },
                  { id: 'tab3-5', name: 'Culture' }
                ]}
              />
            </div>
          </div>
          
          <div className="col-md-10 col-lg-4">
            <div className="p-l-10 p-rl-0-sr991 p-b-20">
              <PopularPosts />
              
              <div className="flex-c-s p-t-8">
                <a href="#">
                  <img 
                    className="max-w-full" 
                    src="/images/banner-02.jpg" 
                    alt="Banner" 
                  />
                </a>
              </div>
              
              <StayConnected />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostsSection;