import './index.css'

const MoneyDetails = props => (
  <div className="wallets-container">
    <div className="wallet">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
        alt="balance"
        className="wallet-img"
      />
      <div>
        <p>Your Balance</p>
        <p>000</p>
      </div>
    </div>
    <div className="wallet">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        alt="income"
        className="wallet-img"
      />
      <div>
        <p>Your Income</p>
        <p>000</p>
      </div>
    </div>
    <div className="wallet">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        alt="expenses"
        className="wallet-img"
      />
      <div>
        <p>Your Expenses</p>
        <p>000</p>
      </div>
    </div>
  </div>
)
export default MoneyDetails
