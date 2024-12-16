import type { Action, Color, Impact, Widget } from '@/types/types'

export const parseSingleWidget = (data: any): Widget => {
  if (
    typeof data !== 'object' ||
    data == null ||
    typeof data.id !== 'number' ||
    typeof data.type !== 'string' ||
    typeof data.amount !== 'number' ||
    typeof data.action !== 'string' ||
    typeof data.active !== 'boolean' ||
    typeof data.linked !== 'boolean' ||
    typeof data.selectedColor !== 'string'
  ) {
    throw new Error('Invalid widget data')
  }

  return {
    id: data.id,
    type: data.type as Impact,
    amount: data.amount,
    action: data.action as Action,
    active: data.active,
    linked: data.linked,
    selectedColor: data.selectedColor as Color,
  }
}

export const parseWidgets = (data: unknown): Widget[] => {
  if (!Array.isArray(data)) {
    throw new Error('Invalid data format: Expected array!')
  }

  return data.map((item) => parseSingleWidget(item))
}
