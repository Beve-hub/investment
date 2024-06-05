import React, { useEffect, useRef } from 'react';

const Chart = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.livecoinwatch.com/static/lcw-widget.js';
    script.defer = true;

    if (widgetRef.current) {
      widgetRef.current.appendChild(script);
    }

    return () => {
      if (widgetRef.current) {
        widgetRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      className="livecoinwatch-widget-3"
      ref={widgetRef}
      data-lcw-base="USD"
      data-lcw-d-head="true"
      data-lcw-d-name="true"
      data-lcw-d-code="true"
      data-lcw-d-icon="true"
      data-lcw-color-tx="#ffffff"
      data-lcw-color-bg="#1f2434"
      data-lcw-border-w="1"
    ></div>
      );
    };

export default Chart
