import { addDoc, collection } from 'firebase/firestore';
import { db } from '../utils/firebaseConfig';

const sendAlert = async (type: string) => {
  await addDoc(collection(db, 'alerts'), {
    type,
    timestamp: Date.now(),
    location: { lat: 45.4215, lng: -75.6991 },
    triggeredBy: 'demo-flagger-001'
  });
};
