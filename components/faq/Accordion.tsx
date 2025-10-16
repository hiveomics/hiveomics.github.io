'use client';

import { useState } from 'react';
import type { FAQItem } from '@/lib/types';

interface AccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
  defaultOpen?: string;
}

export default function Accordion({ items, allowMultiple = false, defaultOpen }: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen ? [defaultOpen] : []);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(id);
    }
  };

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        return (
          <div key={item.id} className={`accordion-item ${isOpen ? 'accordion-item-open' : ''}`}>
            <button
              className="accordion-button"
              onClick={() => toggleItem(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              type="button"
            >
              <span className="accordion-question">{item.question}</span>
              <span className="accordion-icon" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <div
              id={`accordion-content-${item.id}`}
              className="accordion-content"
              aria-hidden={!isOpen}
              role="region"
            >
              <div className="accordion-answer">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
