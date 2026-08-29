'use client';

import Image from 'next/image';
import { useRef } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Camera,
  CircleGauge,
  HeartPulse,
  MonitorUp,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import CommissioningVideoSequence from './CommissioningVideoSequence';
import SiteHeader from '@/components/site-shell/SiteHeader';
import SiteFooter from '@/components/site-shell/SiteFooter';
import { homepageCta, homepageMobileCta, homepageNav } from '@/components/site-shell/nav';
import EnquiryForm, { sectors } from '@/components/enquiry/EnquiryForm';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const systemRange = [
  {
    title: 'Semi-automatic platforms',
    text: 'Targeted industrialisation with operator access, controlled process steps and a lower initial investment.',
    meta: 'One process / one station',
  },
  {
    title: 'Fully automatic lines',
    text: 'Indexed or continuous-motion systems that integrate assembly, testing, inspection and material movement.',
    meta: 'Multiple processes / one line',
  },
  {
    title: 'Complete plants',
    text: 'Machines, conveyors, quality systems, controls and connected data designed as one manufacturing environment.',
    meta: 'Production system / plant scale',
  },
];

export default function Home() {
  const root = useRef<HTMLElement>(null);

  const moveFocus = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--focus-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--focus-y', `${event.clientY - rect.top}px`);
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: '(min-width: 901px)',
          mobile: '(max-width: 900px)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { reduceMotion } = context.conditions as {
            reduceMotion: boolean;
          };

          if (reduceMotion) {
            gsap.set('.focus-title', { autoAlpha: 0 });
            return;
          }

          gsap.from('.hero-title-line', {
            autoAlpha: 0,
            y: 36,
            filter: 'blur(12px)',
            duration: 1.15,
            stagger: 0.11,
            ease: 'expo.out',
            clearProps: 'transform,filter,opacity,visibility',
          });

          gsap.from('.hero-intro', {
            autoAlpha: 0,
            y: 18,
            duration: 0.85,
            delay: 0.25,
            stagger: 0.1,
            ease: 'power3.out',
            clearProps: 'transform,opacity,visibility',
          });

          gsap.utils.toArray<HTMLElement>('.depth-reveal').forEach((section) => {
            gsap.from(section.querySelectorAll('.depth-line'), {
              autoAlpha: 0.18,
              y: 30,
              filter: 'blur(9px)',
              stagger: 0.1,
              duration: 1,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 76%',
                toggleActions: 'play none none reverse',
              },
            });
          });

          gsap.from('.proof-number', {
            autoAlpha: 0,
            y: 36,
            stagger: 0.09,
            duration: 0.9,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: '.proof-ledger',
              start: 'top 78%',
              toggleActions: 'play none none reverse',
            },
          });
        },
      );

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <main ref={root} className="site-shell">
      <SiteHeader
        brandHref="#top"
        links={homepageNav}
        cta={homepageCta}
        mobileCta={homepageMobileCta}
      />

      <section id="top" className="hero" onPointerMove={moveFocus}>
        <div className="hero-copy">
          <div className="focus-title" aria-hidden="true">
            <span>Special <em>purpose.</em></span><span><em>Exact</em> by design.</span>
          </div>
          <h1><span className="hero-title-line">Special <em>purpose.</em></span><span className="hero-title-line"><em>Exact</em> by design.</span></h1>
          <p className="hero-deck hero-intro">World-class tools. In-house mechanisms. Machines engineered for exceptional speed and accuracy.</p>
          <a className="primary-action hero-intro" href="#enquiry">Tell us about your process <ArrowUpRight aria-hidden="true" /></a>
        </div>

        <a className="hero-scroll" href="#commissioning">Explore the commissioning sequence <ArrowDownRight aria-hidden="true" /></a>
      </section>

      <CommissioningVideoSequence />

      <section id="proof" className="proof-section depth-reveal">
        <div className="proof-intro">
          <h2 className="depth-line">Proof lives in delivered machinery.</h2>
          <p className="depth-line">From one station to the complete plant, VEEMAP combines precision mechanics, controls, inspection and connected data around the manufacturing requirement.</p>
        </div>
        <div className="proof-ledger">
          <div><strong className="proof-number">236</strong><span>projects delivered</span></div>
          <div><strong className="proof-number">55</strong><span>clients in India and overseas</span></div>
          <div><strong className="proof-number">5</strong><span>manufacturing sectors</span></div>
        </div>
        <div className="sector-tape" aria-label="Markets served">
          {sectors.map((sector) => <span key={sector}>{sector}<i aria-hidden="true" /></span>)}
        </div>
      </section>

      <section className="range-section">
        <div className="range-sticky">
          <h2>Scale the system.<br />Not just the machine.</h2>
          <p>VEEMAP’s delivery range follows the process—from a focused station to a connected production environment.</p>
        </div>
        <div className="range-list">
          {systemRange.map((item, index) => (
            <article key={item.title}>
              <span className="range-index">{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
              <strong>{item.meta}</strong><ArrowDownRight aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section id="engineering" className="engineering-section depth-reveal">
        <div className="engineering-copy">
          <h2 className="depth-line">Engineering that moves at production speed.</h2>
          <p className="depth-line">Our teams develop mechanisms, motion studies, controls and inspection around the real product—not around a catalogue machine.</p>
          <a className="text-link depth-line" href="#enquiry">Bring us the process constraint <ArrowRight aria-hidden="true" /></a>
        </div>
        <figure className="engineering-visual depth-line">
          <Image src="/images/motion-delta-robot.png" alt="High-speed in-house motion mechanism under development" fill sizes="(max-width: 900px) 100vw, 52vw" />
          <figcaption><Bot aria-hidden="true" /> High-speed pick-and-place R&amp;D</figcaption>
        </figure>
      </section>

      <section className="digital-section">
        <figure className="scan-plane">
          <Image src="/images/inspection-scan.png" alt="Industrial 3D inspection scan used to evaluate part geometry" fill sizes="(max-width: 900px) 100vw, 50vw" />
          <figcaption><Camera aria-hidden="true" /> Vision / inspection plane</figcaption>
        </figure>
        <div className="digital-copy depth-reveal">
          <h2 className="depth-line">A digital layer built into the machine.</h2>
          <p className="depth-line">Vision, controls, traceability and dashboards should reveal what the process is doing—not add another screen for operators to interpret.</p>
          <div className="signal-list depth-line">
            <span><CircleGauge aria-hidden="true" />Production context</span>
            <span><MonitorUp aria-hidden="true" />Connected HMI</span>
            <span><HeartPulse aria-hidden="true" />Condition alerts</span>
          </div>
        </div>
      </section>

      <section id="careers" className="careers-section">
        <div className="careers-photo"><Image src="/images/facility.jpg" alt="VEEMAP Technologies facility in IMT Manesar" fill sizes="(max-width: 900px) 100vw, 54vw" /></div>
        <div className="careers-copy depth-reveal">
          <h2 className="depth-line">Build machines that have never existed before.</h2>
          <p className="depth-line">No two projects are the same. Work across mechanical design, electrical engineering, controls, robotics and automation—with each line becoming a new technical problem to solve.</p>
          <a className="primary-action depth-line" href="mailto:info@veemap.co.in?subject=Careers%20at%20VEEMAP">Explore careers <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </section>

      <section id="enquiry" className="enquiry-section">
        <div className="enquiry-intro">
          <h2>What should the next machine solve?</h2>
          <p>Share enough context for our engineering team to understand the process before we get back to you. Please do not include confidential drawings or sensitive files at this stage.</p>
          <div className="contact-strip"><a href="mailto:info@veemap.co.in">info@veemap.co.in</a><a href="tel:+919266374969">+91 9266374969</a></div>
        </div>
        <EnquiryForm />
      </section>

      <SiteFooter topHref="#top" />
    </main>
  );
}
