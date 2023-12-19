import Balance from "./ui/Balance/Balance";
import History from "./ui/History/History";
import Transaction from "./ui/Transaction/Transaction";

const page = () => {
  return (
    <div className="container">
      <Balance />
      <div className="transaction-history-container">
        <Transaction />
        <History />
      </div>
    </div>
  );
};

export default page;
