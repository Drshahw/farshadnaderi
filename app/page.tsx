const capabilities = [
  { number: "01", title: "Business Acquisition", text: "Identify, evaluate, negotiate, and integrate the right UAE business with disciplined due diligence." },
  { number: "02", title: "UAE Market Entry", text: "Turn expansion plans into compliant, operational businesses with local execution and global standards." },
  { number: "03", title: "Business Transformation", text: "Improve operating models, management systems, teams, and performance to create sustainable growth." },
  { number: "04", title: "Human Capital", text: "Build practical HR systems, leadership capability, and organizational structures that support the strategy." }
];

const results = [
  ["20+", "Years leading and transforming businesses"],
  ["30+", "HR policy and compensation projects"],
  ["1,000+", "Days of executive and professional training"],
  ["$8M", "Commercial receivable recovery led across borders"]
];

const companies = ["Nestlé", "Shell", "Unilever", "Bayer", "Sanofi", "Novo Nordisk", "JTI", "BAT"];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Farshad Naderi home">FN<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#results">Results</a>
        </nav>
        <a className="navCta" href="mailto:farshadnaderi@gmail.com">Let&apos;s talk <ArrowIcon /></a>
      </header>

      <section className="hero shell" id="top">
        <div className="heroKicker"><span /> Dubai, United Arab Emirates</div>
        <h1>Building businesses<br />that <em>work.</em></h1>
        <div className="heroBottom">
          <p>I help entrepreneurs and investors acquire, build, transform, and operate businesses in the UAE.</p>
          <a className="circleLink" href="#about" aria-label="Explore profile"><ArrowIcon /></a>
        </div>
        <div className="heroRule" />
      </section>

      <section className="intro shell" id="about">
        <div className="sectionLabel">01 / About</div>
        <div className="introContent">
          <p className="lead">I&apos;m <strong>Farshad Naderi</strong> — a business advisor, operator, and founder with more than two decades of experience turning complex challenges into practical, measurable outcomes.</p>
          <div className="introGrid">
            <p>As Founder and CEO of Radman Consulting Group, I have led business transformation, market-entry, operational improvement, and human-capital projects for local organizations and global companies.</p>
            <p>My approach combines strategic perspective with hands-on execution. I work closely with owners and investors, stay involved in critical decisions, and build systems that keep performing after the engagement ends.</p>
          </div>
          <a className="textLink" href="https://www.linkedin.com/in/farshadnaderi/" target="_blank" rel="noreferrer">View LinkedIn profile <ArrowIcon /></a>
        </div>
      </section>

      <section className="expertise" id="expertise">
        <div className="shell">
          <div className="sectionLabel light">02 / Expertise</div>
          <div className="expertiseHeading">
            <h2>Where strategy meets execution.</h2>
            <p>Focused advisory for investors, founders, and leaders who need clarity, local knowledge, and reliable implementation.</p>
          </div>
          <div className="capabilityList">
            {capabilities.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ArrowIcon />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="results shell" id="results">
        <div className="sectionLabel">03 / Selected results</div>
        <div className="resultsGrid">
          {results.map(([value, label]) => (
            <article key={value}>
              <strong>{value}</strong>
              <p>{label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="companies shell">
        <p>Organizations supported through Radman engagements</p>
        <div>{companies.map((company) => <span key={company}>{company}</span>)}</div>
      </section>

      <section className="focus shell">
        <div className="focusCard">
          <div className="sectionLabel light">Current focus</div>
          <h2>Entering the UAE should feel ambitious — not uncertain.</h2>
          <p>Today, my primary focus is helping investors and entrepreneurs acquire established businesses and operate UAE ventures with confidence, transparency, and strong local execution.</p>
          <a href="https://radmangroup.com" target="_blank" rel="noreferrer">Explore Radman Consulting Group <ArrowIcon /></a>
        </div>
      </section>

      <footer className="footer shell">
        <div>
          <p>Have a business challenge in mind?</p>
          <h2>Let&apos;s make it workable.</h2>
        </div>
        <div className="footerActions">
          <a className="primaryButton" href="mailto:farshadnaderi@gmail.com">Start a conversation <ArrowIcon /></a>
          <a href="tel:+971547011484">+971 54 701 1484</a>
          <a href="mailto:farshadnaderi@gmail.com">farshadnaderi@gmail.com</a>
        </div>
        <div className="footerBottom">
          <span>© {new Date().getFullYear()} Farshad Naderi</span>
          <span>Business Advisor · Operator · Founder</span>
        </div>
      </footer>
    </main>
  );
}
