import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { MotionReveal } from "../components/motion-reveal";
import { MobileNav } from "../components/mobile-nav";

const projects = [
  {
    category: "ANALYTICS / DASHBOARD",
    title: "Business Analytics Dashboard",
    image: "/projects/business-analytics-dashboard.png",
    description:
      "An interactive business analytics dashboard designed to present key metrics, trends, and business insights through a clear, organized interface.",
    url: "https://business-analytics-dashboard-phi.vercel.app/dashboard",
  },
  {
    category: "E-COMMERCE / STOREFRONT",
    title: "CommerceHub E-commerce",
    image: "/projects/e-commerce.png",
    description:
      "A responsive e-commerce experience focused on product discovery, product details, and a polished shopping interface.",
    url: "https://commercehub-ecommerce.vercel.app/",
  },
  {
    category: "TRAVEL / STAY",
    title: "Travel & Stay Booking",
    image: "/projects/travel-booking.png",
    description:
      "A responsive travel and hotel discovery experience for exploring destinations, comparing stays, and navigating a demo booking flow.",
    url: "https://travel-booking-platform-chi.vercel.app/",
  },
  {
    category: "CAFE / HOSPITALITY",
    title: "Café Website",
    image: "/projects/cafe-website.png",
    description:
      "A welcoming café website showcasing its menu, visual identity, and contact information in a clean, responsive layout.",
    url: "https://cafe-website-pi-ten.vercel.app/",
  },
];

const services = [
  ["01", "Web design & development", "Responsive business sites and landing pages with a clear route from first impression to action."],
  ["02", "Web apps & dashboards", "Interfaces that make a process easier to see, manage, and improve."],
  ["03", "APIs & custom solutions", "Careful integrations and tailored tools where an off-the-shelf answer is not enough."],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Glacier InfoTech home">
            <Image src="/logo_round.png" alt="Glacier InfoTech" width={54} height={54} priority />
          </a>
          <MobileNav />
          <nav className="primary-nav" aria-label="Primary navigation">
            <a href="#work"><span>01</span> Work</a>
            <a href="#services"><span>02</span> Services</a>
            <a href="#process"><span>03</span> Process</a>
            <a href="#contact"><span>04</span> Contact</a>
            <a className="nav-cta" href="#contact">Start a conversation <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero section">
          <div className="container hero-grid">
            <MotionReveal className="hero-copy">
              <p className="eyebrow"><span>00</span> Glacier InfoTech · Web & digital products</p>
              <h1>Digital work that gives your business room to move.</h1>
              <p className="hero-lede">We create clear websites, useful web applications, and practical digital products for businesses that are ready to work smarter online.</p>
              <div className="actions">
                <a className="button button-primary" href="#work">Explore our work <ArrowUpRight size={16} /></a>
                <a className="button button-secondary" href="#contact">Discuss a project <ArrowUpRight size={16} /></a>
              </div>
            </MotionReveal>
            <MotionReveal className="hero-mark" delay={0.12} aria-label="Glacier InfoTech logo mark">
              <div className="mark-grid" />
              <Image src="/logo_round.png" alt="" width={250} height={250} />
              <span>Build clearly.<br />Operate simply.</span>
            </MotionReveal>
          </div>
          <MotionReveal className="container facts">
            <div><strong>01</strong><span>Websites & landing pages</span></div>
            <div><strong>02</strong><span>Web apps & dashboards</span></div>
            <div><strong>03</strong><span>API integrations</span></div>
            <div><strong>04</strong><span>Custom digital products</span></div>
          </MotionReveal>
        </section>

        <section id="work" className="section">
          <div className="container">
            <SectionHeading index="01" label="Selected work" title="Turning Ideas Into Digital Solutions" intro="Our portfolio is a working set of focused demos. Each one shows how we approach structure, clarity, and responsive detail." />
            <div className="project-grid">
              {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
            </div>
          </div>
        </section>

        <section id="services" className="section section-tint">
          <div className="container">
            <SectionHeading index="02" label="What we do" title="Focused expertise. Thoughtful execution." intro="We stay close to the work from the first structure to the final handoff, adapting the build to the way your business actually operates." />
            <div className="service-list">
              {services.map(([number, title, description]) => (
                <MotionReveal className="service-item" key={title}>
                  <strong>{number}</strong><div><h3>{title}</h3><p>{description}</p></div><ArrowUpRight size={22} />
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section">
          <div className="container">
            <SectionHeading index="03" label="How we work" title="A straightforward working agreement." />
            <div className="process-grid">
              <MotionReveal className="principles">
                {["Start with the real problem, not a preset package.", "Make scope, ownership, and next steps visible.", "Build in small, reviewable increments.", "Keep the interface calm and the code maintainable.", "Hand over something your team can run with."].map((item, index) => <div key={item}><b>0{index + 1}</b><p>{item}</p></div>)}
              </MotionReveal>
              <MotionReveal className="fit-table" delay={0.1}>
                <div><h3>Good fit</h3><p>You have a clear business need and want a thoughtful digital partner to shape the solution with you.</p></div>
                <div><h3>Not a fit</h3><p>You need a large vendor team, an unbounded brief, or a promise of instant results without a working process.</p></div>
              </MotionReveal>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div className="section-heading">
              <p className="eyebrow"><span>04</span> Contact</p><h2>Have a useful problem to solve?</h2>
              <p>Send a short outline of what you are trying to improve. We will reply with the clearest next step we can.</p>
              <a className="button button-primary" href="mailto:glacierinfotech.team@gmail.com">Email the team <ArrowUpRight size={16} /></a>
            </div>
            <dl className="contact-details">
              <div><dt>Email</dt><dd><a href="mailto:glacierinfotech.team@gmail.com">glacierinfotech.team@gmail.com</a></dd></div>
              <div><dt>Social</dt><dd><a href="https://www.linkedin.com/in/glacier-infotech-47799b444" target="_blank" rel="noopener noreferrer">LinkedIn profile ↗</a></dd></div>
              <div><dt>Working with</dt><dd>Businesses, founders, and teams who value clear digital work.</dd></div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div><a className="brand footer-brand" href="#top"><Image src="/logo_round.png" alt="Glacier InfoTech" width={52} height={52} /></a><p>Web development and digital products for businesses moving forward.</p></div>
          <div className="footer-column"><p className="footer-label">Navigate</p><a href="#work">01 / Work</a><a href="#services">02 / Services</a><a href="#process">03 / Process</a><a href="#contact">04 / Contact</a></div>
          <div className="footer-column"><p className="footer-label">Reach us</p><a href="mailto:glacierinfotech.team@gmail.com">Email the team ↗</a><a href="https://www.linkedin.com/in/glacier-infotech-47799b444" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div>
        </div>
        <div className="container footer-meta"><span>GLACIER INFOTECH / DIGITAL WORK</span><span>© 2026 Glacier InfoTech</span></div>
      </footer>
    </>
  );
}

function SectionHeading({ index, label, title, intro }: { index: string; label: string; title: string; intro?: string }) {
  return <div className="section-heading"><p className="eyebrow"><span>{index}</span> {label}</p><h2>{title}</h2>{intro && <p>{intro}</p>}</div>;
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return <MotionReveal className="project-card" delay={index * 0.06}>
    <a className="project-image" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live demo`}>
      <Image src={project.image} alt={`${project.title} project screenshot`} fill sizes="(max-width: 760px) 100vw, 50vw" />
      <span className="image-category">{project.category}</span><span className="image-arrow"><ArrowUpRight size={21} /></span>
    </a>
    <div className="project-body">
      <div className="project-meta"><span className="status">Live demo</span><span>{String(index + 1).padStart(2, "0")} / 04</span></div>
      <h3>{project.title}</h3><p>{project.description}</p>
      <div className="project-links"><a className="arrow-link" href={project.url} target="_blank" rel="noopener noreferrer">Live Demo <ArrowUpRight size={15} /></a><a className="arrow-link muted-link" href="#contact">Discuss a similar build <ArrowRight size={15} /></a></div>
    </div>
  </MotionReveal>;
}
