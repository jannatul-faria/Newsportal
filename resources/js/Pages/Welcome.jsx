import { Head, Link } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import MainLayout from '@/Layouts/MainLayout'
import Header from '../Components/Frontend/Header';
import PostsSection from '../Components/Frontend/PostsSection';
import LatestArticles from '@/Components/Frontend/LatestArticles';
import post01 from '@/Assets/images/post-01.jpg';
import post02 from '@/Assets/images/post-02.jpg';
import post03 from '@/Assets/images/post-03.jpg';
import post04 from '@/Assets/images/post-04.jpg';
import Footer from '@/Components/Frontend/Footer';


 function Welcome({ auth, laravelVersion, phpVersion }) {
    const headlines = [
        "Interest rate angst trips up US equity bull market",
        "Designer fashion show kicks off Variety Week",
        "Microsoft quisque at ipsum vel orci eleifend ultrices"
    ];

    const [currentHeadline, setCurrentHeadline] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    // Rotate headlines every 3 seconds with fade animation
    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);
            
            setTimeout(() => {
                setCurrentHeadline(prev => (prev + 1) % headlines.length);
                setIsVisible(true);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, [headlines.length]);

    return (
        <>
            <Head title="Home" />
            <Header/>
            <MainLayout>
                <div className="container">
                    <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
                        <div className="f2-s-1 p-r-30 size-w-0 m-tb-6 flex-wr-s-c">
                            <span className="text-uppercase cl2 p-r-8">
                                Trending Now:
                            </span>

                            <div className="dis-inline-block cl6 slide100-txt pos-relative size-w-0">
                                <span 
                                    className={`dis-inline-block slide100-txt-item ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                                >
                                    {headlines[currentHeadline]}
                                </span>
                            </div>
                        </div>

                        <div className="pos-relative size-a-2 bo-1-rad-22 of-hidden bocl11 m-tb-6">
                            <input 
                                className="f1-s-1 cl6 plh9 s-full p-l-25 p-r-45" 
                                type="text" 
                                name="search" 
                                placeholder="Search"
                            />
                            <button className="flex-c-c size-a-1 ab-t-r fs-20 cl2 hov-cl10 trans-03">
                                <i className="zmdi zmdi-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <section className="bg0">
                    <div className="container">
                        <div className="row m-rl--1">
                        {/* Main featured post */}
                        <div className="col-md-6 p-rl-1 p-b-2">
                            <div 
                            className="bg-img1 size-a-3 how1 pos-relative"  
                            style={{ backgroundImage: `url(${post01})` }}
                            >
                            <a href="blog-detail-01.html" className="dis-block how1-child1 trans-03"></a>

                            <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                                <a 
                                href="#" 
                                className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                                >
                                Business
                                </a>

                                <h3 className="how1-child2 m-t-14 m-b-10">
                                <a 
                                    href="blog-detail-01.html" 
                                    className="how-txt1 size-a-6 f1-l-1 cl0 hov-cl10 trans-03"
                                >
                                    Microsoft quisque at ipsum vel orci eleifend ultrices
                                </a>
                                </h3>

                                <span className="how1-child2">
                                <span className="f1-s-4 cl11">
                                    Jack Sims
                                </span>
                                <span className="f1-s-3 cl11 m-rl-3">
                                    -
                                </span>
                                <span className="f1-s-3 cl11">
                                    Feb 16
                                </span>
                                </span>
                            </div>
                            </div>
                        </div>

                        {/* Secondary posts column */}
                        <div className="col-md-6 p-rl-1">
                            <div className="row m-rl--1">
                            {/* Top secondary post */}
                            <div className="col-12 p-rl-1 p-b-2">
                                <div 
                                className="bg-img1 size-a-4 how1 pos-relative" 
                                style={{ backgroundImage: `url(${post02})` }}
                                >
                                <a href="blog-detail-01.html" className="dis-block how1-child1 trans-03"></a>

                                <div className="flex-col-e-s s-full p-rl-25 p-tb-24">
                                    <a 
                                    href="#" 
                                    className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                                    >
                                    Culture
                                    </a>

                                    <h3 className="how1-child2 m-t-14">
                                    <a 
                                        href="blog-detail-01.html" 
                                        className="how-txt1 size-a-7 f1-l-2 cl0 hov-cl10 trans-03"
                                    >
                                        London ipsum dolor sit amet, consectetur adipiscing elit.
                                    </a>
                                    </h3>
                                </div>
                                </div>
                            </div>

                            {/* Bottom left post */}
                            <div className="col-sm-6 p-rl-1 p-b-2">
                                <div 
                                className="bg-img1 size-a-5 how1 pos-relative" 
                                style={{ backgroundImage: `url(${post03})` }}
                                >
                                <a href="blog-detail-01.html" className="dis-block how1-child1 trans-03"></a>

                                <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                                    <a 
                                    href="#" 
                                    className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                                    >
                                    Life Style
                                    </a>

                                    <h3 className="how1-child2 m-t-14">
                                    <a 
                                        href="blog-detail-01.html" 
                                        className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03"
                                    >
                                        Pellentesque dui nibh, pellen-tesque ut dapibus ut
                                    </a>
                                    </h3>
                                </div>
                                </div>
                            </div>

                            {/* Bottom right post */}
                            <div className="col-sm-6 p-rl-1 p-b-2">
                                <div 
                                className="bg-img1 size-a-5 how1 pos-relative" 
                                style={{ backgroundImage: `url(${post04})` }}
                                >
                                <a href="blog-detail-01.html" className="dis-block how1-child1 trans-03"></a>

                                <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                                    <a 
                                    href="#" 
                                    className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                                    >
                                    Sport
                                    </a>

                                    <h3 className="how1-child2 m-t-14">
                                    <a 
                                        href="blog-detail-01.html" 
                                        className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03"
                                    >
                                        Motobike Vestibulum vene-natis purus nec nibh volutpat
                                    </a>
                                    </h3>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                <PostsSection/>
                <LatestArticles/>
            </MainLayout>
            <Footer/>
        </>
    );
}
Welcome.layout = page => <MainLayout children={page} />;
export default Welcome;
