import './SearchBar.css'

const SearchBar = ({ value, onChange, placeholder = "Buscar ciudad o país..." }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="search-bar"
    />
  )
}

export default SearchBar