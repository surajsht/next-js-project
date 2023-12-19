const Balance = () => {
  return (
    <div className="balance-container">
      <div className="balance-item">
        <span className="balance-title">Your Income </span>
        <span className="balance-amount"> Rs.100 </span>
      </div>

      <div className="balance-item">
        <span className="balance-title">Your Balance </span>
        <span className="balance-amount"> Rs.1058 </span>
      </div>

      <div className="balance-item">
        <span className="balance-title">Your Expenses </span>
        <span className="balance-amount"> Rs.348 </span>
      </div>
    </div>
  );
};

export default Balance;
