import React from 'react';

export default function Ticker({ items }) {
  const displayItems = items || ["Strategy", "Identity", "Development", "Interactive"];

  return (
    <section className="py-24 border-y border-outline-variant overflow-hidden whitespace-nowrap bg-surface-container-lowest">
      <div className="inline-flex w-max animate-ticker" style={{ animation: "ticker 25s linear infinite" }}>
        {[...Array(4)].map((_, blockIndex) => (
          <div key={blockIndex} className="flex items-center gap-12 px-6">
            {displayItems.map((item, itemIndex) => (
              <React.Fragment key={itemIndex}>
                <span className={`font-headline-md text-headline-md uppercase text-on-surface-variant ${itemIndex % 2 === 0 ? 'opacity-30' : ''}`}>
                  {item}
                </span>
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
