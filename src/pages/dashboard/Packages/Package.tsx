import PackageList from "./screen/PackageList"
import PackTop from './screen/PackTop';




const Package = () => {
    return (
        <section className='md:ml-[16rem] max-w-[70rem]  my-6 absolute top-0 w-full h-screen'>
            <PackTop/>
            <PackageList/>
        </section>
    )
}

export default Package
