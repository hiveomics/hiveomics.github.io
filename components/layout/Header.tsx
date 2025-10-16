'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from './Navigation';
import { SITE_CONFIG } from '@/lib/constants';
import GradientText from '@/components/GradientText';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <Link href="/" aria-label={`${SITE_CONFIG.name} home`}>
              <GradientText
                colors={["#18cb7b", "#4079ff", "#18cb7b", "#4079ff", "#18cb7b"]}
                animationSpeed={10}
                showBorder={false}
                className="logo-text"
                >
              {SITE_CONFIG.name}
              </GradientText>
              {/* <span className="logo-text">{SITE_CONFIG.name}</span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <Navigation />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <svg
                className="menu-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="menu-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="mobile-nav">
            <Navigation onNavigate={closeMobileMenu} />
          </div>
        )}
      </div>
    </header>
  );
}
