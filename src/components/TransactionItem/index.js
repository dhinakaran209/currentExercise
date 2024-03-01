import './index.css'

const TransactionItem = props => {
  const {details} = props
  const {option, title, amount} = details

  return (
    <li className="transaction">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{option}</p>
    </li>
  )
}

export default TransactionItem
