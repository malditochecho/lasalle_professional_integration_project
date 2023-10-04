import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { useMainStore } from '../MainStore' // import the mainstore wich contains generic actions for crud operations

export default {
  // async fetchUserInfo(userId) {
  //   const mainStore = useMainStore()
  //   const docSnapshot = await mainStore.fetchDocument('users', userId)
  //   if (docSnapshot.exists()) {
  //     this.user = { ...docSnapshot.data() }
  //   } else {
  //     console.info('No such user!')
  //   }
  // },

  /**
   *
   */
  async authenticateWithGoogle() {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    const userCredential = await signInWithPopup(auth, provider)
    this.persistCurrentUser(userCredential)
  },

  /**
   *
   * @todo implement a method that save additional user data to firestore
   */
  async registerWithEmailAndPassword(email, password) {
    const auth = getAuth()
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    this.persistCurrentUser(userCredential)
    // await this.fetchUserInfo(this.user.uid)
  },

  /**
   *
   * @todo implement a method that retrieve additional user data from firestore
   */
  async loginWithEmailAndPassword(email, password) {
    const auth = getAuth()
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    this.persistCurrentUser(userCredential)
    // await this.fetchUserInfo(this.user.uid)
  },

  /**
   *
   */
  async logout() {
    const mainStore = useMainStore()
    await mainStore.createDocument('log', {
      action: 'logout',
      user: this.user?.uid,
      date: new Date()
    })
    await signOut(getAuth())
    this.clearCurrentUser()
  },

  /**
   * Save the received user data to local storage and update the user state
   *
   * @author: Sergio Rodriguez
   * @param {object} userCredential A firebase auth user credential object
   * @returns {void}
   */
  persistCurrentUser(userCredential) {
    const { user } = userCredential
    localStorage.setItem('currentUser', JSON.stringify(user)) // Save the user data to local storage
    this.user = user // Update the user state
  },

  /**
   * Remove the user data from local storage and update the user state
   *
   * @author: Sergio Rodriguez
   * @returns {void}
   */
  clearCurrentUser() {
    localStorage.removeItem('currentUser') // Remove the user data from local storage
    this.user = null // Update the user state
  }

  //   async fetchAlumnos() {
  //     const mainStore = useMainStore()
  //     const querySnapshot = await mainStore.fetchDocuments('alumnos')
  //     querySnapshot.docs.forEach((doc) => {
  //       this.items.push({ ...doc.data(), id: doc.id })
  //     })
  //   },
  //   async fetchAlumnosCurso(curso) {
  //     const mainStore = useMainStore()
  //     const conditions = [{ field: 'curso', operator: '==', value: curso }]
  //     const querySnapshot = await mainStore.fetchDocumentsWithQuery('alumnos', conditions)
  //     querySnapshot.docs.forEach((doc) => {
  //       this.items.push({ ...doc.data(), id: doc.id })
  //     })
  //   },
  //   async fetchAlumnosEstablecimiento(establecimientoId) {
  //     const mainStore = useMainStore()

  //     var strlength = establecimientoId.length
  //     var strFrontCode = establecimientoId.slice(0, strlength - 1)
  //     var strEndCode = establecimientoId.slice(strlength - 1, establecimientoId.length)
  //     var startcode = establecimientoId
  //     var endcode = strFrontCode + String.fromCharCode(strEndCode.charCodeAt(0) + 1)

  //     const conditions = [
  //       { field: 'curso', operator: '>=', value: startcode },
  //       { field: 'curso', operator: '<', value: endcode }
  //     ]
  //     const querySnapshot = await mainStore.fetchDocumentsWithQuery('alumnos', conditions)
  //     querySnapshot.docs.forEach((doc) => {
  //       this.items.push({ ...doc.data(), id: doc.id })
  //     })
  //   }
}
