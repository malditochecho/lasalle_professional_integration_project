import { useMainStore } from '../MainStore'

export default {
  async fetchList(listName) {
    const mainStore = useMainStore()
    const conditions = [{ field: 'name', operator: '==', value: listName }]
    const querySnapshot = await mainStore.fetchDocumentsWithQuery('movieLists', conditions)
    if (!querySnapshot.empty) return querySnapshot.docs[0].data()?.items
    console.log('No matching documents.')
  }
}
