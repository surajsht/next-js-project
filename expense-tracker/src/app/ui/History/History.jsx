const History = () => {
  return (
    <div className="history-container">
      <h1 className="section-title history-title">History</h1>

      <div className="history-record-container">
        <div className="history-head">
          <span> Title </span>
          <span> Amount </span>
          <span> Type </span>
        </div>

        <div className="history-body">
          <div className="history-item">
            <span> Salary </span>
            <span> Rs.100 </span>
            <span> Income </span>
            <button> Del </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
