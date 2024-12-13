import { ref } from 'vue'

export function useFetch<TResponse, TError = unknown>(
  url: string,
  options: RequestInit,
  parseDto: (data: unknown) => TResponse,
) {
  const data = ref<TResponse | null>(null)
  const error = ref<TError | null>(null)
  const isLoading = ref(false)

  const fetchData = async () => {
    isLoading.value = true
    error.value = null

    try {
      const response = await fetch(url, options)
      const jsonData = await response.json()

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`)
      }

      data.value = parseDto ? parseDto(jsonData) : (jsonData as TResponse)
    } catch (err) {
      error.value = err as TError
    } finally {
      isLoading.value = false
    }
  }

  return {
    data,
    error,
    isLoading,
    fetchData,
  }
}
