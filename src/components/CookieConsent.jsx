import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    setAccepted(localStorage.getItem('cookieConsent') === 'true')
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setAccepted(true)
  }

  if (accepted) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 z-50 bg-black text-white px-6 py-4 rounded-xl shadow-xl max-w-md">
      <p className="text-sm mb-2">
        We use cookies for analytics and improving your experience. By continuing, you agree to our cookie policy.
      </p>
      <button
        onClick={handleAccept}
        className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded text-white text-sm font-medium"
      >
        Accept
      </button>
    </div>
  )
}
