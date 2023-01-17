import { initializeApp } from 'firebase/app';
import { getFirestore, query, collection, where, getDocs, addDoc } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { firebaseConfig } from "./config";

const firebase = initializeApp(firebaseConfig);


 const auth = getAuth();
const db = getFirestore();
// export const firestore = firebase.firestore();

const googleProvider = new GoogleAuthProvider();
//  const signInWithGoogle = () => auth.signInWithPopup(auth, googleProvider);

const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

export {
    auth,
    db,
    signInWithGoogle
};