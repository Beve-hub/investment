import CoinGeckoWidget from "../coin/CoinGeckoWidget"
import Chart from "./Chart"

const Market = () => {
    return (
        <div className="grid md:grid-cols-2 justify-center items-center my-[3rem] max-w-[40rem] ">
            <div className="w-[25%]">
                <Chart/>
            </div>
            <div className="w-[50%] sm:flex hidden">
                <CoinGeckoWidget/>
            </div>
        </div>
    )
}

export default Market
