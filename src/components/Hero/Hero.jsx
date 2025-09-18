import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
    <img src="/profile_img.jpg" alt="profile" />
      <h1>HI, I'm <span> Mohammed Kaif</span></h1>
      <p>
        A passionate web developer and cybersecurity enthusiast.
        I create clean, interactive, and innovative digital experiences that leave an impact.
      </p>

      <div className="hero-action">
        <div
          className="hero-connect"
          onClick={() => {
            window.location.href = "#contact";  // Direct contact page scroll
          }}
        >
          Connect with me
        </div>

        <a
          href="https://drive.google.com/file/d/1Rf0AjUWRUvxZBCc5uDkUxGR--8qFTLMV/view?usp=drive_link"  // 👉 apna resume link yaha daal
          target="_blank"
          rel="noopener noreferrer"
          className="hero-resume"
        >
          My Resume
        </a>
      </div>
    </div>
  )
}

export default Hero
