import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyA5tYqg9jqzstOX98jZudJqdVKAg83_K4s",
authDomain: "kontak-maz-puput.firebaseapp.com",
projectId: "kontak-maz-puput",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
