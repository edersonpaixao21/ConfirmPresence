import { useState } from 'react'
import { useEffect } from 'react'
import './styles.css'

// Através de pros conseguimos acessar as propriedades do "Home"
export function Card({ name, time }) {
  const [githubPhoto, setGithubPhoto] = useState('')

  const fetchAPI = GitHubName => {
    fetch(`https://api.github.com/users/` + GitHubName)
      .then(response => response.json())
      .then(data => {
        setGithubPhoto(data.avatar_url)
      })
  }

  useEffect(() => {
    fetchAPI(name)
  }, [])

  return (
    <div className="card">
      <img className="imgCircle" src={githubPhoto} alt={`Foto de ${name}`} />
      <strong>{name}</strong>

      <small>{time}</small>
    </div>
  )
}
