function SideBar({ dispatch, status,user_name }) {
  // if(status ==="login") return

  return (
    <div className="sideBar">
      <img
        src="http://cms.joemarineng.com/resources/images/certsys.png"
        alt="cms logo"
        onClick={() => dispatch({ type: "LoggedIn", payload: "" })}
      />
      <ul>
        <li
          onClick={() =>
            status !== "login" && 
            dispatch({ type: "LoggedIn", payload: "course" })
          }
        >
          Courses
        </li>
        <li
          onClick={() =>
            status !== "login" &&
            dispatch({ type: "LoggedIn", payload: "session" })
          }
        >
          Sessions
        </li>
        <li>Course Reservation</li>
        <li
          onClick={() =>
            status !== "login" &&
            dispatch({ type: "LoggedIn", payload: "enroll" })
          }
        >
          Enrollment
        </li>
        <li onClick={() => status !== "login" && dispatch({ type: "LoggedIn", payload: "student" })}>
          Students
        </li>
        <li
          onClick={() => status !== "login" && user_name === "admin" && dispatch({ type: "LoggedIn", payload: "certificate" })}
        >
          Certificate
        </li>
        <li onClick={() => status !== "login" && user_name === "admin" && dispatch({ type: "LoggedIn", payload: "report" })}>
          Report
        </li>
        <li onClick={() => status !== "login" && user_name === "admin" && dispatch({ type: "LoggedIn", payload: "security" })}>
          Security
        </li>
        <li onClick={() => status !== "login" && user_name === "admin" && dispatch({ type: "LoggedIn", payload: "setting" })}>
          Settings
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
