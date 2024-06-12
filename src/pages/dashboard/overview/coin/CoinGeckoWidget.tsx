import { useEffect, useRef } from 'react';


interface TradingViewWidgetProps {
  width?: string;
  height?: number;
  defaultColumn?: string;
  defaultScreen?: string;
  market?: string;
  showToolbar?: boolean;
  colorTheme?: string;
  locale?: string;
  isTransparent?: boolean;
}

const CoinGeckoWidget: React.FC<TradingViewWidgetProps> = ({
  width = 760,
  height = 620,
  defaultColumn = "overview",
  defaultScreen = "general",
  market = "forex",
  showToolbar = true,
  colorTheme = "light",
  locale = "en",
  isTransparent = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width,
      height,
      defaultColumn,
      defaultScreen,
      market,
      showToolbar,
      colorTheme,
      locale,
      isTransparent,
    });

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    // Cleanup function to remove the script when the component unmounts
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ''; // Clear the container
      }
    };
  }, [width, height, defaultColumn, defaultScreen, market, showToolbar, colorTheme, locale, isTransparent]);


  return (
    <div className="tradingview-widget-container border-2 p-4" ref={containerRef}>
    <div className="tradingview-widget-container__widget"></div>
    <div className="tradingview-widget-copyright">
      <a
        href="https://www.tradingview.com/"
        rel="noopener nofollow"
        target="_blank"
      >
        <span className="blue-text">Track all markets on TradingView</span>
      </a>
    </div>
  </div>
  );
};

export default CoinGeckoWidget;
