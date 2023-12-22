export const InputSearch = (props) => {
  return (
    <input type="text" onChange={props.change} placeholder="Search..." name="" />
  )
}

export const SelectSearch = (props) => {
  return (
    <label>
      <input type="checkbox" onClick={props.checked} className="select" />
      Only show products in stock
    </label>
  )
}