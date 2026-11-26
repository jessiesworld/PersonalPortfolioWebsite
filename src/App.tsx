import { useState } from 'react'

type IconName = 'arrow' | 'asterisk' | 'menu' | 'close'

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),
    asterisk: (
      <>
        <path d="M12 2v20M3.34 7l17.32 10M3.34 17 20.66 7" />
      </>
    ),
    menu: (
      <>
        <path d="M4 8h16M4 16h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

const projects = [
  {
    number: '01',
    title: 'Luma',
    subtitle: 'A calmer way to care for your money',
    tags: ['Product design', 'Fintech', '2024'],
    className: 'visual-luma',
    visual: (
      <div className="luma-window">
        <div className="luma-top"><span /><span /><span /></div>
        <div className="luma-content">
          <p>Good morning, Maya</p>
          <strong>$12,845.20</strong>
          <div className="luma-chart">
            <i /><i /><i /><i /><i /><i /><i /><i />
          </div>
        </div>
      </div>
    ),
  },
  {
    number: '02',
    title: 'Morrow',
    subtitle: 'Objects for thoughtful, everyday rituals',
    tags: ['Brand direction', 'E-commerce', '2024'],
    className: 'visual-morrow',
    visual: (
      <div className="morrow-stage">
        <div className="morrow-type">MORROW</div>
        <div className="morrow-object"><span /></div>
        <p>FORM / FUNCTION / FEELING</p>
      </div>
    ),
  },
  {
    number: '03',
    title: 'Sona',
    subtitle: 'Making complex sound beautifully simple',
    tags: ['Digital product', 'AI tools', '2023'],
    className: 'visual-sona',
    visual: (
      <div className="sona-card">
        <div className="sona-orb" />
        <div className="sona-wave">
          {[22, 43, 30, 62, 84, 48, 68, 35, 55, 27, 44].map((height, i) => (
            <i key={i} style={{ height }} />
          ))}
        </div>
        <span>Now listening</span>
      </div>
    ),
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Maya Chen, home" onClick={closeMenu}>
          MC<span>.</span>
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#journal" onClick={closeMenu}>Journal</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="availability" href="#contact">
          <span /> Available for select projects
        </a>
        <button
          className="menu-button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={23} />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-aurora aurora-one" aria-hidden="true" />
        <div className="hero-aurora aurora-two" aria-hidden="true" />
        <div className="eyebrow"><Icon name="asterisk" size={15} /> Independent designer &amp; creative partner</div>
        <h1>
          I turn complex ideas
          <span>into <em>clear</em>, useful things.</span>
        </h1>
        <div className="hero-sticker" aria-hidden="true">Make it<br />feel alive ✶</div>
        <div className="hero-footer">
          <p>
            I’m Maya, a product designer based in New York. I partner with ambitious
            teams to shape brands and digital experiences that feel inevitable.
          </p>
          <a className="circle-link" href="#work" aria-label="View selected work">
            <Icon name="arrow" size={24} />
          </a>
        </div>
        <div className="hero-stamp" aria-hidden="true">
          <span>IDEAS INTO FORM · IDEAS INTO FORM · </span>
          <b>✦</b>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p>Selected work</p>
          <span>2023 — 2025</span>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className={`project-visual ${project.className}`}>{project.visual}</div>
              <div className="project-copy">
                <span className="project-number">{project.number}</span>
                <div>
                  <h2>{project.title}</h2>
                  <p>{project.subtitle}</p>
                  <div className="tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                <button className="project-arrow" aria-label={`View ${project.title} case study`}>
                  <Icon name="arrow" size={22} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="journal-section" id="journal">
        <div className="section-heading">
          <p>From the journal</p>
          <span>Notes on work &amp; life</span>
        </div>
        <div className="journal-intro">
          <h2>Things I’m<br /><em>thinking about.</em></h2>
          <p>
            Occasional notes on making digital things, finding creative momentum,
            and paying closer attention to the world away from a screen.
          </p>
        </div>
        <div className="journal-list">
          {[
            {
              date: 'May 14, 2025',
              category: 'Process',
              title: 'The generous first draft',
              excerpt: 'Why making space for an imperfect beginning often leads to more thoughtful, original work.',
              mark: '↗',
            },
            {
              date: 'April 02, 2025',
              category: 'Field notes',
              title: 'On collecting references',
              excerpt: 'A personal system for noticing, gathering, and returning to the things that spark an idea.',
              mark: '✳',
            },
            {
              date: 'February 18, 2025',
              category: 'Practice',
              title: 'Clarity is a form of care',
              excerpt: 'The small choices that make products feel more human—and why restraint is rarely simple.',
              mark: '○',
            },
          ].map((post, index) => (
            <article className="journal-post" key={post.title}>
              <div className="post-meta">
                <span>{post.date}</span>
                <span>{post.category}</span>
              </div>
              <div className="post-number">0{index + 1}</div>
              <div className="post-copy">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
              <div className="post-mark" aria-hidden="true">{post.mark}</div>
              <button aria-label={`Read ${post.title}`}><Icon name="arrow" size={22} /></button>
            </article>
          ))}
        </div>
        <a className="text-link" href="#journal">Browse all notes <Icon name="arrow" /></a>
      </section>

      <section className="about-section" id="about">
        <div className="about-label">
          <Icon name="asterisk" size={17} />
          <span>A little about me</span>
        </div>
        <div className="about-copy">
          <h2>Designer by trade.<br /><em>Curious human</em> by nature.</h2>
          <div className="about-columns">
            <p>
              For the past decade, I’ve helped early-stage teams and established brands find
              clarity, tell better stories, and build products people genuinely enjoy using.
            </p>
            <p>
              I’m most energized at the intersection of strategy and craft—where a sharp idea
              meets a thoughtful detail. Away from the screen, you’ll find me making ceramics,
              collecting cookbooks, or walking somewhere without a map.
            </p>
          </div>
          <a className="text-link" href="#contact">More about me <Icon name="arrow" /></a>
          <div className="about-charm" aria-hidden="true"><span>✦</span><small>stay curious</small></div>
        </div>
      </section>

      <section className="photo-section" id="photos">
        <div className="photo-heading">
          <div>
            <span className="photo-kicker"><Icon name="asterisk" size={15} /> Field notes, lately</span>
            <h2>Life, in <em>fragments.</em></h2>
          </div>
          <p>
            A visual notebook of places, objects, textures, and ordinary moments
            I want to remember.
          </p>
        </div>
        <div className="photo-grid">
          <figure className="photo-main">
            <img src="/images/glowing-friends.png" alt="Two friends glowing in a flash photograph by the sea" />
            <figcaption><span>01</span> We looked like light</figcaption>
          </figure>
          <figure className="photo-detail">
            <img src="/images/prism-door.png" alt="Prismatic light cast through a blue glass door" />
            <figcaption><span>02</span> Light passing through</figcaption>
          </figure>
          <figure className="photo-color">
            <img src="/images/star-horse.png" alt="A white and brown horse decorated with colorful stars" />
            <div className="photo-badge">wild<br />at heart</div>
            <figcaption><span>03</span> A very good idea</figcaption>
          </figure>
          <div className="photo-note">
            <span>Camera roll / 2025</span>
            <p>Small evidence of a life being lived.</p>
            <a href="#photos" aria-label="View the full photo diary"><Icon name="arrow" size={22} /></a>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-heading light">
          <p>Ways I can help</p>
          <span>Capabilities</span>
        </div>
        <div className="service-grid">
          {[
            ['01', 'Product design', 'From early concepts to polished, shipped experiences across web and mobile.'],
            ['02', 'Brand systems', 'Flexible identities that give growing ideas a clear and memorable voice.'],
            ['03', 'Creative direction', 'A steady point of view connecting product, brand, and communication.'],
          ].map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="footer-lead">
          <p>Have a project in mind?</p>
          <h2>Let’s make something<br /><em>worth remembering.</em></h2>
          <a href="mailto:hello@mayachen.design">
            hello@mayachen.design <Icon name="arrow" size={24} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Maya Chen</span>
          <div>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.are.na" target="_blank" rel="noreferrer">Are.na</a>
          </div>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  )
}
