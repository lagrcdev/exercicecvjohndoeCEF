import { useState, useEffect } from 'react'
import Profile from './components/Profile'
import './App.css'

function App() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/users/github-john-doe')
      .then(response => response.json())
      .then(data => {
        setProfile(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Erreur lors du chargement du profil.')
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="message">Chargement...</p>
  if (error) return <p className="message">{error}</p>

  return(
    <div className="app">
      <h1>Profil GitHub de John Doe</h1>
      <Profile profile={profile} />
    </div>
  )
}

export default App