import Context from "./context/Context";
import Form from "./form/Form";
import Ui from "./ui/Ui";

const page = () => {
  return (
    <Context>
      <div className="container">
        <Form />
        <Ui />
      </div>
    </Context>
  );
};

export default page;
