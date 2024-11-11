import React from "react";

const AboutUs = () => {
  return (
    <div className="container">
      <h1>About Us</h1>
      
      <section className="mission">
        <h2>Our Mission</h2>
        <p>Our mission is to deliver exceptional service and innovation to our clients worldwide.</p>
      </section>

      <section className="vision">
        <h2>Our Vision</h2>
        <p>We strive to be a global leader in our industry, focusing on quality and sustainability.</p>
      </section>

      <section className="history">
        <h2>Our History</h2>
        <p>Founded in [Year], we have grown into a leading company, thanks to our commitment to excellence and innovation.</p>
      </section>

      <section className="team">
        <h2>Meet the Team</h2>
        <p>Our team is composed of industry experts dedicated to serving our clients with the highest standards.</p>
      </section>

      <section className="values">
        <h2>Our Values</h2>
        <ul>
          <li>Integrity</li>
          <li>Customer Satisfaction</li>
          <li>Innovation</li>
          <li>Collaboration</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
