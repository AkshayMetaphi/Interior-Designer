import React from "react";
import { Check, Clock, Award, MessageCircle, Smile, Handshake, Lightbulb, Users, Trophy } from "lucide-react";
import HeroSlider from "../components/HeroSlider";
import sanjivImg from "../assets/about/our_team/SanjivM.jpg";
import kavashImg from "../assets/about/our_team/KavashM.jpg";
import { Link } from "react-router-dom";
import heroImg from "../assets/about/hero_slider/_PIX5211.jpg";
import image1 from "../assets/home/hero_slider/DSC08465.jpg";
import image2 from "../assets/home/hero_slider/DSC08722.jpg";
import image3 from "../assets/home/hero_slider/DSC09255.jpg";
import image4 from "../assets/home/hero_slider/DSC09429.jpg";
import image5 from "../assets/home/hero_slider/_PIX4683.jpg"
const About = () => {
  const heroSlides = [
    {
      image: heroImg,
      alt: "Professional Office Interior",
    },
  ];

  return (
    <div className="page-wrapper">
      <HeroSlider
        slides={heroSlides}
        staticTitle="Calm Confidence in Every Space We Create"
        staticSubtitle="15+ Years of Trivie Interrior Excellence Across Mumbai"
        staticDescription="Experience the unique advantage of a leadership team that blends years of industry wisdom with cutting-edge project management. Where traditional craftsmanship meets modern efficiency."
        staticCtaText="View Our Portfolio"
        staticCtaLink="/portfolio"
      />

      {/* Section 1: Our Story */}
      <section className="section-padding " style={{ background: "#fff"
          //  ,border: "1px solid #e0e0e0"
           }}>
        <div className="container">
          <div
            className="grid-2-col"
            style={{ alignItems: "center", gap: "4rem" }}
          >
            <div className="about-content">
              <span className="subheading">Where Legacy Meets Innovation</span>
              <h2 className="heading-lg">
                The Power of Two Generations, One Vision
              </h2>
              <p
                style={{
                  color: "var(--color-text-light)",
                  lineHeight: "1.8",
                  marginBottom: "1.5rem",
                  marginTop: "1.5rem",
                }}
              >
                At Trivie Interriors, we have built our reputation on a unique
                foundation: the powerful combination of deep industry roots and
                modern operational excellence.
              </p>
              <p
                style={{
                  color: "var(--color-text-light)",
                  lineHeight: "1.8",
                  marginBottom: "2rem",
                }}
              >
                Managing Director Sanjiv C. Mehra brings 15 years of
                construction expertise, while Director Kavash Mehra translates
                this legacy into streamlined, transparent processes through
                modern project management systems.
              </p>
              <Link to="/process" className="btn btn-global">
                Learn About Our Process
              </Link>
            </div>

            <div className="team-grid">
              <div className="team-member">
                <img
                  src={sanjivImg}
                  alt="Sanjiv C. Mehra"
                  style={{
                    width: "100%",
                    borderRadius: "var(--radius-md)",
                    marginBottom: "1rem",
                    height: "300px",
                    objectFit: "cover",
                  }}
                  loading="lazy"
                />
                <h4 style={{ marginBottom: "0.25rem" }}>Sanjiv C. Mehra</h4>
                <p style={{ color: "var(--color-accent)", fontSize: "0.9rem" }}>
                  Managing Director
                </p>
              </div>
              <div className="team-member">
                <img
                  src={kavashImg}
                  alt="Kavash Mehra"
                  style={{
                    width: "100%",
                    borderRadius: "var(--radius-md)",
                    marginBottom: "1rem",
                    height: "300px",
                    objectFit: "cover",
                  }}
                  loading="lazy"
                />
                <h4 style={{ marginBottom: "0.25rem" }}>Kavash Mehra</h4>
                <p style={{ color: "var(--color-accent)", fontSize: "0.9rem" }}>
                  Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* addition adding */}
<div

  style={{
    textAlign: "center",
    padding: "1rem 1rem",
    margin: "0",
    background: "#f8f8f8"
  }}
>
  <h2
    className="heading-lg"
    style={{
      // borderBottom: "3px solid #d4af37",
      display: "inline-block",
      paddingBottom: "0.5rem",
      margin: "0 0 1rem 0",
      letterSpacing: "1px",
    }}
  >
    Our Mission
  </h2>

  <p
    style={{
      maxWidth: "700px",
      margin: "0 auto",
      color: "var(--color-text-light)",
      lineHeight: "1.8",
      fontSize: "1.05rem",
    }}
  >
    Our mission is to build more than interiors – we build success stories. By committing to our promises, embracing challenges, and cooperating as one dedicated team.
  </p>
</div>

 <style>
{`
  .core-values-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .cv-item-1 {
    padding: 2rem 4rem 2.5rem 1rem;
    border-right: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
  }
  .cv-item-2 {
    padding: 2rem 1rem 2.5rem 4rem;
    border-bottom: 1px solid #e0e0e0;
  }
  .cv-item-3 {
    padding: 2.5rem 4rem 1rem 1rem;
    border-right: 1px solid #e0e0e0;
  }
  .cv-item-4 {
    padding: 2.5rem 1rem 1rem 4rem;
  }
  @media (max-width: 768px) {
    .core-values-grid {
      grid-template-columns: 1fr;
    }
    .cv-item-1, .cv-item-3 {
      border-right: none;
    }
    .cv-item-3 {
      border-bottom: 1px solid #e0e0e0;
      padding: 2rem 1rem;
    }
    .cv-item-1, .cv-item-2, .cv-item-4 {
      padding: 2rem 1rem;
    }
    .cv-item-4 {
      border-bottom: none;
    }
  }
`}
</style>
<div style={{ background: "#f8f8f8", padding: "3rem 1rem 6rem 1rem" }}>
  <div className="container">
    <div style={{ textAlign: "center" }}>
      <h2
        className="heading-lg"
        style={{
          display: "inline-block",
          paddingBottom: "0.5rem",
          margin: "0 0 1rem 0",
          letterSpacing: "1px",
        }}
      >
        Our Core Values
      </h2>
    </div>

    <div className="core-values-grid">
      <div className="cv-item-1">
        <Trophy strokeWidth={1} size={32} style={{ color: "var(--color-accent)", marginBottom: "1.5rem" }} />
        <h4 style={{ fontSize: "2rem", marginBottom: "1rem", fontFamily: "var(--font-heading)", fontWeight: "400" }}>Achievement</h4>
        <p style={{ color: "var(--color-text-light)", fontSize: "0.95rem", lineHeight: "1.8" }}>
          Making the journey of each stakeholder successful and fulfilling by achieving desired results.
        </p>
      </div>
      <div className="cv-item-2">
        <Lightbulb strokeWidth={1} size={32} style={{ color: "var(--color-accent)", marginBottom: "1.5rem" }} />
        <h4 style={{ fontSize: "2rem", marginBottom: "1rem", fontFamily: "var(--font-heading)", fontWeight: "400" }}>Challenge</h4>
        <p style={{ color: "var(--color-text-light)", fontSize: "0.95rem", lineHeight: "1.8" }}>
          Welcoming challenges as opportunities to innovate and exceed customer expectations.
        </p>
      </div>
      <div className="cv-item-3">
        <Users strokeWidth={1} size={32} style={{ color: "var(--color-accent)", marginBottom: "1.5rem" }} />
        <h4 style={{ fontSize: "2rem", marginBottom: "1rem", fontFamily: "var(--font-heading)", fontWeight: "400" }}>Cooperation</h4>
        <p style={{ color: "var(--color-text-light)", fontSize: "0.95rem", lineHeight: "1.8" }}>
          Working as one integrated team — clients, designers, site teams, and partners — aligned towards a shared vision and successful project delivery.
        </p>
      </div>
      <div className="cv-item-4">
        <Handshake strokeWidth={1} size={32} style={{ color: "var(--color-accent)", marginBottom: "1.5rem" }} />
        <h4 style={{ fontSize: "2rem", marginBottom: "1rem", fontFamily: "var(--font-heading)", fontWeight: "400" }}>Commitment</h4>
        <p style={{ color: "var(--color-text-light)", fontSize: "0.95rem", lineHeight: "1.8" }}>
          Committing to every promise — on quality, timelines, costs, and ethics — towards clients, employees, and partners, without compromise.
        </p>
      </div>      
    </div>
  </div>
</div>





      {/* Section 2: Our Expertise */}
      <section className="section-padding" style={{background: "#fff"  }}>
        <div className="container">
          <div
            className="grid-2-col"
            style={{ alignItems: "center", gap: "4rem" }}
          >
            <div className="about-image order-2-mobile about-image-grid">
              <img
                src={image1}
                alt="Residential"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "var(--radius-sm)",
                }}
                loading="lazy"
              />
              <img
                src={image2}
                alt="Corporate"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "var(--radius-sm)",
                }}
                loading="lazy"
              />
              <img
                src={image3}
                alt="Hospitality"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "var(--radius-sm)",
                }}
                loading="lazy"
              />
              <img
                src={image4}
                alt="Data Centre"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "var(--radius-sm)",
                }}
                loading="lazy"
              />
            </div>
            <div className="about-content">
              <span className="subheading">
                Precision-Tailored Solutions for Every Sector
              </span>
              <h2 className="heading-lg">
                From Corporate Offices to Lift Lobbies One Standard of
                Excellence
              </h2>
              <p
                style={{
                  color: "var(--color-text-light)",
                  lineHeight: "1.8",
                  marginBottom: "2rem",
                  marginTop: "1.5rem",
                }}
              >
                We bring the same unwavering commitment to excellence whether
                creating luxury residences, productive workplaces, welcoming
                hospitality spaces, or mission-critical data centres. Each
                sector receives our signature attention to detail and systematic
                approach.
              </p>
              <Link to="/services" className="btn btn-global">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
     

      {/* Section 3: Why Choose Us */}
      <section className="section-padding" style={{background: "#f8f8f8" }}>
        <div className="container">
          <div
            className="grid-2-col"
            style={{ alignItems: "center", gap: "4rem" }}
          >
            <div className="about-content">
              <span className="subheading">
                The Trivie Difference: Experience You Can Trust, Processes You
                Can Rely On
              </span>
              <h2 className="heading-lg">
                Why 250+ Clients Have Chosen Us for Their Transformations
              </h2>
              <p
                style={{
                  color: "var(--color-text-light)",
                  lineHeight: "1.8",
                  marginBottom: "2rem",
                  marginTop: "1.5rem",
                }}
              >
                While others focus on just design or just execution, we master
                both. Our integrated approach means you get stunning spaces
                delivered on time, within budget, and without the stress
                typically associated with interior projects. This father-son
                synergy isn't just our story - it's your competitive advantage.
              </p>
            </div>
            <div className="about-image">
              <div className="features-grid">
                <div
                  className="feature-card"
                  style={{
                    padding: "2rem",
                    background: "var(--color-surface-100)",
                    borderRadius: "var(--radius-md)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      color: "var(--color-accent)",
                      marginBottom: "1rem",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Clock size={40} />
                  </div>
                  <h4 style={{ marginBottom: "0.5rem" }}>On-Time Delivery</h4>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--color-text-light)",
                    }}
                  >
                    Respecting your timeline is our priority.
                  </p>
                </div>
                <div className="feature-card">
                  <div
                    style={{
                      color: "var(--color-accent)",
                      marginBottom: "1rem",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Award size={40} />
                  </div>
                  <h4 style={{ marginBottom: "0.5rem" }}>Unmatched Quality</h4>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--color-text-light)",
                    }}
                  >
                    Excellence in every detail.
                  </p>
                </div>
                <div className="feature-card">
                  <div
                    style={{
                      color: "var(--color-accent)",
                      marginBottom: "1rem",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <MessageCircle size={40} />
                  </div>
                  <h4 style={{ marginBottom: "0.5rem" }}>
                    Clear Communication
                  </h4>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--color-text-light)",
                    }}
                  >
                    Transparent updates at every step.
                  </p>
                </div>
                <div className="feature-card">
                  <div
                    style={{
                      color: "var(--color-accent)",
                      marginBottom: "1rem",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Smile size={40} />
                  </div>
                  <h4 style={{ marginBottom: "0.5rem" }}>
                    Client Satisfaction
                  </h4>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--color-text-light)",
                    }}
                  >
                    Your happiness is our success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Meet Our Team */}
      {/* <section className="section-padding" style={{ background: "#f8f8f8" }}>
        <div className="container">
          <div
            className="grid-2-col"
            style={{ alignItems: "center", gap: "4rem" }}
          >
            <div className="about-content">
              <span className="subheading">
                Managing Director Sanjiv C. Mehra brings 15 years of construction expertise
              </span>
              <h2 className="heading-lg">
                Years of Combined Expertise Working For You
              </h2>
              <p
                style={{
                  color: "var(--color-text-light)",
                  lineHeight: "1.8",
                  marginBottom: "2rem",
                  marginTop: "1.5rem",
                }}
              >
                Our leadership team brings together deep industry wisdom and
                modern operational excellence. Sanjiv C. Mehra provides 15+
                years of strategic vision and client relations while Kavash
                Mehra ensures operational excellence through modern project
                management and process innovation.
              </p>
              <a href="/contact" className="btn btn-global">
                Start Your Project With Us
              </a>
            </div>
            <div className="team-grid">
              <div className="team-member">
                <img
                  src={sanjivImg}
                  alt="Sanjiv C. Mehra"
                  style={{
                    width: "100%",
                    borderRadius: "var(--radius-md)",
                    marginBottom: "1rem",
                    height: "300px",
                    objectFit: "cover",
                  }}
                  loading="lazy"
                />
                <h4 style={{ marginBottom: "0.25rem" }}>Sanjiv C. Mehra</h4>
                <p style={{ color: "var(--color-accent)", fontSize: "0.9rem" }}>
                  Managing Director
                </p>
              </div>
              <div className="team-member">
                <img
                  src={kavashImg}
                  alt="Kavash Mehra"
                  style={{
                    width: "100%",
                    borderRadius: "var(--radius-md)",
                    marginBottom: "1rem",
                    height: "300px",
                    objectFit: "cover",
                  }}
                  loading="lazy"
                />
                <h4 style={{ marginBottom: "0.25rem" }}>Kavash Mehra</h4>
                <p style={{ color: "var(--color-accent)", fontSize: "0.9rem" }}>
                  Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Section 5: Call to Action */}
      <section
        className="section-padding"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${image5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <span
              className="subheading"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              Let's Combine Our Legacy with Your Vision
            </span>
            <h2
              className="heading-lg"
              style={{ color: "#fff", marginBottom: "1.5rem" }}
            >
              Ready to Experience the Trivie Difference?
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.9)",
                lineHeight: "1.8",
                marginBottom: "2.5rem",
                fontSize: "1.1rem",
              }}
            >
              Your project deserves the unique advantage of seasoned expertise
              paired with modern efficiency. Whether you are planning a
              corporate fit-out, luxury residence, or specialised interior, we
              are here to deliver exceptional results with complete peace of
              mind.
            </p>
            <Link to="/contact" className="btn-global">
              Start Your Project Today
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: CONFIDING US, Our respectable clients */}
    </div>
  );
};

export default About;
