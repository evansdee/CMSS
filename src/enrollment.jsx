import EnrollNewStudent from "./enrollNewStudent";
import EnrollmentList from "./enrollmentList";

function Enrollment({
  dispatch,
  enrollInput,
  sessionArr,
  activeIdx,
  EnrollFormState,
  countries,
  states,
  enrollArr,
  selectedEnroll,
}) {
  const { amount, chk, bank, selectedCourse, tellerNum, courses } = enrollInput;

  function AddCourse() {
    const newObj = {
      amount,
      chk,
      bank,
      selectedCourse,
      tellerNum,
    };

    dispatch({ type: "AddCourseEnroll", payload: newObj });
  }

  function AddStudentInfo() {
    courses.isValue &&
      dispatch({ type: "AddStudentInfo", payload: enrollInput });
  }
  return (
    <div className="enrollment">
     
          <header>
            <p
              className={activeIdx === 0 ? "activeIdx" : ""}
              onClick={() => dispatch({ type: "Set_Active", payload: 0 })}
            >
              Enrollment List
            </p>
            <p
              className={activeIdx === 1 ? "activeIdx" : ""}
              onClick={() => dispatch({ type: "Set_Active", payload: 1 })}
            >
              Enroll New Student
            </p>
            <p
              className={activeIdx === 2 ? "activeIdx" : ""}
              onClick={() => dispatch({ type: "Set_Active", payload: 2 })}
            >
              Enroll Existing Student
            </p>
          </header>
          <EnrollmentList
            dispatch={dispatch}
            activeIdx={activeIdx}
            enrollArr={enrollArr}
          />
          <EnrollNewStudent
            sessionArr={sessionArr}
            EnrollFormState={EnrollFormState}
            countries={countries}
            states={states}
            AddStudentInfo={AddStudentInfo}
            AddCourse={AddCourse}
            dispatch={dispatch}
            enrollInput={enrollInput}
            activeIdx={activeIdx}
          />
    
    </div>
  );
}

export default Enrollment;
