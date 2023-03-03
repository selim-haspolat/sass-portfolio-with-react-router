import "./error.scss";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="notfound">
      <h2>404 NOT FOUND</h2>
      <div className="btn-div">
        <button onClick={() => navigate("/")}>go home</button>
        <button onClick={() => navigate(-1)}>go back</button>
      </div>
    </div>
  );
};

export default Error;
