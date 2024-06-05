import { useEffect } from 'react';

const CoinGeckoWidget = () => {
  useEffect(() => {
    const scriptId = 'tradingview-widget-script';
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        title_raw: "Cryptocurrencies",
        belowLineFillColorGrowing: "rgba(60, 188, 152, 0.05)",
        gridLineColor: "rgba(233, 233, 234, 1)",
        scaleFontColor: "rgba(218, 221, 224, 1)",
        title: "Cryptocurrencies",
        tabs: [
          {
            title_raw: "Overview",
            symbols: [
              { s: "BITFINEX:BTCUSD" },
              { s: "BITFINEX:ETHUSD" },            
              { s: "COINBASE:BCHUSD" },
              { s: "COINBASE:LTCUSD" }
              
            ],
            title: "Overview"
          }
        ],
        plotLineColorFalling: "rgba(255, 74, 104, 1)",
        plotLineColorGrowing: "rgba(60, 188, 152, 1)",
        showChart: true,
        title_link: "/markets/cryptocurrencies/prices-all/",
        locale: "en",
        symbolActiveColor: "rgba(242, 250, 254, 1)",
        belowLineFillColorFalling: "rgba(255, 74, 104, 0.05)",
        height: 620,
        width: 700
      });
      document.querySelector('.tradingview-widget-container__widget')?.appendChild(script);
    }

    return () => {
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container mx-[5rem] max-w-[20rem] md:w-96">    
      <div className="tradingview-widget-container__widget"></div>
     
    </div>
  );
};

export default CoinGeckoWidget;
