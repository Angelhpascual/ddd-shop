import { create } from "zustand"

export interface CartState {
  items: { productId: string; quantity: number }[]
  setItems: (items: { productId: string; quantity: number }[]) => void
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  setItems: (items) => set({ items }),
}))
