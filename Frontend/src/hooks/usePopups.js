import usePopupsStore from '../store/popups.store'

const usePopups = () => {
  const { queue, activePopup, showAnimation, show, hide, setAnimation } =
    usePopupsStore()

  return {
    queue,
    activePopup,
    showAnimation,
    show,
    hide,
    setAnimation,
  }
}

export default usePopups
