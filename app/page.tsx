
"use client";

import { useState, type FormEvent } from "react";

const INSTAGRAM = "https://www.instagram.com/eternalroseshtx/";

function Rose({
  tone = "red",
  className = "",
}: {
  tone?: "red" | "blush" | "cream";
  className?: string;
}) {
  return (
    <div className={`rose rose-${tone} ${className}`} aria-hidden="true">
      <div className="rose-shadow" />
      <div className="rose-head">
        {Array.from({ length: 8 }, (_, i) => (
          <span className={`petal petal-${i + 1}`} key={i} />
        ))}
        <span className="rose-core" />
      </div>
      <span className="rose-stem" />
      <span className="rose-leaf leaf-left" />
      <span className="rose-leaf leaf-right" />
    </div>
  );
}

function Arrangement({
  tone = "red",
  variant = "large",
}: {
  tone?: "red" | "blush" | "cream";
  variant?: "large" | "small";
}) {
  return (
    <div
      className={`arrangement arrangement-${variant}`}
      role="img"
      aria-label={`Illustrated ${tone} rose arrangement, concept artwork`}
    >
      <div className="arrangement-glow" />
      <Rose tone={tone} className="r1" />
      <Rose tone={tone} className="r2" />
      <Rose tone={tone} className="r3" />
      <Rose tone={tone} className="r4" />
      <Rose tone={tone} className="r5" />
      <Rose tone={tone} className="r6" />
      <Rose tone={tone} className="r7" />
      <div className="bouquet-paper paper-left" />
      <div className="bouquet-paper paper-right" />
      <div className="bouquet-band" />
    </div>
  );
}

const collections = [
  {
    number: "01",
    title: "The Signature",
    subtitle: "A timeless statement",
    description:
      "An editorial concept for a classic rose arrangement with unmistakable presence.",
    tone: "red" as const,
    className: "collection-red",
  },
  {
    number: "02",
    title: "The Romance",
    subtitle: "A softer expression",
    description:
      "Blush rose inspiration for thoughtful surprises and meaningful moments.",
    tone: "blush" as const,
    className: "collection-blush",
  },
  {
    number: "03",
    title: "The Classic",
    subtitle: "Quiet elegance",
    description:
      "Cream-toned rose inspiration with a refined, understated feeling.",
    tone: "cream" as const,
    className: "collection-cream",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [occasion, setOccasion] = useState("");
  const [date, setDate] = useState("");
  const [budget, setBudget] = useState("");
  const [notes, setNotes] = useState("");
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState(false);

  const message = [
    "Hi Houston Eternal Roses! I'd like to enquire about a rose arrangement.",
    "",
    `Name: ${name}`,
    `Style inspiration: ${type || "Open to suggestions"}`,
    `Occasion: ${occasion || "Not specified"}`,
    `Preferred date: ${date || "Flexible"}`,
    `Budget: ${budget || "Please advise"}`,
    `Details: ${notes || "None"}`,
    "",
    "Could you please confirm current options, pricing, availability and ordering details?",
  ].join("\n");

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setReady(true);
    setCopied(false);
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      const field = document.getElementById(
        "prepared-message"
      ) as HTMLTextAreaElement | null;
      field?.focus();
      field?.select();
    }
  }

  return (
    <>
      <div className="concept-notice">
        INDEPENDENT WEBSITE CONCEPT — NOT THE OFFICIAL BUSINESS WEBSITE
      </div>

      <header className="header" id="top">
        <a href="#top" className="logo" aria-label="Houston Eternal Roses home">
          <span className="logo-mark">H<span>✦</span>R</span>
          <span className="logo-caption">HOUSTON ETERNAL ROSES</span>
        </a>

        <nav className="desktop-links" aria-label="Main navigation">
          <a href="#collections">Collections</a>
          <a href="#experience">The Experience</a>
          <a href="#ordering">How to Order</a>
        </nav>

        <a href="#enquire" className="header-action">
          MAKE AN ENQUIRY <span>↗</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      <nav
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "visible" : ""}`}
        aria-label="Mobile navigation"
        inert={!menuOpen}
      >
        {[
          ["Collections", "#collections"],
          ["The Experience", "#experience"],
          ["How to Order", "#ordering"],
          ["Make an Enquiry", "#enquire"],
        ].map(([label, href]) => (
          <a
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
          >
            {label} <span>↗</span>
          </a>
        ))}
      </nav>

      <main>
        <section className="hero">
          <div className="hero-text">
            <div className="eyebrow">
              <span className="gold-line" />
              HOUSTON, TEXAS · FLORAL CONCEPT
            </div>

            <h1>
              Roses
              <br />
              <em>without</em>
              <br />
              ordinary.
            </h1>

            <p>
              For grand gestures, quiet celebrations, and
              everything words cannot quite express.
              Discover an elevated world of rose-inspired beauty.
            </p>

            <div className="hero-actions">
              <a className="btn btn-gold" href="#collections">
                EXPLORE THE COLLECTION <span>↗</span>
              </a>
              <a className="subtle-link" href="#enquire">
                REQUEST AN ARRANGEMENT ↗
              </a>
            </div>

            <div className="hero-footnote">
              <span>AN EXPRESSION OF LOVE</span>
              <span>EST. IN EVERY MOMENT</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-frame" />
            <span className="vertical-caption">
              A BEAUTIFUL WAY TO SAY EVERYTHING
            </span>
            <Arrangement />
            <div className="art-number">No. 01 / ROSE STUDY</div>
            <div className="art-stamp">
              <span>THE ART OF</span>
              <strong>giving</strong>
              <span>✦</span>
            </div>
          </div>
        </section>

        <div className="ticker">
          <span>LOVE, BEAUTIFULLY EXPRESSED</span>
          <b>✦</b>
          <span>HOUSTON ETERNAL ROSES</span>
          <b>✦</b>
          <span>EVERY GESTURE MATTERS</span>
        </div>

        <section className="statement section-pad" id="experience">
          <div className="section-topline">
            <span>01 / THE PHILOSOPHY</span>
            <span>AN EDITORIAL INTERPRETATION</span>
          </div>

          <div className="statement-grid">
            <div>
              <span className="ornament">✦</span>
              <h2>
                Not just flowers.
                <br />
                <em>A feeling.</em>
              </h2>
            </div>
            <div className="statement-copy">
              <p>
                Some occasions deserve more than a message.
                A beautiful arrangement becomes part of the
                memory — a gesture to remember.
              </p>
              <p>
                This independent website concept imagines a
                premium digital home for Houston Eternal Roses,
                bringing rose inspiration, ordering information,
                and customer enquiries together in one place.
              </p>
              <a href="#collections" className="underline-link">
                DISCOVER THE INSPIRATION ↗
              </a>
            </div>
          </div>
        </section>

        <section className="collections section-pad" id="collections">
          <div className="section-topline">
            <span>02 / THE COLLECTION</span>
            <span>CURATED ROSE INSPIRATION</span>
          </div>

          <div className="collection-heading">
            <div>
              <span className="micro-label">A STUDY IN ROSES</span>
              <h2>
                Every shade,
                <br />
                <em>every sentiment.</em>
              </h2>
            </div>
            <p>
              These are illustrative design concepts, not verified
              Houston Eternal Roses products. Visit Instagram
              for actual arrangements and current pricing.
            </p>
          </div>

          <div className="collection-list">
            {collections.map((item) => (
              <article className="collection-item" key={item.number}>
                <div className={`collection-visual ${item.className}`}>
                  <span className="visual-index">{item.number} / CONCEPT</span>
                  <Arrangement tone={item.tone} variant="small" />
                </div>
                <div className="collection-info">
                  <span className="collection-number">
                    EDITION {item.number}
                  </span>
                  <span className="collection-subtitle">
                    {item.subtitle}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href="#enquire" className="collection-cta">
                    ENQUIRE ABOUT THIS STYLE <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="collection-bottom">
            <span>ACTUAL AVAILABILITY AND PRICES ARE CONFIRMED BY THE FLORIST</span>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              VIEW ACTUAL WORK ON INSTAGRAM ↗
            </a>
          </div>
        </section>

        <section className="interlude">
          <div className="interlude-inner">
            <span>THE BEAUTY OF A GESTURE</span>
            <h2>
              Say it with
              <br />
              <em>something unforgettable.</em>
            </h2>
            <a href="#enquire" className="btn btn-outline">
              BEGIN YOUR ENQUIRY ↗
            </a>
          </div>
          <span className="interlude-symbol">✦</span>
        </section>

        <section className="ordering section-pad" id="ordering">
          <div className="section-topline">
            <span>03 / HOW TO ORDER</span>
            <span>THREE SIMPLE STEPS</span>
          </div>

          <div className="ordering-intro">
            <h2>
              From inspiration
              <br />
              <em>to intention.</em>
            </h2>
            <p>
              Prepare the details for your enquiry, then contact
              Houston Eternal Roses directly to confirm
              availability, current prices and ordering terms.
            </p>
          </div>

          <div className="ordering-steps">
            <article>
              <span>01</span>
              <h3>Find your inspiration.</h3>
              <p>
                Browse the business&apos;s Instagram for
                real arrangements and pricing updates.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Share your vision.</h3>
              <p>
                Include your occasion, preferred date,
                budget and any arrangement preferences.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Confirm directly.</h3>
              <p>
                Message the florist to confirm what&apos;s
                available and how to place an order.
              </p>
            </article>
          </div>

          <div className="ordering-note">
            <span>✦</span>
            <p>
              This concept website does not accept payments or
              confirm orders. All arrangements are discussed
              directly with Houston Eternal Roses.
            </p>
          </div>
        </section>

        <section className="enquiry section-pad" id="enquire">
          <div className="section-topline">
            <span>04 / YOUR ENQUIRY</span>
            <span>LET THE CONVERSATION BEGIN</span>
          </div>

          <div className="enquiry-layout">
            <div className="enquiry-intro">
              <span className="micro-label">A PERSONAL GESTURE</span>
              <h2>
                Something
                <br />
                <em>special</em>
                <br />
                begins here.
              </h2>
              <p>
                Tell us what you have in mind. This form
                prepares a message for you to copy and
                send directly to the florist on Instagram.
              </p>
              <div className="instagram-contact">
                <span>CONTACT THE BUSINESS</span>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @eternalroseshtx ↗
                </a>
                <small>HOUSTON, TEXAS</small>
              </div>
            </div>

            <div className="enquiry-panel">
              <div className="form-heading">
                <span>YOUR ROSE ENQUIRY</span>
                <span>✦</span>
              </div>

              <form onSubmit={prepare}>
                <label>
                  YOUR NAME *
                  <input
                    required
                    maxLength={100}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                  />
                </label>

                <label>
                  ARRANGEMENT INSPIRATION
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="">Select a style</option>
                    <option>Classic red roses</option>
                    <option>Blush roses</option>
                    <option>Cream roses</option>
                    <option>Custom arrangement</option>
                    <option>Open to suggestions</option>
                  </select>
                </label>

                <label>
                  OCCASION
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                  >
                    <option value="">Select an occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Romantic surprise</option>
                    <option>Graduation</option>
                    <option>Just because</option>
                    <option>Other</option>
                  </select>
                </label>

                <div className="form-split">
                  <label>
                    PREFERRED DATE
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </label>
                  <label>
                    BUDGET
                    <input
                      value={budget}
                      maxLength={60}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="Your budget"
                    />
                  </label>
                </div>

                <label>
                  TELL US MORE *
                  <textarea
                    required
                    rows={5}
                    maxLength={1200}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Colors, quantity, occasion details or other preferences..."
                  />
                </label>

                <button className="btn btn-dark" type="submit">
                  PREPARE INSTAGRAM MESSAGE ↗
                </button>

                <p className="form-disclaimer">
                  No information is submitted or stored by this demo.
                  You decide whether to send your enquiry.
                </p>
              </form>

              {ready && (
                <div className="message-result" role="status">
                  <h3>Your message is ready.</h3>
                  <p>
                    Copy this message, open Instagram, and paste
                    it into a DM to @eternalroseshtx.
                  </p>
                  <textarea
                    id="prepared-message"
                    value={message}
                    readOnly
                    rows={10}
                    aria-label="Prepared enquiry message"
                  />
                  <div className="message-buttons">
                    <button type="button" onClick={copyMessage}>
                      {copied ? "✓ COPIED" : "COPY MESSAGE"}
                    </button>
                    <a
                      href={INSTAGRAM}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      OPEN INSTAGRAM ↗
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="final-section">
          <span>HOUSTON ETERNAL ROSES</span>
          <h2>
            Make the moment
            <br />
            <em>mean more.</em>
          </h2>
          <a className="btn btn-gold" href="#enquire">
            START AN ENQUIRY ↗
          </a>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <div>
            <div className="footer-logo">H<span>✦</span>R</div>
            <p>HOUSTON ETERNAL ROSES</p>
            <small>HOUSTON, TEXAS</small>
          </div>
          <div className="footer-links">
            <a href="#collections">COLLECTIONS</a>
            <a href="#experience">THE EXPERIENCE</a>
            <a href="#ordering">HOW TO ORDER</a>
            <a href="#enquire">ENQUIRE</a>
          </div>
          <div className="footer-links">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM ↗
            </a>
            <a href="#top">BACK TO TOP ↑</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 HOUSTON ETERNAL ROSES · WEBSITE CONCEPT</span>
          <span>INDEPENDENT DEMO · NOT AFFILIATED WITH THE BUSINESS</span>
        </div>
      </footer>

      <a href="#enquire" className="mobile-bottom-cta">
        ENQUIRE ABOUT ROSES <span>↗</span>
      </a>
    </>
  );
}
