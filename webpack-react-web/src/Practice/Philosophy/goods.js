export const Goods = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {
          Object.keys(props.goodList).map((name, index) => (
            <GoodItem key={index} name={name} data={props.goodList[name]} />
          ))
        }
      </tbody>
    </table >
  )
}


const GoodItem = (props) => {
  return (
    <>
      <tr >
        <th>{props.name}</th>
      </tr>
      {
        props.data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.price}</td>
          </tr>
        ))
      }
    </>
  )
}
