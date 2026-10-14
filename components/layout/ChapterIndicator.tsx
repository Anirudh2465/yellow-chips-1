'use client';

import { useEffect, useState } from 'react';
import { CHAPTERS, getActiveChapter } from '@/lib/scrollUtils';

interface ChapterIndicatorProps {
  scrollOffset: number; // 0–1, passed down from parent
}

export default function ChapterIndicator({ scrollOffset }: ChapterIndicatorProps) {
  const activeIndex = getActiveChapter(scrollOffset);

  const scrollToChapter = (index: number) => {
    const target = CHAPTERS[index].startOffset;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: target * maxScroll, behavior: 'smooth' });
  };

  return (
    <nav
      className="chapter-indicator"
      aria-label="Page chapters"
      id="chapter-indicator"
    >
      {CHAPTERS.map((ch, i) => (
        <button
          key={ch.id}
          id={`chapter-dot-${ch.id}`}
          className={`chapter-dot ${i === activeIndex ? 'active' : ''}`}
          onClick={() => scrollToChapter(i)}
          aria-label={`Jump to ${ch.label}`}
          title={ch.label}
        >
          <span className="chapter-dot-label">{ch.label}</span>
        </button>
      ))}
    </nav>
  );
}
