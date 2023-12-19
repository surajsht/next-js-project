const Transaction = () => {
  return (
    <div className="transaction-container">
      <h2 className="section-title transaction-title">Add Transaction</h2>

      <form action="">
        <div className="form-item">
          <label htmlFor="title"> Title </label>
          <input type="text" />
        </div>

        <div className="form-item">
          <label htmlFor="amount"> Amount </label>
          <input type="number" />
        </div>

        <select className="transaction-option">
          <option value="income"> Income </option>
          <option value="expense"> Expense </option>
        </select>

        <button type="submit"> Add </button>
      </form>
    </div>
  );
};

export default Transaction;
