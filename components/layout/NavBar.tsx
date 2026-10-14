'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '/shop',      label: 'Shop' },
  { href: '/about',     label: 'Our Story' },
  { href: '/franchise', label: 'Franchise' },
  { href: '/cafe',      label: 'Cafe' },
  { href: '/contact',   label: 'Contact' },
];

interface NavBarProps {
  cartCount?: number;
}

export default function NavBar({ cartCount = 0 }: NavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ── Announcement Bar ── */}
      <div className="announcement-bar">
        🚚 Free delivery above ₹499 &nbsp;|&nbsp; 100% Coconut Oil &nbsp;|&nbsp; Zero Preservatives
      </div>

      {/* ── Main NavBar ── */}
      <header
        className="navbar"
        style={{
          boxShadow: scrolled
            ? '0 4px 20px rgba(0,0,0,0.25)'
            : '0 2px 12px rgba(0,0,0,0.15)',
          transition: 'box-shadow 300ms ease',
        }}
      >
        <nav
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1.5rem',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            id="nav-logo"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'var(--brand-red)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: '1.1rem',
                  color: 'var(--brand-yellow)',
                  letterSpacing: '-0.03em',
                }}
              >
                YC
              </span>
            </div>
            <div style={{ lineHeight: 1.1 }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: '1.15rem',
                  color: 'var(--brand-red)',
                  letterSpacing: '-0.02em',
                }}
              >
                Yellow Chips
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.65rem',
                  color: 'var(--charcoal-light)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}
              >
                Pure Kerala Snacks
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul
            style={{
              display: 'flex',
              gap: '2rem',
              listStyle: 'none',
              alignItems: 'center',
            }}
            className="hidden md:flex"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    color: 'var(--charcoal)',
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                    padding: '6px 0',
                    borderBottom: '2px solid transparent',
                    transition: 'border-color 200ms ease, color 200ms ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.borderBottomColor = 'var(--brand-red)';
                    (e.target as HTMLElement).style.color = 'var(--brand-red)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.borderBottomColor = 'transparent';
                    (e.target as HTMLElement).style.color = 'var(--charcoal)';
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Shop CTA */}
            <Link
              href="/shop"
              id="nav-shop-cta"
              className="btn btn-primary hidden md:inline-flex"
              style={{ padding: '10px 20px', fontSize: '0.82rem' }}
            >
              Shop Now
            </Link>

            {/* Cart Icon */}
            <Link
              href="/cart"
              id="nav-cart"
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                color: 'var(--charcoal)',
                textDecoration: 'none',
                padding: '8px',
              }}
              aria-label={`Cart — ${cartCount} items`}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {cartCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '2px',
                    right: '2px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: 'var(--brand-red)',
                    color: 'white',
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Hamburger */}
            <button
              id="nav-mobile-toggle"
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                color: 'var(--charcoal)',
              }}
              aria-label="Toggle mobile menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                {mobileOpen
                  ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                  : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
                }
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="nav-mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              style={{ overflow: 'hidden', borderTop: '1px solid rgba(0,0,0,0.1)' }}
            >
              <div style={{ padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: 'var(--charcoal)',
                      textDecoration: 'none',
                      padding: '12px 8px',
                      borderBottom: '1px solid rgba(0,0,0,0.06)',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/shop"
                  className="btn btn-primary"
                  onClick={() => setMobileOpen(false)}
                  style={{ marginTop: '12px', textAlign: 'center' }}
                >
                  Shop Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
