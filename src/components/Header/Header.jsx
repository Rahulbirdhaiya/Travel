import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import './header.css';

const nav__links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  }
];

const Header = () => {
  const [query, setQuery] = useState('');
  const headerRef = useRef(null);

  const handleScroll = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add('sticky__header');
    } else {
      headerRef.current.classList.remove('sticky__header');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', query);
    // Add your search functionality here
  };

  const startVoiceSearch = () => { 
    const recognition = new window.webkitSpeechRecognition(); 
    recognition.lang = 'en-IN'; 
    recognition.start(); 
    
    recognition.onresult = (event) => { 
      const speechResult = event.results[0][0].transcript; 
      setQuery(speechResult); 
      console.log('Voice search result:', speechResult); 
      // You can automatically submit the search form here if desired 
      handleSearch(new Event('submit')); // Uncomment to submit the form automatically }; 
      recognition.onerror = (event) => { 
        console.error('Error occurred in recognition:', event.error); 
        }; 
      };
    };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* =====logo===== */}
            <div className="logo">
              <img src={logo} alt="Travel World Logo" />
            </div>
            {/* =====logo end ===== */}
            {/* =====menu===== */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? 'active__link' : ''
                      }>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* =====search bar===== */}
            <form className="search-form" onSubmit={handleSearch}>
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="button" className="Voice-button" onClick={startVoiceSearch}>
                {/* unicode */}
                <svg id='micElement' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                {/* /Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc./ */}
                <path 
                fillcolor="currentColor"
                d="M192 0C139 0 96 43 96 96l0 160c0 53 43 96 96 96s96-43 96-96l0-160c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-33.6c85.8-11.7 152-85.3 152-174.4l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-40z"/>
                </svg>
              </button>
              <button type="submit" className="search-button">
                <i id='iElement' className="fas fa-search"></i>
              </button>
            </form>
            {/* =====search bar end ===== */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className='btn secondary__btn loginBtn'>
                  <Link to={'/login'}>Login</Link>
                </Button>
                <Button className='btn primary__btn'>
                  <Link to={'/register'}>Register</Link>
                </Button>
              </div>
              <span className="mobile__menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
