import { create } from 'zustand'

const usePopupsStore = create((set) => ({
  queue: [],
  activePopup: null,
  showAnimation: false,
  show: ({ popUpId, pushMethod = 'append', position, metadata }) =>
    set((state) => {
      const newPopup = {
        id: popUpId,
        timestamp: Date.now(),
        metadata,
      }

      if (state.queue.some((popup) => popup.metadata?.id === metadata?.id)) {
        return state
      }

      let newQueue
      if (pushMethod === 'prepend') {
        newQueue = [newPopup, ...state.queue]
      } else if (pushMethod === 'append') {
        newQueue = [...state.queue, newPopup]
      } else if (
        pushMethod === 'insert' &&
        position !== undefined &&
        position >= 0
      ) {
        newQueue = [
          ...state.queue.slice(0, position),
          newPopup,
          ...state.queue.slice(position),
        ]
      } else {
        newQueue = state.queue
      }

      return {
        queue: newQueue,
        activePopup: newQueue[0] || null,
      }
    }),

  hide: ({ popUpId, metadataId }) =>
    set((state) => {
      const newQueue = state.queue.filter(
        (popup) => !(popup.id === popUpId && metadataId === popup.metadata?.id)
      )

      return {
        queue: newQueue,
        activePopup: newQueue[0] || null,
      }
    }),

  setAnimation: (show) =>
    set(() => ({
      showAnimation: show,
    })),
}))

export default usePopupsStore
