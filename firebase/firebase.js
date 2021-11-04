import app from "firebase/app";
import firebaseConfig from "./config";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();
  }

  // inicia sesion del usuario
  async login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  // cierra la sesion del usuaro

  async cerrarSesion() {
    await this.auth.signOut();
  }
}

const firebase = new Firebase();

export default firebase;
