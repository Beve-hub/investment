import CoinGeckoWidget from "../coin/CoinGeckoWidget"
import Chart from "./Chart"

const Market = () => {
    return (
        <div className="grid md:grid-cols-2 justify-center items-center my-[3rem] max-w-[50rem] ">
            
            <div className="w-[20%]">
                <Chart/>
            </div>
            <div className="w-[40%] sm:grid hidden">
                <CoinGeckoWidget />
            </div>
        </div>
    )
}

export default Market
