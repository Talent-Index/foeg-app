import { useEffect, useState } from "react";

const TALLY_FORM_URL = "TALLY_FORM_URL"; // TODO: replace with real Tally link
const CALENDLY_URL = "https://calendly.com/foeglabslimited/30min";
const WHATSAPP_URL = "https://chat.whatsapp.com/KLihred4TsCKmLj41ZFbmr";
const X_URL = "https://x.com/foeg_Labs";
const NEXT_COHORT = "JANUARY 2026";
const SLOTS_REMAINING = 3;

const mono = "font-mono text-[11px] tracking-[0.18em] uppercase";

const Ext = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
    {children}
  </a>
);

const Rule = () => <hr className="border-0 border-t border-[#E5E5E5]" />;

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShown(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      className="transition-all duration-700 ease-out motion-reduce:transition-none"
      style={{ opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(12px)" }}
    >
      {children}
    </div>
  );
};

const Nav = () => (
  <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#E5E5E5]">
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
      <a href="#top" className={`${mono} text-[#0A0A0A]`}>FOEG LABS</a>
      <nav className="hidden md:flex items-center gap-8">
        {[
          ["The Sprint", "#sprint"],
          ["How It Works", "#how"],
          ["Who It's For", "#filter"],
          ["Build Log", "#proof"],
        ].map(([l, h]) => (
          <a key={h} href={h} className={`${mono} text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors`}>
            {l}
          </a>
        ))}
      </nav>
      <Ext href={TALLY_FORM_URL} className={`${mono} bg-[#0A0A0A] text-white px-4 py-2.5 hover:bg-black/80 transition-colors`}>
        Apply
      </Ext>
    </div>
  </header>
);

const Hero = () => (
  <section id="top" className="border-b border-[#E5E5E5]">
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-24 pb-28 md:pt-36 md:pb-40">
      <Reveal>
        <p className={`${mono} text-[#6B6B6B] mb-10`}>IMPLEMENTATION STUDIO — NAIROBI</p>
      </Reveal>
      <Reveal delay={120}>
        <h1 className="font-display font-semibold text-[#0A0A0A] tracking-[-0.03em] leading-[0.92] text-[clamp(2.75rem,9vw,8.5rem)]">
          We install the systems your business runs on.
        </h1>
      </Reveal>
      <Reveal delay={260}>
        <p className="mt-10 max-w-2xl text-lg md:text-xl text-[#0A0A0A] leading-snug">
          FOEG Labs builds operations, automation, and payment infrastructure inside businesses doing KSh 400K+ per
          month. In 30 days, you get working systems — not a strategy deck.
        </p>
      </Reveal>
      <Reveal delay={400}>
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6">
          <Ext
            href={TALLY_FORM_URL}
            className={`${mono} bg-[#0A0A0A] text-white px-7 py-4 hover:bg-black/80 transition-colors inline-block w-fit`}
          >
            Apply for a Sprint
          </Ext>
          <Ext href={CALENDLY_URL} className="text-[#0A0A0A] underline underline-offset-4 hover:opacity-70">
            Already qualified? Book a diagnosis call
          </Ext>
        </div>
        <p className={`${mono} text-[#6B6B6B] mt-12`}>
          3 CLIENT SLOTS PER MONTH — APPLICATIONS REVIEWED IN 48 HOURS
        </p>
      </Reveal>
    </div>
  </section>
);

const Filter = () => (
  <section id="filter" className="border-b border-[#E5E5E5]">
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-32">
      <h2 className="font-display font-semibold text-[#0A0A0A] tracking-[-0.02em] leading-[1] text-[clamp(2rem,5vw,4rem)] max-w-3xl">
        This is not for everyone. That's deliberate.
      </h2>
      <div className="mt-16 grid md:grid-cols-2 gap-0 border-t border-[#E5E5E5]">
        <div className="md:border-r border-[#E5E5E5] py-10 md:pr-12">
          <p className={`${mono} text-[#6B6B6B] mb-6`}>FOR YOU IF</p>
          <ul className="space-y-4 text-[#0A0A0A] text-base md:text-lg leading-relaxed">
            <li>Doing KSh 400K+/month in revenue.</li>
            <li>Service business or fintech / payments operator.</li>
            <li>2–20 staff.</li>
            <li>Drowning in manual work, leaking money in broken handoffs.</li>
            <li>Ready to invest KSh 400K–650K in fixed-scope implementation.</li>
          </ul>
        </div>
        <div className="border-t md:border-t-0 border-[#E5E5E5] py-10 md:pl-12">
          <p className={`${mono} text-[#6B6B6B] mb-6`}>NOT FOR YOU IF</p>
          <ul className="space-y-4 text-[#0A0A0A] text-base md:text-lg leading-relaxed">
            <li>Pre-revenue or idea stage.</li>
            <li>Looking for advice, mentorship, or a course.</li>
            <li>Want someone to "explore options."</li>
            <li>Expect revenue guarantees.</li>
          </ul>
        </div>
      </div>
      <p className="mt-12 text-[#6B6B6B] text-base md:text-lg max-w-2xl">
        We decline roughly 7 out of 10 applications. The Sprint only works on a business that's already moving.
      </p>
    </div>
  </section>
);

const Problem = () => {
  const items = [
    {
      tag: "LEAKAGE",
      body:
        "Money moves through your business in WhatsApp messages, M-Pesa screenshots, and memory. You don't know what you lost this month — only that you felt it.",
    },
    {
      tag: "DEPENDENCE",
      body:
        "Take a week off and watch what breaks. If the answer is 'everything,' you don't have a business. You have a job with staff.",
    },
    {
      tag: "BLINDNESS",
      body:
        "You can't say, with numbers, whether last week was good or bad. Decisions get made on vibes. Vibes are expensive.",
    },
  ];
  return (
    <section className="border-b border-[#E5E5E5]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <h2 className="font-display font-semibold text-[#0A0A0A] tracking-[-0.02em] leading-[1] text-[clamp(2rem,5vw,4rem)] max-w-3xl">
          You're profitable. You're also the bottleneck.
        </h2>
        <div className="mt-16 space-y-0">
          {items.map((i, idx) => (
            <div
              key={i.tag}
              className={`grid md:grid-cols-[180px_1fr] gap-6 md:gap-12 py-8 ${
                idx !== 0 ? "border-t border-[#E5E5E5]" : ""
              }`}
            >
              <p className={`${mono} text-[#6B6B6B] pt-1`}>{i.tag}</p>
              <p className="text-[#0A0A0A] text-lg md:text-xl leading-snug max-w-2xl">{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SpecRow = ({ k, v }: { k: string; v: string }) => (
  <div className="grid grid-cols-[140px_1fr] md:grid-cols-[200px_1fr] gap-4 py-4 border-t border-[#E5E5E5]">
    <p className={`${mono} text-[#6B6B6B]`}>{k}</p>
    <p className="text-[#0A0A0A] text-base md:text-lg">{v}</p>
  </div>
);

const Offer = () => (
  <section id="sprint" className="border-b border-[#E5E5E5]">
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-32">
      <p className={`${mono} text-[#6B6B6B] mb-6`}>THE OFFER</p>
      <h2 className="font-display font-semibold text-[#0A0A0A] tracking-[-0.02em] leading-[1] text-[clamp(2rem,5vw,4rem)] max-w-3xl">
        One offer. Fixed scope. Fixed price.
      </h2>

      <div className="mt-16 grid lg:grid-cols-2 gap-16">
        <div>
          <p className={`${mono} text-[#6B6B6B] mb-2`}>SYSTEMS IMPLEMENTATION SPRINT</p>
          <div className="border-b border-[#E5E5E5]" />
          <SpecRow k="DURATION" v="30 days" />
          <SpecRow k="PRICE" v="KSh 400,000 – 650,000 (scope-dependent)" />
          <SpecRow k="PAYMENT" v="50% to start, balance on milestones" />
          <SpecRow k="CAPACITY" v="3 clients per month" />
          <SpecRow k="DELIVERABLE" v="Working systems, trained team, full documentation" />
        </div>

        <div>
          <p className={`${mono} text-[#6B6B6B] mb-6`}>WHAT GETS INSTALLED</p>
          <ol className="space-y-8">
            {[
              ["01", "Operating system", "Workflows, handoffs, accountability: who does what, when, with what trigger."],
              ["02", "Automation layer", "AI and automation on the repetitive work draining your team's hours."],
              ["03", "Decision systems", "Payments visibility, dashboards, weekly numbers. You see the business in real numbers, weekly."],
            ].map(([n, t, d]) => (
              <li key={n} className="grid grid-cols-[48px_1fr] gap-4">
                <span className={`${mono} text-[#6B6B6B] pt-1`}>{n}</span>
                <div>
                  <p className="text-[#0A0A0A] text-lg font-medium">{t}</p>
                  <p className="text-[#6B6B6B] mt-1 leading-relaxed">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-20 border border-[#0A0A0A] p-8 md:p-12 max-w-4xl">
        <p className={`${mono} text-[#0A0A0A] mb-4`}>THE GUARANTEE</p>
        <p className="font-display text-[#0A0A0A] text-2xl md:text-3xl leading-snug tracking-[-0.01em]">
          If your system isn't live in 30 days, we keep building at no cost until it is. We guarantee the system —
          installed, adopted, documented. We do not guarantee revenue. Anyone who does is lying to you.
        </p>
      </div>
    </div>
  </section>
);

const HowItWorks = () => {
  const phases = [
    ["WEEK 1 — AUDIT", "We map how money and work actually move through your business. Every leak, every break, every dependency on you."],
    ["WEEK 2 — DESIGN", "We architect the fixed system: workflows, automation, payment rails, decision dashboards. You sign off before we build."],
    ["WEEKS 2–3 — BUILD", "We implement inside your real tools, with your real data, alongside your team."],
    ["WEEK 4 — TRAIN & HAND OVER", "Your team runs it. Documentation delivered. We leave. The system stays."],
  ];
  return (
    <section id="how" className="border-b border-[#E5E5E5]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <p className={`${mono} text-[#6B6B6B] mb-6`}>HOW IT WORKS</p>
        <h2 className="font-display font-semibold text-[#0A0A0A] tracking-[-0.02em] leading-[1] text-[clamp(2rem,5vw,4rem)] max-w-3xl">
          The 30 days.
        </h2>
        <div className="mt-16 grid md:grid-cols-4 gap-0 border-t border-[#E5E5E5]">
          {phases.map(([label, body], i) => (
            <div
              key={label}
              className={`py-8 md:py-10 md:px-6 ${
                i !== 0 ? "border-t md:border-t-0 md:border-l border-[#E5E5E5]" : ""
              } ${i === 0 ? "md:pl-0" : ""}`}
            >
              <p className={`${mono} text-[#0A0A0A] mb-4`}>{label}</p>
              <p className="text-[#6B6B6B] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SystemDiagram = () => (
  <svg viewBox="0 0 600 320" className="w-full h-auto" stroke="#0A0A0A" fill="none" strokeWidth="1">
    {[
      [40, 60, 140, 70, "INTAKE"],
      [240, 60, 140, 70, "PAYMENTS"],
      [440, 60, 120, 70, "LEDGER"],
      [40, 200, 140, 70, "OPERATIONS"],
      [240, 200, 140, 70, "AUTOMATION"],
      [440, 200, 120, 70, "DASHBOARD"],
    ].map(([x, y, w, h, label]) => (
      <g key={label as string}>
        <rect x={x as number} y={y as number} width={w as number} height={h as number} />
        <text
          x={(x as number) + (w as number) / 2}
          y={(y as number) + (h as number) / 2 + 4}
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10"
          letterSpacing="2"
          fill="#0A0A0A"
          stroke="none"
        >
          {label as string}
        </text>
      </g>
    ))}
    {[
      [180, 95, 240, 95],
      [380, 95, 440, 95],
      [110, 130, 110, 200],
      [310, 130, 310, 200],
      [500, 130, 500, 200],
      [180, 235, 240, 235],
      [380, 235, 440, 235],
    ].map((c, i) => (
      <line key={i} x1={c[0]} y1={c[1]} x2={c[2]} y2={c[3]} />
    ))}
  </svg>
);

const Proof = () => (
  <section id="proof" className="border-b border-[#E5E5E5]">
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-32">
      <p className={`${mono} text-[#6B6B6B] mb-6`}>WHY FOEG LABS</p>
      <h2 className="font-display font-semibold text-[#0A0A0A] tracking-[-0.02em] leading-[1] text-[clamp(2rem,5vw,4rem)] max-w-3xl">
        We sell finished systems, not promises.
      </h2>

      <div className="mt-16 grid lg:grid-cols-[1.1fr_1fr] gap-16 items-start">
        <ul className="space-y-8">
          {[
            "Every Sprint we deliver is documented and published — anonymized — in our Build Log. You can watch the work before you buy it.",
            "Fixed price, fixed scope, milestone payments. We carry the delivery risk, not you.",
            "Three clients a month is a constraint, not a marketing line. Implementation doesn't scale by stacking clients. It scales by finishing them.",
          ].map((t, i) => (
            <li key={i} className="grid grid-cols-[48px_1fr] gap-4">
              <span className={`${mono} text-[#6B6B6B] pt-1`}>{String(i + 1).padStart(2, "0")}</span>
              <p className="text-[#0A0A0A] text-lg leading-snug">{t}</p>
            </li>
          ))}
        </ul>
        <div className="border border-[#E5E5E5] p-8">
          <SystemDiagram />
          <p className={`${mono} text-[#6B6B6B] mt-4 text-center`}>REFERENCE ARCHITECTURE</p>
        </div>
      </div>

      <div className="mt-24">
        <div className="flex items-end justify-between border-b border-[#E5E5E5] pb-4">
          <h3 className={`${mono} text-[#0A0A0A]`}>BUILD LOG</h3>
          <p className={`${mono} text-[#6B6B6B]`}>POPULATES AS WORK SHIPS</p>
        </div>
        <div className="grid md:grid-cols-3 gap-0">
          {[
            ["SPRINT 001", "SERVICE BUSINESS, NAIROBI", "IN DELIVERY"],
            ["SPRINT 002", "PAYMENTS OPERATOR, NAIROBI", "SCOPED"],
            ["SPRINT 003", "OPEN SLOT", "AVAILABLE"],
          ].map((c, i) => (
            <div
              key={c[0]}
              className={`py-10 md:py-12 md:px-8 ${
                i !== 0 ? "border-t md:border-t-0 md:border-l border-[#E5E5E5]" : ""
              } ${i === 0 ? "md:pl-0" : ""}`}
            >
              <p className={`${mono} text-[#0A0A0A]`}>{c[0]}</p>
              <p className="font-display text-2xl text-[#0A0A0A] mt-4 leading-tight">{c[1]}</p>
              <p className={`${mono} text-[#6B6B6B] mt-6`}>{c[2]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Direction = () => (
  <section className="border-b border-[#E5E5E5]">
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-32">
      <p className={`${mono} text-[#6B6B6B] mb-6`}>WHERE THIS IS GOING</p>
      <h2 className="font-display font-semibold text-[#0A0A0A] tracking-[-0.02em] leading-[1] text-[clamp(2rem,5vw,4rem)] max-w-3xl">
        Every Sprint compounds.
      </h2>
      <p className="mt-10 text-[#0A0A0A] text-lg md:text-xl leading-snug max-w-3xl">
        Each implementation sharpens our playbooks, deepens our data on how Kenyan businesses actually break, and grows
        a verified network of operators who run on FOEG systems. We're not building an agency. We're building the
        implementation infrastructure that businesses in African markets run on — one installed system at a time.
      </p>
    </div>
  </section>
);

const CTA = () => (
  <section id="apply" className="border-b border-[#E5E5E5]">
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-32">
      <p className={`${mono} text-[#6B6B6B] mb-6`}>APPLICATION</p>
      <h2 className="font-display font-semibold text-[#0A0A0A] tracking-[-0.02em] leading-[1] text-[clamp(2.25rem,6vw,5rem)] max-w-3xl">
        Apply for a Sprint.
      </h2>
      <p className="mt-8 text-[#0A0A0A] text-lg md:text-xl leading-snug max-w-2xl">
        The application takes 5 minutes. We review every submission within 48 hours. If you qualify, you'll book a
        30-minute diagnosis call. If you don't, we'll tell you why and what to fix first.
      </p>
      <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6">
        <Ext
          href={TALLY_FORM_URL}
          className={`${mono} bg-[#0A0A0A] text-white px-8 py-5 text-[12px] hover:bg-black/80 transition-colors inline-block w-fit`}
        >
          Start the application
        </Ext>
        <Ext href={CALENDLY_URL} className="text-[#0A0A0A] underline underline-offset-4 hover:opacity-70">
          Book a diagnosis call directly
        </Ext>
      </div>
      <p className="text-[#6B6B6B] mt-4 max-w-2xl text-sm">
        Direct booking is for operators who've already spoken with us or been referred.
      </p>
      <p className={`${mono} text-[#6B6B6B] mt-12`}>
        NEXT COHORT: {NEXT_COHORT} — SLOTS REMAINING: {SLOTS_REMAINING}
      </p>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 grid md:grid-cols-3 gap-12">
      <div>
        <p className={`${mono} text-[#6B6B6B] mb-4`}>CONTACT</p>
        <p className="text-[#0A0A0A]">
          <a href="mailto:Foeglabslimited@gmail.com" className="hover:opacity-70">Foeglabslimited@gmail.com</a>
        </p>
        <p className="text-[#0A0A0A] mt-2">
          <Ext href={X_URL} className="hover:opacity-70">X: @foeg_Labs</Ext>
        </p>
      </div>
      <div>
        <p className={`${mono} text-[#6B6B6B] mb-4`}>LOCATION</p>
        <p className="text-[#0A0A0A]">ABC Place, 10th Floor, Antler</p>
        <p className="text-[#0A0A0A]">Nairobi, Kenya</p>
      </div>
      <div>
        <p className={`${mono} text-[#6B6B6B] mb-4`}>OBSERVE THE WORK</p>
        <Ext href={WHATSAPP_URL} className="text-[#0A0A0A] underline underline-offset-4 hover:opacity-70">
          Founder community on WhatsApp
        </Ext>
      </div>
    </div>
    <div className="border-t border-[#E5E5E5]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-8">
        <p className={`${mono} text-[#6B6B6B]`}>© FOEG LABS LIMITED. REGISTERED IN KENYA.</p>
      </div>
    </div>
  </footer>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] font-sans antialiased selection:bg-[#0A0A0A] selection:text-white">
      <Nav />
      <main>
        <Hero />
        <Filter />
        <Problem />
        <Offer />
        <HowItWorks />
        <Proof />
        <Direction />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
