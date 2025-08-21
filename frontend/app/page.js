export default function HomePage() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to <span>CRUD App</span></h1>
        <p>
          A simple CRUD application built with <strong>Next.js</strong> and{" "}
          <strong>Express</strong>. Manage your users easily with our clean UI.
        </p>
        <a href="/users" className="btn btn-submit">
          Get Started
        </a>
      </section>

      <section className="features">
        <div className="feature-card">
          <h2>🚀 Fast</h2>
          <p>Powered by Next.js for fast rendering and smooth navigation.</p>
        </div>
        <div className="feature-card">
          <h2>🔒 Secure</h2>
          <p>Uses Express & MongoDB backend with proper API handling.</p>
        </div>
        <div className="feature-card">
          <h2>⚡ Simple</h2>
          <p>Clean UI with modern styling and easy-to-use components.</p>
        </div>
      </section>
    </div>
  );
}
