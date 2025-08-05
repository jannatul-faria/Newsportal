import React from 'react';
import { Link } from '@inertiajs/react';
import PostMiniCard from '@/Components/Frontend/PostMiniCard';
import post1 from '@/Assets/images/post-05.jpg';
import post2 from '@/Assets/images/post-10.jpg';
import post3 from '@/Assets/images/post-14.jpg';
import post4 from '@/Assets/images/post-36.jpg';
import logoImg from '@/Assets/images/icons/logo-01.png';
import post25 from '@/Assets/images/post-25.jpg';
import post27 from '@/Assets/images/post-27.jpg';
import post26 from '@/Assets/images/post-26.jpg';
import post34 from '@/Assets/images/post-34.jpg';
import post35 from '@/Assets/images/post-35.jpg';
import post36 from '@/Assets/images/post-36.jpg';
import post37 from '@/Assets/images/post-37.jpg';
import post38 from '@/Assets/images/post-38.jpg';
import post39 from '@/Assets/images/post-39.jpg';
import post40 from '@/Assets/images/post-40.jpg';
import post41 from '@/Assets/images/post-41.jpg';
import post42 from '@/Assets/images/post-42.jpg';



export default function MegaMenu() {
  return (
    <>
    <div className="wrap-main-nav">
        <div className="main-nav">
            {/* Menu desktop */}
            <nav className="menu-desktop">
            <Link href="/" className="logo-stick">
                <img src={logoImg} alt="LOGO" />
            </Link>

                <ul className="main-menu">
                    <li className="main-menu-active">
                    <Link href="/">Home</Link>
                    <ul className="sub-menu">
                        <li>
                        <Link href="/">Homepage v1</Link>
                        </li>
                        <li>
                        <Link href="/home-02">Homepage v2</Link>
                        </li>
                        <li>
                        <Link href="/home-03">Homepage v3</Link>
                        </li>
                    </ul>
                    </li>
                    <li className="mega-menu-item">
                        <Link href="/category/news">News</Link>

                        <div className="sub-mega-menu">
                            <div className="nav flex-column nav-pills" role="tablist">
                            <a className="nav-link active" data-toggle="pill" href="#news-0" role="tab">All</a>
                            <a className="nav-link" data-toggle="pill" href="#news-1" role="tab">Entertainment</a>
                            <a className="nav-link" data-toggle="pill" href="#news-2" role="tab">Fashion</a>
                            <a className="nav-link" data-toggle="pill" href="#news-3" role="tab">Life Style</a>
                            <a className="nav-link" data-toggle="pill" href="#news-4" role="tab">Technology</a>
                            <a className="nav-link" data-toggle="pill" href="#news-5" role="tab">Travel</a>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane show active" id="news-0" role="tabpanel">
                                    <div className="row">
                                    <div className="col-3">
                                        <PostMiniCard image={post1} title="Donec metus orci, malesuada et lectus vitae" category="Music" date="Feb 18" />
                                    </div>
                                    <div className="col-3">
                                        <PostMiniCard image={post2} title="Donec metus orci, malesuada et lectus vitae" category="Finance" date="Jan 15" />
                                    </div>
                                    <div className="col-3">
                                        <PostMiniCard image={post3} title="Donec metus orci, malesuada et lectus vitae" category="Beach" date="Feb 12" />
                                    </div>
                                    <div className="col-3">
                                        <PostMiniCard image={post4} title="Donec metus orci, malesuada et lectus vitae" category="Technology" date="Jan 20" />
                                    </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="news-1" role="tabpanel">
                                    <div className="row">
                                        <div className="col-3">
                                        <PostMiniCard image={post25} title="Donec metus orci, malesuada et lectus vitae" category="Music" date="Feb 18" />
                                        </div>
                                        <div className="col-3">
                                        <PostMiniCard image={post27} title="Donec metus orci, malesuada et lectus vitae" category="Music" date="Jan 20" />
                                        </div>
                                        <div className="col-3">
                                        <PostMiniCard image={post26} title="Donec metus orci, malesuada et lectus vitae" category="Music" date="Feb 12" />
                                        </div>
                                        <div className="col-3">
                                        <PostMiniCard image={post34} title="Donec metus orci, malesuada et lectus vitae" category="Music" date="Jan 15" />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="news-2" role="tabpanel">
                                    <div className="row">
                                        <div className="col-3">
                                        <PostMiniCard image={post25} title="Donec metus orci, malesuada et lectus vitae" category="Music" date="Feb 18" />
                                        </div>
                                        <div className="col-3">
                                        <PostMiniCard image={post27} title="Donec metus orci, malesuada et lectus vitae" category="Music" date="Jan 20" />
                                        </div>
                                        <div className="col-3">
                                        <PostMiniCard image={post26} title="Donec metus orci, malesuada et lectus vitae" category="Music" date="Feb 12" />
                                        </div>
                                        <div className="col-3">
                                        <PostMiniCard image={post34} title="Donec metus orci, malesuada et lectus vitae" category="Music" date="Jan 15" />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="news-3" role="tabpanel">
                                    <div className="row">
                                        <div className="col-3">
                                        <PostMiniCard image={post25} title="Donec metus orci, malesuada et lectus vitae" category="Music" date="Feb 18" />
                                        </div>
                                        <div className="col-3">
                                        <PostMiniCard image={post27} title="Donec metus orci, malesuada et lectus vitae" category="Music" date="Jan 20" />
                                        </div>
                                        <div className="col-3">
                                        <PostMiniCard image={post26} title="Donec metus orci, malesuada et lectus vitae" category="Music" date="Feb 12" />
                                        </div>
                                        <div className="col-3">
                                        <PostMiniCard image={post34} title="Donec metus orci, malesuada et lectus vitae" category="Music" date="Jan 15" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="mega-menu-item">
                        <Link href="/category/entertainment">Entertainment</Link>

                        <div className="sub-mega-menu">
                            <div className="nav flex-column nav-pills" role="tablist">
                            <a className="nav-link active" data-toggle="pill" href="#enter-1" role="tab">All</a>
                            <a className="nav-link" data-toggle="pill" href="#enter-2" role="tab">Game</a>
                            <a className="nav-link" data-toggle="pill" href="#enter-3" role="tab">Celebrity</a>
                            </div>

                            <div className="tab-content">
                            {/* Tab: All */}
                            <div className="tab-pane show active" id="enter-1" role="tabpanel">
                                <div className="row">
                                <div className="col-3"><PostMiniCard image={post25} title="Donec metus orci..." category="Music" date="Feb 18" /></div>
                                <div className="col-3"><PostMiniCard image={post27} title="Donec metus orci..." category="Music" date="Jan 20" /></div>
                                <div className="col-3"><PostMiniCard image={post26} title="Donec metus orci..." category="Music" date="Feb 12" /></div>
                                <div className="col-3"><PostMiniCard image={post34} title="Donec metus orci..." category="Music" date="Jan 15" /></div>
                                </div>
                            </div>

                            {/* Tab: Game */}
                            <div className="tab-pane" id="enter-2" role="tabpanel">
                                <div className="row">
                                <div className="col-3"><PostMiniCard image={post35} title="Donec metus orci..." category="Music" date="Feb 18" /></div>
                                <div className="col-3"><PostMiniCard image={post36} title="Donec metus orci..." category="Music" date="Feb 12" /></div>
                                <div className="col-3"><PostMiniCard image={post37} title="Donec metus orci..." category="Music" date="Jan 20" /></div>
                                <div className="col-3"><PostMiniCard image={post38} title="Donec metus orci..." category="Music" date="Jan 15" /></div>
                                </div>
                            </div>

                            {/* Tab: Celebrity */}
                            <div className="tab-pane" id="enter-3" role="tabpanel">
                                <div className="row">
                                <div className="col-3"><PostMiniCard image={post39} title="Donec metus orci..." category="Music" date="Feb 18" /></div>
                                <div className="col-3"><PostMiniCard image={post41} title="Donec metus orci..." category="Music" date="Jan 20" /></div>
                                <div className="col-3"><PostMiniCard image={post42} title="Donec metus orci..." category="Music" date="Jan 15" /></div>
                                <div className="col-3"><PostMiniCard image={post40} title="Donec metus orci..." category="Music" date="Feb 12" /></div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </li>
                    <li>
        <Link href="#">Features</Link>
        <ul className="sub-menu">
            <li><Link href="/category-01">Category Page v1</Link></li>
            <li><Link href="/category-02">Category Page v2</Link></li>
            <li><Link href="/blog-grid">Blog Grid Sidebar</Link></li>
            <li><Link href="/blog-list-01">Blog List Sidebar v1</Link></li>
            <li><Link href="/blog-list-02">Blog List Sidebar v2</Link></li>
            <li><Link href="/blog-detail-01">Blog Detail Sidebar</Link></li>
            <li><Link href="/blog-detail-02">Blog Detail No Sidebar</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
        </ul>
                    </li>
                </ul>
            </nav> 
        </div>
    </div> 
    </>
  )}
