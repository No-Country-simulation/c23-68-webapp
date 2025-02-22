import { useEffect } from 'react'
import usePopups from '../../hooks/usePopups'

// eslint-disable-next-line react/prop-types
function PopupsProvider({ children }) {
  const { showAnimation, setAnimation } = usePopups()

  useEffect(() => {
    if (showAnimation) {
      const timer = setTimeout(() => {
        setAnimation(false)
      }, 1200)

      return () => clearTimeout(timer)
    }
  }, [showAnimation, setAnimation])

  return <>{children}</>
}

export default PopupsProvider
