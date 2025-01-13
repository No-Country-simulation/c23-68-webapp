import { useCallback, useMemo } from 'react'
import usePopupsStore from '../store/popups.store'

const usePopup = (popUpId) => {
  const { activePopup, show, hide } = usePopupsStore()
  const metadataId = useMemo(
    () => activePopup?.metadata?.id || '',
    [activePopup]
  )
  const isActive = activePopup?.id === popUpId

  const onShow = useCallback(
    (props) => show({ ...props, popUpId }),
    [show, popUpId]
  )

  const onHide = useCallback(() => {
    if (metadataId) {
      hide({ popUpId, metadataId })
    }
  }, [hide, popUpId, metadataId])

  return {
    isActive,
    activePopup,
    show: onShow,
    hide: onHide,
  }
}

export default usePopup
