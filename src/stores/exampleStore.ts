// This is an example zustand store

import { create } from 'zustand'

const useExampleStore = create((set) => ({
	count: 0,
	addToCart: () =>
		set((state: { count: number }) => ({ count: state.count + 1 })),
	removeAllCart: () => set({ count: 0 })
}))

export default useExampleStore
