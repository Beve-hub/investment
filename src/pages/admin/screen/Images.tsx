import useFireStore from "../../../hooks/useFireStore";


interface Image {
    imageUrl: string;
    createdAt: string; // If createdAt is a timestamp, use `Date` type instead.
}

const Images = () => {
    const { docs: images } = useFireStore('images') as { docs: Image[] };

    
    return (
        <div >
            <p className='font-bold text-xl py-4'>Client Valid IDs</p>
            <div className='grid md:grid-cols-6'>
                {images.map(image => (
                    <div className='bg-[--layer-colo] p-4 h-[13rem] w-[10rem] rounded-lg'>
                    <div key={image.imageUrl} className='max-h-[5rem] max-w-[10rem] '>
                        <img src={image.imageUrl} alt="Client Valid ID" />
                        <div>
                            <p>Upload: <span className='font-medium text-[var(--button-color)]'>{new Date(image.createdAt).toDateString()}</span></p>
                           
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Images
