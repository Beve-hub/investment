import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { firestore, auth } from '../../../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { PiUserCircleLight } from 'react-icons/pi';
import { GiCheckMark } from "react-icons/gi";
import useProfileStorage from '../../../../hooks/profile/useProfileStorage';


interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNum: string;
  postCode: string;
  state: string;
}



const Settings = () => {
  const navigate = useNavigate();
  const { startUploads } = useProfileStorage();
  const [user, setUser] = useState<UserData | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleFront = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const handleImageFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setImage(files[0]);
      
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (image) {
        await startUploads(image);
      }
     
    } catch (error) {
      alert('Failed to upload files: ' + error);
    }
  };

  useEffect(() => {
    // Listen to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate('/login'); // Navigate to login if not authenticated
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) return;
      console.log('Fetching user data for userId:', userId);

      try {
        const userDocRef = doc(firestore, 'users', userId);
        const snapshot = await getDoc(userDocRef);
        if (snapshot.exists()) {
          setUser(snapshot.data() as UserData);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <section className="md:min-h-[30rem] top-0 overflow-x-hidden overflow-y-auto">
      <div className="grid justify-center items-center">
        <div className="w-screen grid justify-center items-center gap-8">
          <div>
            <div className="rounded-lg p-10 h-[15rem] bg-[#f7f7f7]">
              <div>
                {image ? (
                  <div className="flex justify-center relative">
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Uploaded file"
                      className="rounded-full w-[8rem] h-[8rem]"
                      onClick={handleFront}
                      aria-label="Uploaded image"
                    />
                    <div>
                  
                      <GiCheckMark
                        className="absolute top-0 right-0 text-green-500 h-6 w-6 cursor-pointer"
                        onClick={handleSubmit}
                        aria-label="Submit form"
                      />
                  
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={handleFront}
                    className="grid justify-center items-center "
                    aria-label="Click to add image"
                    role="button"
                  >
                    <PiUserCircleLight size={100} />
                 
                  </div>
                )}
                <input
                  type="file"
                  id="frontValidId"
                  name="frontValidId"
                  accept="image/*"
                  onChange={handleImageFile}
                  style={{ display: 'none' }}
                  ref={imageInputRef}
                  aria-label="File upload input"
                />
                <div className='grid justify-center'>                
                  <p className="text-2xl flex gap-1">
                    <span>{user?.firstName || ''}</span><span>{user?.lastName || ''}</span>
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          {/* Personal details */}
          <div>
            <div className="max-w-[20rem] bg-[--button-color] p-3 flex items-center gap-[6rem]">
              <p>Personal Information</p>
            </div>
            <div className="mt-[2rem] grid md:grid-cols-2 gap-6">
              <div className="grid gap-3">
                <div>
                  <label>Email *</label>
                  <p className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                    {user?.email || ''}
                  </p>
                </div>
                <div>
                  <label>Post Code *</label>
                  <p className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                    {user?.postCode || ''}
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                <div>
                  <label>Phone Number *</label>
                  <p className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                    {user?.phoneNum || ''}
                  </p>
                </div>
                <div>
                  <label>State *</label>
                  <p className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                    {user?.state || ''}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Security details */}
          <div>
            <div className="max-w-[20rem] bg-[--button-color] p-3 flex items-center gap-[6rem]">
              <p>Security Information</p>
            </div>
            <div className="mt-[2rem] mb-[2rem] grid md:grid-cols-2 gap-6">
              <div className="grid gap-3">
                <div>
                  <label>Old Password *</label>
                  <input
                    type="password"
                    placeholder="Enter old password"
                    className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <label>New Password *</label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>

              <div className="grid gap-4">
                <div>
                  <label>Confirm Password *</label>
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[--bg-color] bg-[--button-color]">
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;