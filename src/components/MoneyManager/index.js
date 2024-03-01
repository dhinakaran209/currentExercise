import {Component} from 'react'
import './index.css'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    option: transactionTypeOptions[0].optionId,
  }

  changeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  changeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  selectType = event => {
    const selected = event.target.value
    this.setState({option: selected})
  }

  addTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, option} = this.state
    const optionTxn = transactionTypeOptions.find(
      eachItem => eachItem.optionId === option,
    )
    const displayOption = optionTxn.displayText
    const transaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      option: displayOption,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, transaction],
      titleInput: '',
      amountInput: '',
      option: transactionTypeOptions[0].optionId,
    }))

    console.log(transaction)
  }

  render() {
    const {transactionList} = this.state
    console.log(transactionList)

    return (
      <>
        <div className="app-container">
          <div className="responsive-container">
            <div className="header-container">
              <h1>Hi Richard</h1>
              <p>
                Welcome back to your
                <span className="money-manager-text"> Money manager</span>
              </p>
            </div>
            <MoneyDetails />
            <form className="form-container">
              <h1>Add Transaction</h1>
              <label htmlFor="title">TITLE</label>
              <input
                onChange={this.changeTitle}
                id="title"
                placeholder="TITLE"
                type="text"
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                onChange={this.changeAmount}
                id="amount"
                placeholder="AMOUNT"
                type="text"
              />
              <label htmlFor="select">TYPE</label>
              <select onChange={this.selectType} id="select">
                {transactionTypeOptions.map(eachItem => (
                  <option value={eachItem.optionId} key={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <button
                onClick={this.addTransaction}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
            <div className="transactions-container">
              <h1>History</h1>
              <div className="table-transaction">
                <ul>
                  <li className="table-header">
                    <p className="table-cell">Title</p>
                    <p className="table-cell">Amount</p>
                    <p className="table-cell">Type</p>
                  </li>
                  {transactionList.map(eachItem => (
                    <TransactionItem details={eachItem} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default MoneyManager
