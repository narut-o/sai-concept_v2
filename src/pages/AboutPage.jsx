import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page">

      {/* ================= HERO ================= */}

      <section className="about-hero">

        <div className="about-hero-left">
          <h1>ABOUT US</h1>

          <p>
            We are committed to delivering premium quality wholesale food
            products with reliability, transparency, and long-term
            partnership mindset.
          </p>

          <a href="https://wa.me/919334183119" className="about-cta">
            Talk To Us
          </a>
        </div>

        <div className="about-hero-right">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900"
            alt="team"
          />
        </div>

      </section>

      {/* ================= STORY ================= */}

      <section className="about-story">

        <h2>
          <span>Transparency, Integrity & Professionalism</span>
        </h2>

        <p>
          These values form the foundation of our business philosophy.
          We believe in long-term partnerships, consistent supply quality,
          and dependable service for every client we work with.
        </p>

      </section>

      {/* ================= VALUES ================= */}

      <section className="about-values">

        <div className="value-card">
          <h3>01</h3>
          <h4>Reliable Supply Chain</h4>
          <p>
            Strong sourcing network ensuring uninterrupted availability.
          </p>
        </div>

        <div className="value-card">
          <h3>02</h3>
          <h4>Quality Assured Products</h4>
          <p>
            Every product meets strict quality benchmarks.
          </p>
        </div>

        <div className="value-card">
          <h3>03</h3>
          <h4>Trusted Brand Partnerships</h4>
          <p>
            Working with top FMCG and food brands.
          </p>
        </div>

        <div className="value-card">
          <h3>04</h3>
          <h4>Future Ready Distribution</h4>
          <p>
            Modern logistics and scalable supply solutions.
          </p>
        </div>

      </section>

      {/* ================= TEAM ================= */}

      <section className="about-team">

        <h2>Meet The Leadership</h2>

        <div className="team-grid">

          <div className="team-card">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500"
              alt="founder"
            />
            <h4>Founder Name</h4>
            <p>
              Driving business growth through strong vendor relationships
              and market understanding.
            </p>
          </div>

          <div className="team-card">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500"
              alt="co founder"
            />
            <h4>Co Founder Name</h4>
            <p>
              Leading operations, logistics and customer partnerships.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}
