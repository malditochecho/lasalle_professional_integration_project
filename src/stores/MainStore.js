import { defineStore } from 'pinia'

import { db } from '@/config/firebase'
import { doc, getDoc, getDocs, addDoc, collection, query, where } from 'firebase/firestore'

export const useMainStore = defineStore('MainStore', {
  actions: {
    async createDocument(collectionName, data) {
      try {
        const docRef = await addDoc(collection(db, collectionName), data)
        console.log('Document written with ID: ', docRef.id)
      } catch (e) {
        console.error('Error adding document: ', e)
      }
    },
    async createDocumentWithId(collectionName, docId, data) {
      const docRef = doc(db, collectionName, docId)
      const res = await addDoc(docRef, data)
      console.log(res)
    },
    async fetchDocument(collectionName, docId) {
      const docRef = doc(db, collectionName, docId)
      const docSnapshot = await getDoc(docRef)
      return docSnapshot
    },
    async fetchDocuments(collectionName) {
      const colRef = collection(db, collectionName)
      const querySnapshot = await getDocs(colRef)
      return querySnapshot
    },
    async fetchDocumentsWithQuery(collectionName, conditions) {
      const queryConstrains = []
      conditions.forEach((condition) => {
        const constrain = where(condition.field, condition.operator, condition.value)
        queryConstrains.push(constrain)
      })
      const colRef = collection(db, collectionName)
      const q = query(colRef, ...queryConstrains)
      const querySnapshot = await getDocs(q)
      return querySnapshot
    }
  }
})
