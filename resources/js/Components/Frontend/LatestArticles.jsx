import React from 'react';
import { Link } from '@inertiajs/react';

const LatestArticles = () => {
  const articles = [
    { id: 1, image: '../Assets/images/latest-01.jpg', title: 'You wish lorem ipsum dolor sit amet consectetur', author: 'John Alvarado', date: 'Feb 18' },
    { id: 2, image: '@/Assets/images/latest-02.jpg', title: 'You wish lorem ipsum dolor sit amet consectetur', author: 'John Alvarado', date: 'Feb 16' },
    { id: 3, image: '@/Assets/images/latest-03.jpg', title: 'You wish lorem ipsum dolor sit amet consectetur', author: 'John Alvarado', date: 'Feb 15' },
    { id: 4, image: '@/Assets/images/latest-04.jpg', title: 'You wish lorem ipsum dolor sit amet consectetur', author: 'John Alvarado', date: 'Feb 13' },
    { id: 5, image: '@/Assets/images/latest-05.jpg', title: 'You wish lorem ipsum dolor sit amet consectetur', author: 'John Alvarado', date: 'Feb 10' },
    { id: 6, image: '@/Assets/images/latest-06.jpg', title: 'You wish lorem ipsum dolor sit amet consectetur', author: 'John Alvarado', date: 'Feb 09' },
  ];

  const tags = [
    'Fashion', 'Lifestyle', 'Denim', 'Streetstyle', 'Crafts', 'Magazine', 'News', 'Blogs'
  ];

  return (
    <>
      {/* Banner */}
      <div className="container">
        <div className="flex-c-c">
          <a href="#">
            <img 
              className="max-w-full" 
              src="/images/banner-01.jpg" 
              alt="Advertisement Banner" 
            />
          </a>
        </div>
      </div>

      {/* Latest Articles */}
      <section className="bg0 p-t-60 p-b-35">
        <div className="container">
          <div className="row justify-content-center">
            {/* Left Column - Articles */}
            <div className="col-md-10 col-lg-8 p-b-20">
              <div className="how2 how2-cl4 flex-s-c m-r-10 m-r-0-sr991">
                <h3 className="f1-m-2 cl3 tab01-title">
                  Latest Articles
                </h3>
              </div>

              <div className="row p-t-35">
                {articles.map(article => (
                  <div key={article.id} className="col-sm-6 p-r-25 p-r-15-sr991">
                    <div className="m-b-45">
                      <Link href="/blog-detail" className="wrap-pic-w hov1 trans-03">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                        />
                      </Link>

                      <div className="p-t-16">
                        <h5 className="p-b-5">
                          <Link href="/blog-detail" className="f1-m-3 cl2 hov-cl10 trans-03">
                            {article.title}
                          </Link>
                        </h5>

                        <span className="cl8">
                          <Link href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                            by {article.author}
                          </Link>
                          <span className="f1-s-3 m-rl-3">-</span>
                          <span className="f1-s-3">{article.date}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="col-md-10 col-lg-4">
              <div className="p-l-10 p-rl-0-sr991 p-b-20">
                {/* Featured Video */}
                <div className="p-b-55">
                  <div className="how2 how2-cl4 flex-s-c m-b-35">
                    <h3 className="f1-m-2 cl3 tab01-title">
                      Featured Video
                    </h3>
                  </div>

                  <div>
                    <div className="wrap-pic-w pos-relative">
                      <img src="/images/video-01.jpg" alt="Featured Video" />
                      
                      <button 
                        className="s-full ab-t-l flex-c-c fs-32 cl0 hov-cl10 trans-03"
                        onClick={() => document.getElementById('video-modal').showModal()}
                      >
                        <span className="fab fa-youtube"></span>
                      </button>
                    </div>

                    <div className="p-tb-16 p-rl-25 bg3">
                      <h5 className="p-b-5">
                        <Link href="#" className="f1-m-3 cl0 hov-cl10 trans-03">
                          Music lorem ipsum dolor sit amet consectetur 
                        </Link>
                      </h5>

                      <span className="cl15">
                        <Link href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                          by John Alvarado
                        </Link>
                        <span className="f1-s-3 m-rl-3">-</span>
                        <span className="f1-s-3">Feb 18</span>
                      </span>
                    </div>
                  </div>	
                </div>
                
                {/* Subscribe Form */}
                <div className="bg10 p-rl-35 p-t-28 p-b-35 m-b-55">
                  <h5 className="f1-m-5 cl0 p-b-10">
                    Subscribe
                  </h5>

                  <p className="f1-s-1 cl0 p-b-25">
                    Get all latest content delivered to your email a few times a month.
                  </p>

                  <form className="size-a-9 pos-relative">
                    <input 
                      className="s-full f1-m-6 cl6 plh9 p-l-20 p-r-55" 
                      type="email" 
                      name="email" 
                      placeholder="Email"
                      required
                    />

                    <button 
                      type="submit"
                      className="size-a-10 flex-c-c ab-t-r fs-16 cl9 hov-cl10 trans-03"
                    >
                      <i className="fa fa-arrow-right"></i>
                    </button>
                  </form>
                </div>
                
                {/* Tags */}
                <div className="p-b-55">
                  <div className="how2 how2-cl4 flex-s-c m-b-30">
                    <h3 className="f1-m-2 cl3 tab01-title">
                      Tags
                    </h3>
                  </div>

                  <div className="flex-wr-s-s m-rl--5">
                    {tags.map((tag, index) => (
                      <Link 
                        key={index}
                        href="#"
                        className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>	
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <dialog id="video-modal" className="modal">
        <div className="modal-box max-w-5xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Featured Video" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default LatestArticles;