import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        {/* <p className='footer-subscription-heading'>
          Join the newsletter and know what's happening in Ararat
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p> */}
        {/* <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div> */}
      </section>
     
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              VISIT ARARAT
            </Link>
          </div>
          <small class='website-rights'>ARARAT © 2022</small>
          <div class='social-icons'>
            <a href="https://www.facebook.com/AraratRuralCityCouncil/"
              target='_blank'
              rel="noreferrer"
              class='social-icon-link facebook'
              aria-label='Facebook'>
              <i class='fab fa-facebook-f' />
            </a>
            <a href="https://www.instagram.com/araratruralcitycouncil/"
              class='social-icon-link instagram'
              target='_blank'
              rel="noreferrer"
              aria-label='Instagram'>
              <i class='fab fa-instagram' />
            </a>
            <a href="https://twitter.com/AraratCouncil"
              class='social-icon-link twitter'
              target='_blank'
              rel="noreferrer"
              aria-label='Twitter'>
              <i class='fab fa-twitter' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;