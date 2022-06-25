import { useState } from 'react'
import './styles.css'

export default function App() {
  let [name, setName] = useState('')

  function hendleOnClick() {
    const serverUrl = 'https://api.genderize.io'
    const url = `${serverUrl}?name=${name}`

    fetch(url)
      .then(response => response.json())
      .then(item => {
        let result = `${item.name} - ${item.gender}`
        alert(result)
      })
  }

  return (
    <div className="wrap">
      <div>
        <GenderInput value={name} onChange={setName} />
        <GenderButton onClick={hendleOnClick} />
      </div>
    </div>
  )
}

function GenderInput({ onChange, onSubmit, value }) {
  return (
    <form
      className="form__input"
      onSubmit={event => {
        event.preventDefault()
        onSubmit()
      }}
    >
      <input
        className="name_value"
        type="text"
        placeholder="Put your name here"
        value={value}
        onChange={event => {
          onChange(event.target.value)
          console.log('onChange', event.target.value)
        }}
      />
    </form>
  )
}

function GenderButton({ onClick }) {
  return <button onClick={onClick}>CLICK ME</button>
}
