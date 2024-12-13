import { useFetch } from '@/composables/useFetch'
import { parseWidgets } from '@/dto/parseWidget'
import type { Widget } from '@/types'

export async function getWidgets(): Promise<Widget[]> {
  const apiURL: string =
    'https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets'
  const { data, fetchData } = useFetch<Widget[]>(apiURL, {}, (json) => parseWidgets(json))

  await fetchData()

  return data.value || []
}
