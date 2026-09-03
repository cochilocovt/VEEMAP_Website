'use client';

import { useState, useTransition } from 'react';
import Image from 'next/image';
import { CLIENTS, SECTOR_TABS } from '@/data/clients';
import styles from './clientLogoCarousel.module.css';

export default function ClientLogoCarousel() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [isPending, startTransition] = useTransition();

  const displayedLogos = activeTab === 'all'
    ? CLIENTS
    : CLIENTS.filter((c) => c.sector === activeTab);

  // Scalular dynamic velocity scaling:
  // Base 12 items -> 45s duration
  const baseItems = 12;
  const baseDuration = 45;
  const numItems = displayedLogos.length;
  const marqueeDuration = Math.max(20, Math.round((numItems / baseItems) * baseDuration));

  // Determine repeat count to ensure continuous loop without blank spaces
  // Minimum items in track should be >= 20 for seamless marquee width
  const repeatCount = Math.max(2, Math.ceil(24 / numItems));
  const trackItems = Array.from({ length: repeatCount }).flatMap(() => displayedLogos);

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;
    startTransition(() => {
      setActiveTab(tabId);
    });
  };

  return (
    <section id="clients" className={styles.carouselSection} aria-label="Our Clients and Partners">
      {/* Section Header */}
      <div className={styles.intro}>
        <span className={styles.kicker}>Trusted by Global Manufacturers</span>
        <h2 className={styles.title}>
          Machines deployed for <em>industry leaders</em> across 5 sectors.
        </h2>
        <p className={styles.subtitle}>
          Over 55 clients in India and worldwide rely on VEEMAP for high-speed assembly, precision inspection, and bespoke automated lines.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <nav className={styles.tabsNav} aria-label="Client sectors filter">
        {SECTOR_TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleTabChange(tab.id)}
              className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ''}`}
              aria-pressed={isActive}
            >
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Marquee Carousel Track */}
      <div className={styles.marqueeContainer}>
        <div className={styles.fadeLeft} aria-hidden="true" />
        <div className={styles.fadeRight} aria-hidden="true" />

        <div
          key={activeTab}
          className={styles.trackStage}
          style={{ opacity: isPending ? 0.4 : 1 }}
        >
          <div
            className={styles.marqueeTrack}
            style={{
              animationDuration: `${marqueeDuration}s`,
            }}
          >
            {/* Primary Track */}
            {trackItems.map((logo, idx) => (
              <div
                key={`${logo.id}-primary-${idx}`}
                className={styles.logoCard}
                title={logo.name}
              >
                <div className={styles.logoInner}>
                  <Image
                    src={logo.logoPath}
                    alt={logo.name}
                    fill
                    className={styles.logoImg}
                    sizes="(max-width: 768px) 140px, 200px"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}

            {/* Seamless Loop Duplicate Track */}
            {trackItems.map((logo, idx) => (
              <div
                key={`${logo.id}-duplicate-${idx}`}
                className={styles.logoCard}
                title={logo.name}
                aria-hidden="true"
              >
                <div className={styles.logoInner}>
                  <Image
                    src={logo.logoPath}
                    alt={logo.name}
                    fill
                    className={styles.logoImg}
                    sizes="(max-width: 768px) 140px, 200px"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
