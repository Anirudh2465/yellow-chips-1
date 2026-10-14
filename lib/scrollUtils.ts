// Scroll chapter configuration — maps scroll offset (0–1) to chapter data
export interface Chapter {
  id: string;
  label: string;
  startOffset: number; // 0–1
  endOffset: number;   // 0–1
  sceneNote: string;
}

export const CHAPTERS: Chapter[] = [
  {
    id: 'hero',
    label: 'Hero',
    startOffset: 0,
    endOffset: 0.15,
    sceneNote: 'Sunrise mist on backwaters, boat begins journey',
  },
  {
    id: 'ingredients',
    label: 'Ingredients',
    startOffset: 0.15,
    endOffset: 0.30,
    sceneNote: 'Banana grove glides past on the bank',
  },
  {
    id: 'products',
    label: 'Products',
    startOffset: 0.30,
    endOffset: 0.45,
    sceneNote: 'Village market ghat — 3D chips bags float up',
  },
  {
    id: 'story',
    label: 'Story',
    startOffset: 0.45,
    endOffset: 0.60,
    sceneNote: 'Spice plantation shore, golden afternoon light',
  },
  {
    id: 'franchise',
    label: 'Franchise',
    startOffset: 0.60,
    endOffset: 0.75,
    sceneNote: 'Yellow Chips kiosk glowing on the river bank',
  },
  {
    id: 'testimonials',
    label: 'Testimonials',
    startOffset: 0.75,
    endOffset: 0.88,
    sceneNote: 'Festive waterfront crowd at dusk',
  },
  {
    id: 'cta',
    label: 'CTA',
    startOffset: 0.88,
    endOffset: 0.97,
    sceneNote: 'Sunset dock — boat approaches',
  },
  {
    id: 'footer',
    label: 'Footer',
    startOffset: 0.97,
    endOffset: 1.0,
    sceneNote: 'Boat docks, lanterns glow',
  },
];

/** Get the active chapter index for a given scroll offset (0–1) */
export function getActiveChapter(scrollOffset: number): number {
  for (let i = CHAPTERS.length - 1; i >= 0; i--) {
    if (scrollOffset >= CHAPTERS[i].startOffset) return i;
  }
  return 0;
}

/** Map a scroll offset to local progress within its chapter (0–1) */
export function chapterProgress(scrollOffset: number, chapterIndex: number): number {
  const ch = CHAPTERS[chapterIndex];
  const range = ch.endOffset - ch.startOffset;
  if (range === 0) return 1;
  return Math.min(1, Math.max(0, (scrollOffset - ch.startOffset) / range));
}

/** Total number of "scroll pages" to give the scene (used by ScrollControls `pages` prop) */
export const TOTAL_SCROLL_PAGES = 10;
