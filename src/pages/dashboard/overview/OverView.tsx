import Top from "./top/Top";
import Card from './card/Card';
import Recent from "./recent/Recent";
import Market from "./chart/Market";



const OverView = () => {
    return (
        <section className='sm:ml-[16rem]  max-w-[70rem]  my-6 absolute top-0 w-full  h-screen'>
            <Top />
            <Card />
            <Market/>
            <Recent  />            
            
        </section>
    );
}

export default OverView;
