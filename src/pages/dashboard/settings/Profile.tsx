import Settings from "./screen/Settings"
import Top from "./screen/Top"

const Profile = () => {
    return (
        <section className='md:ml-[16rem] max-w-[70rem]  my-6 absolute top-0 w-full h-screen'>
            <Top/>
            <Settings/>
        </section>
    )   
}

export default Profile
