import React, { useEffect } from 'react'

const PlanerkaWidget = () => {
  useEffect(() => {
    // Проверяем, загружен ли уже скрипт
    if (!document.querySelector('script[src="https://planerka.app/meet/assets/external/embed.js?v=0.1"]')) {
      const script = document.createElement('script')
      script.src = 'https://planerka.app/meet/assets/external/embed.js?v=0.1'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div
      className="app-planerka-embed"
      data-planerka-embed="default"
      data-planerka-url="https://planerka.app/meet"
      data-planerka-user="german-leontiev"
      data-planerka-event="30"
    ></div>
  )
}

export default PlanerkaWidget
