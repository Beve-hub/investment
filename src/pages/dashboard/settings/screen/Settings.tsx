import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { firestore, auth } from "../../../../firebase";
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

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
  const [user, setUser] = useState<UserData | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

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
    <section className='md:min-h-[30rem] top-0 overflow-x-hidden overflow-y-auto'>
      <div className='grid justify-center items-center'>
        <div className='mt-20 mb-24 max-w-[40rem] flex justify-around'>
          
          <p className='font-bold text-3xl'>Settings</p>
        </div>
        <div className='w-screen grid justify-center items-center gap-8'>
          {/* Personal details */}
          <div>
            <div className='max-w-[20rem] bg-[--button-color] p-3 flex items-center gap-[6rem]'>
              <p>Personal Information</p>
            </div>
            <div className='mt-[2rem] grid md:grid-cols-2 gap-6'>
              <div className='grid gap-3'>
                <div>
                  <label>First Name *</label>
                  <input
                    type="text"
                    placeholder={user?.firstName || ''}
                    readOnly
                    className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <label>Email *</label>
                  <p className='block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'>{user?.email || ''}</p>
                </div>
                <div>
                  <label>Post Code *</label>
                  <p className='block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'>{user?.postCode || ''}</p>
                </div>
              </div>

              <div className='grid gap-3'>
                <div>
                  <label>Last Name *</label>
                  <p className='block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'>{user?.lastName || ''}</p>
                </div>
                <div>
                  <label>Phone Number *</label>
                  <p className='block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'>{user?.phoneNum || ''}</p>
                </div>
                <div>
                  <label>State *</label>
                  <p className='block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'>{user?.state || ''}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Security details */}
          <div>
            <div className='max-w-[20rem] bg-[--button-color] p-3 flex items-center gap-[6rem]'>
              <p>Security Information</p>
            </div>
            <div className='mt-[2rem] mb-[2rem] grid md:grid-cols-2 gap-6'>
              <div className='grid gap-3'>
                <div>
                  <label>Old Password *</label>
                  <input
                    type='password'
                    placeholder='Enter old password'
                    className='block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  />
                </div>
                <div>
                  <label>New Password *</label>
                  <input
                    type='password'
                    placeholder='Enter new password'
                    className='block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  />
                </div>
              </div>

              <div className='grid gap-4'>
                <div>
                  <label>Confirm Password *</label>
                  <input
                    type='password'
                    placeholder='Confirm new password'
                    className='block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  />
                </div>
                <button
                  className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[--bg-color] bg-[--button-color]'
                >
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
