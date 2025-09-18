import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>

      <div className="about-sections">
        {/* Left Section */}
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>

        {/* Right Section */}
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m Mohammed Kaif, a curious creator who loves bringing ideas to
              life through code. For me, web development is like painting on a
              digital canvas—where every line of code adds color, depth, and
              meaning to the bigger picture. I enjoy crafting websites that
              don’t just look good but feel smooth, interactive, and secure.
              Cybersecurity is another passion of mine—it’s like solving puzzles,
              protecting stories, and making sure every digital experience stays
              safe.
            </p>
            <p>
              Currently pursuing my B.Tech in Cybersecurity, I’ve had the
              opportunity to gain hands-on industry experience through
              internships at IIIT Hyderabad, Deloitte, and InternPe. These
              experiences gave me the chance to work on real-world projects,
              collaborate with professionals, and refine my skills in web
              development, problem-solving, and cybersecurity practices. My dream
              is to merge creativity with technology—to build digital experiences
              that inspire, connect, and leave a lasting impact. For me, every
              project is not just about writing code—it’s about telling a story
              that people can see, feel, and trust.
            </p>
            <p>"Outside of work, I’m a lifelong learner who enjoys exploring new technologies and creative ideas. My journey is driven by curiosity, growth, and the passion to make an impact."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
