import Top from "./top/Top";
import Card from './card/Card';
import Recent from "./recent/Recent";
import CoinGeckoWidget from "./coin/CoinGeckoWidget";

const OverView = () => {
    return (
        <section className='md:ml-[16rem] max-w-[70rem]  my-6 absolute top-0 w-full h-screen'>
            <Top />
            <Card />
            <Recent  />
            <CoinGeckoWidget/>
        </section>
    );
}

export default OverView;
