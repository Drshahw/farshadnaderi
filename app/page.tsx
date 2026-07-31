import Image from "next/image";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { HiArrowRight, HiArrowUpRight } from "react-icons/hi2";

const corporateSite = "https://radman-website.vercel.app";

const organizations = [
  { name: "Nestlé", src: "/logos/nestle.svg", width: 148, height: 44 },
  { name: "Shell", src: "/logos/shell.svg", width: 140, height: 44 },
  { name: "Unilever", src: "/logos/unilever.svg", width: 148, height: 44 },
  { name: "Bayer", src: "/logos/bayer.svg", width: 64, height: 64 },
  { name: "Sanofi", src: "/logos/sanofi.svg", width: 148, height: 44 },
  { name: "Novo Nordisk", src: "/logos/novo-nordisk.svg", width: 148, height: 64 },
  { name: "JTI", src: "/logos/jti.svg", width: 96, height: 64 },
  { name: "BAT", src: "/logos/bat.svg", width: 148, height: 54 },
];

const socialLinks = [
  {
    label: "YouTube",
    href: "https://youtube.com/@dr.farshadnaderi",
    icon: FaYoutube,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/farshadnaderi",
    icon: FaLinkedinIn,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/farshadnaderi",
    icon: FaInstagram,
  },
  {
    label: "X",
    href: "https://x.com/farshadnaderi_",
    icon: FaXTwitter,
  },
];

export default function Home() {
  return (
    <>
      <header className="siteHeader">
        <div className="siteContainer headerInner">
          <a
            className="brandLockup"
            href={corporateSite}
            aria-label="Radman Consulting Group home"
          >
            <Image src="/brand-icon.png" alt="" width={44} height={44} priority />
            <span>Radman Consulting Group</span>
          </a>

          <nav className="desktopNav" aria-label="Primary navigation">
            <a href={`${corporateSite}/services`}>Services</a>
            <a
              href={`${corporateSite}/services/business-os-technology-operations-implementation`}
            >
              Business OS
            </a>
            <a href={`${corporateSite}/insights`}>Insights</a>
            <a href={`${corporateSite}/about`}>About</a>
            <a href={`${corporateSite}/contact`}>Contact</a>
          </nav>

          <a className="headerReturn" href={corporateSite}>
            Back to Radman <HiArrowRight aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" aria-labelledby="profile-title">
          <div className="heroCopy">
            <div className="heroCopyInner">
              <p className="eyebrow">Leadership</p>
              <h1 id="profile-title">Farshad Naderi</h1>
              <p className="role">
                Founder &amp; Managing Director
                <span>Radman Consulting Group</span>
              </p>
              <p className="heroStatement">
                Strategic leadership shaped by business transformation,
                organizational systems, and applied AI.
              </p>
              <a className="profileLink" href="#profile">
                View profile <HiArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="heroVisual">
            <div className="portraitNavyPanel" aria-hidden="true" />
            <div className="portraitFrame">
              <Image
                src="/images/farshad-naderi.jpg"
                alt="Portrait of Farshad Naderi"
                fill
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="portrait"
              />
            </div>
          </div>
        </section>

        <section className="profileSection" id="profile" aria-labelledby="profile-heading">
          <div className="contentContainer profileGrid">
            <div>
              <p className="eyebrow">Executive profile</p>
              <h2 id="profile-heading">Strategy, systems, and technology.</h2>
            </div>
            <div className="profileBody">
              <p>
                Farshad Naderi is the Founder and Managing Director of Radman
                Consulting Group. His capabilities span AI strategy and business
                integration, AI-native operating models, multi-model and agentic
                workflows, business transformation, organizational and human
                capital systems, and executive leadership.
              </p>
              <p>
                He combines strategic thinking with hands-on execution and
                venture-building experience, translating complex ideas into
                workable structures and accountable action. He holds a Doctorate
                in Business Administration from the University of Bordeaux,
                France, and an MBA from Royal Roads University, Canada.
              </p>
            </div>
          </div>
        </section>

        <section className="organizationsSection" aria-labelledby="organizations-heading">
          <div className="contentContainer">
            <div className="sectionIntro">
              <div>
                <p className="eyebrow eyebrowLight">Selected experience</p>
                <h2 id="organizations-heading">Organizations supported.</h2>
              </div>
              <p>
                Selected organizations supported through consulting and advisory
                engagements.
              </p>
            </div>

            <div className="logoGrid">
              {organizations.map((organization) => (
                <div className="logoCell" key={organization.name}>
                  <Image
                    src={organization.src}
                    alt={`${organization.name} logo`}
                    width={organization.width}
                    height={organization.height}
                    className="organizationLogo"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="connectSection" id="connect" aria-labelledby="connect-heading">
          <div className="contentContainer connectGrid">
            <div>
              <p className="eyebrow">Connect &amp; follow</p>
              <h2 id="connect-heading">Ideas, perspective, and professional updates.</h2>
            </div>

            <div className="socialGrid" aria-label="Social profiles">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer">
                  <span className="socialIcon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span>{label}</span>
                  <HiArrowUpRight className="socialArrow" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="contactCta" aria-labelledby="contact-heading">
          <div className="contentContainer contactCtaInner">
            <div>
              <p className="eyebrow eyebrowLight">A clear first step</p>
              <h2 id="contact-heading">Continue the conversation with Radman.</h2>
              <p>
                Use the secure inquiry form to share the context and request a
                conversation.
              </p>
            </div>
            <a className="primaryButton" href={`${corporateSite}/contact#secure-inquiry`}>
              Send a secure inquiry <HiArrowRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="siteFooter">
        <div className="contentContainer footerGrid">
          <div className="footerBrand">
            <a className="brandLockup footerBrandLockup" href={corporateSite}>
              <Image src="/brand-icon.png" alt="" width={44} height={44} />
              <span>Radman Consulting Group</span>
            </a>
            <p>
              Local execution, operational systems, and senior advisory for UAE
              businesses.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="footerLabel">Explore</p>
            <a href={`${corporateSite}/services`}>All Services</a>
            <a href={`${corporateSite}/insights`}>Insights</a>
            <a href={`${corporateSite}/about`}>About</a>
            <a href={`${corporateSite}/contact`}>Contact</a>
          </nav>

          <div>
            <p className="footerLabel">Start a conversation</p>
            <address>
              Al Asmawi Building, Sheikh Zayed Rd, Umm Al Sheif, Dubai
            </address>
            <a className="footerInquiry" href={`${corporateSite}/contact#secure-inquiry`}>
              Send a secure inquiry
            </a>
            <p className="privacyNote">
              Request a callback through the form without publishing contact
              details.
            </p>
          </div>
        </div>

        <div className="footerBottom">
          <div className="contentContainer footerBottomInner">
            <span>© {new Date().getFullYear()} Radman Consulting Group</span>
            <span>Farshad Naderi · Founder &amp; Managing Director</span>
          </div>
        </div>
      </footer>
    </>
  );
}
