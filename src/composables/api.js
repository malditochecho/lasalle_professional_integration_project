import { ref } from 'vue'

export async function useApi(url) {
  const data = ref(null)
  const error = ref(null)

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN}`
    }
  })

  error.value = !response.ok ? new Error('Network response was not ok') : null
  data.value = !error.value ? await response.json() : null

  return { data, error }
}
