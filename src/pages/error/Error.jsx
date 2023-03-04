import { useNavigate } from "react-router-dom";
import "./error.scss";

const Error = ({show,setShow}) => {
  const navigate = useNavigate()

  return (
    <div className="notfound">
      <h2>404 NOT FOUND</h2>
      <div className="btn-div">
        <button onClick={() => (navigate('/'), setShow(!show))}>go home</button>
        <button onClick={() => navigate(-1)}>go back</button>
      </div>
    </div>
  );
};

export default Error;
