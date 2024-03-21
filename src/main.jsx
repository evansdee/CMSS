import { CgFileDocument } from "react-icons/cg";
import { GrCertificate } from "react-icons/gr";
import { PiStudent } from "react-icons/pi";
import { TfiTimer } from "react-icons/tfi";

function Main({ dispatch, user_name }) {
  return (
    <main>
      <div onClick={() => dispatch({ type: "LoggedIn", payload: "enroll" })}>
        <CgFileDocument className="icon" />
        <p>enrollment</p>
      </div>
      <div
        onClick={() =>
          user_name === "admin" &&
          dispatch({ type: "LoggedIn", payload: "certificate" })
        }
      >
        <GrCertificate className="icon" />
        <p>certificate</p>
      </div>
      <div onClick={() => dispatch({ type: "LoggedIn", payload: "student" })}>
        <PiStudent className="icon" />
        <p>students</p>
      </div>
      <div onClick={() => dispatch({ type: "LoggedIn", payload: "session" })}>
        <TfiTimer className="icon" />
        <p>session</p>
      </div>
    </main>
  );
}

export default Main;
