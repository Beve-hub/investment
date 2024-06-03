import { useEffect } from 'react';

const Chart = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.livecoinwatch.com/static/lcw-widget.js';
        script.defer = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    
      return (
        <div
          className='h-[10rem]'
          lcw-base="USD"
          lcw-d-head="true"
          lcw-d-name=""
          lcw-d-code="true"
          lcw-d-icon="true"
          lcw-color-tx="#1f2434"
          lcw-color-bg="#ffffff"
          lcw-border-w="1"
        ></div>
      );
    };

export default Chart
