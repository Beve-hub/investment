import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from "../../firebase";

interface Image {
  createdAt: string;
  imageUrl: string;
}

const useProfileStore = (collectionName: string) => {
  const [docs, setDocs] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = () => {
      const q = query(collection(db, collectionName), orderBy("createdAt", "desc"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const images: Image[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const imageUrl = data.imageUrl;
          const createdAt = data.createdAt.toDate().toISOString();
          images.push({ imageUrl, createdAt });
        });
        setDocs(images);
        setIsLoading(false);
      }, (error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });

      return unsubscribe;
    };

    const unsubscribe = getData();

    return () => {
      unsubscribe && unsubscribe();
    };
  }, [collectionName]);

  return { docs, isLoading };
}

export default useProfileStore;
