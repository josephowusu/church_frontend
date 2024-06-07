import React, { useEffect, useState } from 'react';
import HeroSlider from '../components/HeroSlider';
import { postData, trendingData } from '../modules/dummyData';
import image1 from "./../images/backgroundImage2.jpeg"
import logo from "./../images/logo.jpeg"
import pastor from "./../images/pastor.jpeg"
import { SocketIO, fetchData, fullDate, shortenText } from '../modules/helper';
import MediaComponent from '../components/FileComponent';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const [post, setPost] = useState([])
    const navigate = useNavigate()
    const [organisations, setOrganisations] = useState([])
    const [department, setDepartment] = useState([])
    const [events, setEvents] = useState({})
    const [eventsByChurch, setEventsByChurch] = useState({})
    const [eventsByMember, setEventsByMember] = useState({})

    const fetchOrganisation = () => {
        const sessionData = fetchData('sessionData')
		SocketIO.emit('/fetch-organisation', { sessionID: sessionData ? sessionData.token : null, limit: 10, offset: 0}, (response) => {
			if (response.status === 'success') {
				setOrganisations(response.data)
			}
		})
    }

    const fetchEvent = () => {
        const sessionData = fetchData('sessionData')
		SocketIO.emit('/fetch-event-with-date', { sessionID: sessionData ? sessionData.token : null, limit: 10, offset: 0}, (response) => {
			if (response.status === 'success') {
				setEvents(response.data.byDate)
				setEventsByMember(response.data.byMember)
				setEventsByChurch(response.data.byChurch)
			}
		})
    }

    const fetchDepartment = () => {
        const sessionData = fetchData('sessionData')
		SocketIO.emit('/fetch-department', { sessionID: sessionData ? sessionData.token : null, limit: 10, offset: 0}, (response) => {
			if (response.status === 'success') {
				setDepartment(response.data)
			}
		})
    }

    const goToPost = (postId) => {
        navigate(`/post/${postId}`);
    }

    useEffect(() => {
        fetchOrganisation()
        fetchEvent()
        fetchDepartment()
    }, [])

    return (
        <>
            <HeroSlider />
            <section id="posts" className="posts">
                <div className="container" data-aos="fade-up">
                    <div className="row g-5">
                        <div className="col-lg-3">
                            <div className="post-entry-1 lg">
                                <a href="/">
                                    <img src={pastor} alt="" className="img-fluid" style={{height: 300, width: '100%'}} />
                                </a>
                                <div className="post-meta"> 
                                    <span className="date">About Us</span> 
                                    <span className="mx-1">&bullet;</span> 
                                    <span>Jul 5th '22</span> 
                                </div>
                                <h2><a href="/" style={{fontSize: 25}}>The Apostles Continuation Church International (ACCI)</a></h2>
                                <p className="mb-4 d-block" style={{fontSize: 12}}>The Apostles Continuation Church International (ACCI) is a vibrant and dynamic community of believers dedicated to spreading the love and teachings of Jesus Christ, ACCI has grown from a small gathering of faithful individuals to a flourishing congregation with a mission to impact lives and transform communities</p>
                                <div className="d-flex align-items-center author">
                                    <div className="photo">
                                        <img src={pastor} alt="" style={{height: 50, width: 50}} className="img-fluid" />
                                    </div>
                                    <div className="name">
                                        <h4 className="m-0 p-0">Apostle Clement Brakatu</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row g-5">
                                {organisations && organisations.length > 0 ? organisations.map((organisation, index) => (
                                    <div className={`col-lg-6 ${index % 2 === 1 ? 'border-start custom-border' : ''}`} key={index}>
                                        <div className="post-entry-1">
                                            <a href={organisation.link}><img src={logo} alt="" className="img-fluid" /></a>
                                            <div className="post-meta">
                                                <span>{fullDate(organisation.createdAt)}</span>
                                            </div>
                                            <h2><a href={organisation.link}>{organisation.name}</a></h2>
                                        </div>
                                    </div>
                                )) : 'No organisations added..'}
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="trending">
                                <h3>Department(s)</h3>
                                <ul className="trending-post">
                                    {department && department.length > 0 ? department.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.link}>
                                            <span className="number">{index + 1}</span>
                                            <h3>{item.name}</h3>
                                            <span className="author">{shortenText(item.description, 100)}</span>
                                            </a>
                                        </li>
                                    )) : 'No department submitted..'}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="category-section">
                <div className="container" data-aos="fade-up">
                    <div className="section-header d-flex justify-content-between align-items-center mb-5">
                        <h2>Events</h2>
                        <div>
                            <a href="/" className="more">See All Events</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-9 order-md-2">
                            {/* <div className="d-lg-flex post-entry-2">
                                <a href="single-post.html" className="me-4 thumbnail d-inline-block mb-4 mb-lg-0">
                                    <img src="assets/img/post-landscape-3.jpg" alt="" className="img-fluid" />
                                </a>
                            <div>
                            <div className="post-meta">
                                <span className="date">Business</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span>
                            </div>
                            <h3>
                                <a href="single-post.html">What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas, nobis error deserunt aliquam temporibus sapiente, laudantium dolorum itaque libero eos deleniti?</p>
                            <div className="d-flex align-items-center author">
                                <div className="photo"><img src="assets/img/person-4.jpg" alt="" className="img-fluid" /></div>
                                <div className="name">
                                    <h3 className="m-0 p-0">Wade Warren</h3>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="row">
                        <div className="col-lg-4">
                            {Object.keys(eventsByChurch).map((date, index) => (
                                <div key={index}>
                                    {events[date].map((event, index) => (
                                        <div key={index} className="post-entry-1 border-bottom">
                                            <a href="#" onClick={(e) => {e.preventDefault();goToPost(event.id)}}>
                                                <MediaComponent event={event} />
                                            </a>
                                            <div className="post-meta"><span className="date">Event</span> <span className="mx-1">&bullet;</span> <span>{new Date(event.createdAt).toLocaleDateString()}</span></div>
                                            <h2 className="mb-2"><a href="#" onClick={(e) => {e.preventDefault();goToPost(event.id)}}>{event.title}</a></h2>
                                            <span className="author mb-3 d-block">{event.author}</span>
                                            <p className="mb-4 d-block">{shortenText(event.description, 200)}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-8">
                            {/* <div className="post-entry-1">
                                <a href="single-post.html"><img src="assets/img/post-landscape-7.jpg" alt="" className="img-fluid" /></a>
                                <div className="post-meta"><span className="date">Business</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                <h2 className="mb-2"><a href="single-post.html">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                <p className="mb-4 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus</p>
                            </div> */}
                        </div>
                        </div>
                        </div>
                        <div className="col-md-3">
                            {Object.keys(eventsByMember).map(date => (
                                <div key={date}>
                                    {events[date].map((event, index) => (
                                        <div className="post-entry-1 border-bottom" key={index}>
                                            <div className="post-meta">
                                                <span className="date">Event</span> <span className="mx-1">&bullet;</span> <span>{new Date(event.createdAt).toLocaleDateString()}</span>
                                            </div>
                                            <h2 className="mb-2"><a href="#" onClick={(e) => {e.preventDefault();goToPost(event.id)}}>{event.title}</a></h2>
                                            <span className="author mb-3 d-block">{event.author}</span>
                                            <p>{shortenText(event.description, 200)}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
