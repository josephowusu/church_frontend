import React from 'react';
import HeroSlider from '../components/HeroSlider';
import { postData, trendingData } from '../modules/dummyData';
import image1 from "./../images/backgroundImage2.jpeg"
import logo from "./../images/logo.jpeg"
import pastor from "./../images/pastor.jpeg"

const PostComponent = ({ post }) => (
    <div className="post-entry-1">
        <a href="/">
            <img src={logo} alt="" className="img-fluid" />
        </a>
        <div className="post-meta">
            <span className="date">{post.category}</span>
            <span className="mx-1">&bullet;</span>
            <span>{post.date}</span>
        </div>
        <h2>
            <a href="/">{post.title}</a>
        </h2>
    </div>
)

const PostList = ({ postData }) => {
    const pairs = [];
    for (let i = 0; i < postData.length; i += 2) {
        pairs.push(postData.slice(i, i + 2))
    }

    return (
        <>
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
        </>
    )
}

const Home = () => {
    return (
        <>
            <HeroSlider />
            <section id="posts" className="posts">
                <div className="container" data-aos="fade-up">
                    <div className="row g-5">
                        <div className="col-lg-4">
                            <div className="post-entry-1 lg">
                                <a href="/">
                                    <img src={pastor} alt="" className="img-fluid" style={{height: 400, width: '100%'}} />
                                </a>
                                <div className="post-meta">
                                    <span className="date">About Us</span> 
                                    <span className="mx-1">&bullet;</span> 
                                    <span>Jul 5th '22</span>
                                </div>
                                <h2><a href="/">The Apostles Continuation Church International (ACCI)</a></h2>
                                <p className="mb-4 d-block">The Apostles Continuation Church International (ACCI) is a vibrant and dynamic community of believers dedicated to spreading the love and teachings of Jesus Christ, ACCI has grown from a small gathering of faithful individuals to a flourishing congregation with a mission to impact lives and transform communities</p>
                                <div className="d-flex align-items-center author">
                                    <div className="photo">
                                        <img src={pastor} alt="" className="img-fluid" />
                                    </div>
                                    <div className="name">
                                        <h3 className="m-0 p-0">Apostle Clement Brakatu</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="row g-5">
                                {/* <div className="col-lg-4 border-start custom-border">
                                    <div className="post-entry-1">
                                        <a href="/">
                                            <img src="assets/img/post-landscape-2.jpg" alt="" className="img-fluid" />
                                        </a>
                                        <div className="post-meta">
                                            <span className="date">Sport</span> 
                                            <span className="mx-1">&bullet;</span> 
                                            <span>Jul 5th '22</span>
                                        </div>
                                        <h2>
                                            <a href="/">Let{'’'}s Get Back to Work, New York</a>
                                        </h2>
                                    </div>
                                    <div className="post-entry-1">
                                        <a href="/">
                                            <img src="assets/img/post-landscape-5.jpg" alt="" className="img-fluid" />
                                        </a>
                                        <div className="post-meta">
                                            <span className="date">Food</span> 
                                            <span className="mx-1">&bullet;</span> 
                                            <span>Jul 17th '22</span>
                                        </div>
                                        <h2>
                                            <a href="/">
                                                How to Avoid Distraction and Stay Focused During Video Calls?
                                            </a>
                                        </h2>
                                    </div>
                                    <div className="post-entry-1">
                                        <a href="/"><img src="assets/img/post-landscape-7.jpg" alt="" className="img-fluid" /></a>
                                        <div className="post-meta"><span className="date">Design</span> <span className="mx-1">&bullet;</span> <span>Mar 15th '22</span></div>
                                        <h2><a href="/">Why Craigslist Tampa Is One of The Most Interesting Places On the Web?</a></h2>
                                    </div>
                                </div>
                                <div className="col-lg-4 border-start custom-border">
                                    <div className="post-entry-1">
                                        <a href="/">
                                            <img src="assets/img/post-landscape-2.jpg" alt="" className="img-fluid" />
                                        </a>
                                        <div className="post-meta">
                                            <span className="date">Sport</span> 
                                            <span className="mx-1">&bullet;</span> 
                                            <span>Jul 5th '22</span>
                                        </div>
                                        <h2>
                                            <a href="/">Let{'’'}s Get Back to Work, New York</a>
                                        </h2>
                                    </div>
                                    <div className="post-entry-1">
                                        <a href="/">
                                            <img src="assets/img/post-landscape-5.jpg" alt="" className="img-fluid" />
                                        </a>
                                        <div className="post-meta">
                                            <span className="date">Food</span> 
                                            <span className="mx-1">&bullet;</span> 
                                            <span>Jul 17th '22</span>
                                        </div>
                                        <h2>
                                            <a href="/">
                                                How to Avoid Distraction and Stay Focused During Video Calls?
                                            </a>
                                        </h2>
                                    </div>
                                    <div className="post-entry-1">
                                        <a href="/"><img src="assets/img/post-landscape-7.jpg" alt="" className="img-fluid" /></a>
                                        <div className="post-meta"><span className="date">Design</span> <span className="mx-1">&bullet;</span> <span>Mar 15th '22</span></div>
                                        <h2><a href="/">Why Craigslist Tampa Is One of The Most Interesting Places On the Web?</a></h2>
                                    </div>
                                </div> */}
                                <PostList postData={postData} />
                                {/* <div className="col-lg-4">
                                    <div className="trending">
                                        <h3>Trending</h3>
                                        <ul className="trending-post">
                                            {trendingData && trendingData.length > 0 ? trendingData.map((trend, length) => (
                                                <>
                                                    <li>
                                                        <a href="/">
                                                            <span className="number">{length}</span>
                                                            <h3>{trend.eventName}</h3>
                                                            <span className="author">{trend.location}</span>
                                                        </a>
                                                    </li>
                                                </>
                                            )) : null}
                                        </ul>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
