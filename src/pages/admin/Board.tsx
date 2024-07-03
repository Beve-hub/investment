import RecentAdmin from "./screen/RecentAdmin"
import logo from '../../assets/logo.png'
import Card from "./screen/CardBook"
import Images from "./screen/Images"


const Board = () => {
    return (
        <section className='grid justify-center items-center w-screen h-[40rem] px-[1rem]'>
        <div className='border-b-2 border-[--bg-color] flex items-center'>
          <img src={logo} alt='' className='w-[4rem] ' />
          <p className='font-display font-bold text-2xl'>Crownstone</p>
        </div>
        <div>
            <Card/>
            <RecentAdmin/>
            <Images/>
        </div>
  </section>
    )
}

export default Board
