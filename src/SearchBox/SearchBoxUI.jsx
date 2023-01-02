import './SearchBox.css'

export default function SearchBoxUI({ fnText, fnAdd }) {
  return (
    <div className='search-box'>
      <input
        className='search-box-input'
        type="text"
        placeholder='Ingresa una tarea'
        onChange={fnText} />
      <button
        className='search-box-button'
        onClick={fnAdd}>Create</button>
    </div>
  )
}