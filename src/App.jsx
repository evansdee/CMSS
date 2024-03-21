import React from "react";
import Nav from "./nav";
import SideBar from "./sidebar";
import Course from "./course";
import Main from "./main";
import Session from "./session";
import EditSession from "./editsession";
import LogIn from "./loginpage";
// import { nanoid } from "nanoid";
import { countries, states } from "./country-states";
import Enrollment from "./enrollment";
import { initialState, reducer } from "./reducer";
import EditEnrollment from "./editenroll";
import Student from "./student";
import Certificate from "./certificate";
import Setting from "./setting";
import Report from "./report";
import Security from "./security";

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const {
    filterInput,
    status,
    user_name,
    active,
    sessionArr,
    input,
    selectedSession,
    activeIdx,
    enrollInput,
    enrollArr,
    selectedEnroll,
  } = state;

  function update(id) {
    const newArr = state.sessionArr.map((ele) => {
      return ele.id === id ? { ...ele, isChecked: !ele.isChecked } : ele;
    });

    dispatch({ type: "UpdateSelectedSession", payload: newArr });
  }

  function EnrollFormState(name, value) {
    dispatch({ type: "EnrollStateChange", payload: { name, value } });
  }
  console.log(selectedEnroll);

  return (
    <div className="App">


      <SideBar dispatch={dispatch} status={status} user_name={user_name}/>
      <main>
        <Nav status={status} dispatch={dispatch} user_name={user_name} />

        {status === "login" && (
          <div className="container">
            <LogIn dispatch={dispatch} user_name={user_name} />
          </div>
        )}
        {status === "ready" && !active && <Main dispatch={dispatch} user_name={user_name}/>}
        {active === "course" && (
          <Course dispatch={dispatch} sessionArr={sessionArr} />
        )}

        {active === "session" && (
          <>
            {selectedSession ? (
              <EditSession
                dispatch={dispatch}
                sessionArr={sessionArr}
                selectedSession={selectedSession}
                update={update}
              />
            ) : (
              <Session
                input={input}
                dispatch={dispatch}
                sessionArr={sessionArr}
                filterInput={filterInput}
                enrollArr={enrollArr}
              />
            )}
          </>
        )}

        {active === "enroll" &&
          (selectedEnroll ? (
            <EditEnrollment dispatch={dispatch} selectedEnroll={selectedEnroll}/>
          ) : (
            <Enrollment
              enrollInput={enrollInput}
              EnrollFormState={EnrollFormState}
              countries={countries}
              states={states}
              activeIdx={activeIdx}
              dispatch={dispatch}
              sessionArr={sessionArr}
              enrollArr={enrollArr}
              selectedEnroll={selectedEnroll}
            />
          ))}

          {
            active === "student" && <Student dispatch={dispatch} enrollArr={enrollArr}/>
          }

          {
            user_name === "admin" && active === "certificate" && <Certificate/>
          }
          {
            user_name === "admin" && active === "report" && <Report/>
          }
          {
            user_name === "admin" && active === "security" && <Security/>
          }
          {
            user_name === "admin" && active === "setting" && <Setting/>
          }
      </main>
    </div>
  );
}

export default App;
