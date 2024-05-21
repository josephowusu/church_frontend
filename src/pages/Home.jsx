import React from 'react';
import HeroSlider from '../components/HeroSlider';
import { postData, trendingData } from '../modules/dummyData';

const PostComponent = ({ post }) => (
    <div className="post-entry-1">
        <a href="single-post.html">
            <img src="assets/img/post-landscape-2.jpg" alt="" className="img-fluid" />
        </a>
        <div className="post-meta">
            <span className="date">{post.category}</span>
            <span className="mx-1">&bullet;</span>
            <span>{post.date}</span>
        </div>
        <h2>
            <a href="single-post.html">{post.title}</a>
        </h2>
    </div>
)

const PostList = ({ postData }) => {
    const pairs = [];
    for (let i = 0; i < postData.length; i += 2) {
        pairs.push(postData.slice(i, i + 2))
    }

    return (
        <div className="row">
            {pairs.map((pair, index) => (
                <React.Fragment key={index}>
                    <div className="col-lg-4 border-start custom-border">
                        {pair[0] && <PostComponent post={pair[0]} />}
                    </div>
                    <div className="col-lg-4 border-start custom-border">
                        {pair[1] && <PostComponent post={pair[1]} />}
                    </div>
                </React.Fragment>
            ))}
        </div>
    )
}

const Home = () => {
    return (
        <>
            <HeroSlider />
            <section id="posts" class="posts">
                <div class="container" data-aos="fade-up">
                    <div class="row g-5">
                        <div class="col-lg-4">
                            <div class="post-entry-1 lg">
                                <a href="single-post.html">
                                    <img src="assets/img/post-landscape-1.jpg" alt="" class="img-fluid" />
                                </a>
                                <div class="post-meta">
                                    <span class="date">About Us</span> 
                                    <span class="mx-1">&bullet;</span> 
                                    <span>Jul 5th '22</span>
                                </div>
                                <h2><a href="single-post.html">Abundant Christ Church International (ACCI)</a></h2>
                                <p class="mb-4 d-block">Abundant Christ Church International (ACCI) is a vibrant and dynamic community of believers dedicated to spreading the love and teachings of Jesus Christ. Founded in 2005, ACCI has grown from a small gathering of faithful individuals to a flourishing congregation with a mission to impact lives and transform communities</p>

                                <div class="d-flex align-items-center author">
                                    <div class="photo">
                                        <img src="assets/img/person-1.jpg" alt="" class="img-fluid" />
                                    </div>
                                    <div class="name">
                                        <h3 class="m-0 p-0">Cameron Williamson</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-8">
                            <div class="row g-5">
                                

                                <div class="col-lg-4 border-start custom-border">
                                    <div class="post-entry-1">
                                        <a href="single-post.html">
                                            <img src="assets/img/post-landscape-2.jpg" alt="" class="img-fluid" />
                                        </a>
                                        <div class="post-meta">
                                            <span class="date">Sport</span> 
                                            <span class="mx-1">&bullet;</span> 
                                            <span>Jul 5th '22</span>
                                        </div>
                                        <h2>
                                            <a href="single-post.html">Let{'’'}s Get Back to Work, New York</a>
                                        </h2>
                                    </div>
                                    <div class="post-entry-1">
                                        <a href="single-post.html">
                                            <img src="assets/img/post-landscape-5.jpg" alt="" class="img-fluid" />
                                        </a>
                                        <div class="post-meta">
                                            <span class="date">Food</span> 
                                            <span class="mx-1">&bullet;</span> 
                                            <span>Jul 17th '22</span>
                                        </div>
                                        <h2>
                                            <a href="single-post.html">
                                                How to Avoid Distraction and Stay Focused During Video Calls?
                                            </a>
                                        </h2>
                                    </div>
                                    <div class="post-entry-1">
                                        <a href="single-post.html"><img src="assets/img/post-landscape-7.jpg" alt="" class="img-fluid" /></a>
                                        <div class="post-meta"><span class="date">Design</span> <span class="mx-1">&bullet;</span> <span>Mar 15th '22</span></div>
                                        <h2><a href="single-post.html">Why Craigslist Tampa Is One of The Most Interesting Places On the Web?</a></h2>
                                    </div>
                                </div>
                                <div class="col-lg-4 border-start custom-border">
                                    <div class="post-entry-1">
                                        <a href="single-post.html">
                                            <img src="assets/img/post-landscape-2.jpg" alt="" class="img-fluid" />
                                        </a>
                                        <div class="post-meta">
                                            <span class="date">Sport</span> 
                                            <span class="mx-1">&bullet;</span> 
                                            <span>Jul 5th '22</span>
                                        </div>
                                        <h2>
                                            <a href="single-post.html">Let{'’'}s Get Back to Work, New York</a>
                                        </h2>
                                    </div>
                                    <div class="post-entry-1">
                                        <a href="single-post.html">
                                            <img src="assets/img/post-landscape-5.jpg" alt="" class="img-fluid" />
                                        </a>
                                        <div class="post-meta">
                                            <span class="date">Food</span> 
                                            <span class="mx-1">&bullet;</span> 
                                            <span>Jul 17th '22</span>
                                        </div>
                                        <h2>
                                            <a href="single-post.html">
                                                How to Avoid Distraction and Stay Focused During Video Calls?
                                            </a>
                                        </h2>
                                    </div>
                                    <div class="post-entry-1">
                                        <a href="single-post.html"><img src="assets/img/post-landscape-7.jpg" alt="" class="img-fluid" /></a>
                                        <div class="post-meta"><span class="date">Design</span> <span class="mx-1">&bullet;</span> <span>Mar 15th '22</span></div>
                                        <h2><a href="single-post.html">Why Craigslist Tampa Is One of The Most Interesting Places On the Web?</a></h2>
                                    </div>
                                </div>
                                
                                <div class="col-lg-4">
                                    <div class="trending">
                                        <h3>Trending</h3>
                                        <ul class="trending-post">
                                            {trendingData && trendingData.length > 0 ? trendingData.map((trend, length) => (
                                                <>
                                                    <li>
                                                        <a href="single-post.html">
                                                            <span class="number">{length}</span>
                                                            <h3>{trend.eventName}</h3>
                                                            <span class="author">{trend.location}</span>
                                                        </a>
                                                    </li>
                                                </>
                                            )) : null}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
