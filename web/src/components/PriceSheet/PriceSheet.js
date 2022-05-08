const PriceSheet = ({ prices }) => {
  const displayAsMoney = (value, curVal) => {
    return (value / 100).toLocaleString('en-US', {
      style: 'currency',
      currency: curVal,
    })
  }

  return (
    <table className="tg">
      <thead>
        <tr>
          <th>Cost</th>
          <th>Per</th>
          <th>Type</th>
          <th>Material</th>
          <th>Modifiers</th>
        </tr>
      </thead>
      <tbody>
        {prices.map((price) => (
          <tr key={price.id}>
            <td>{displayAsMoney(price.value, price.currency)}</td>
            <td>{price.unit}</td>
            <td>{price.type}</td>
            <td>{price.material}</td>
            <td>{price.modifiers}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PriceSheet
