import { PiBackspace } from "react-icons/pi";

function EditSession({
  sessionArr,
  update,
  selectedSession,
  dispatch,
}) {
  const { batch, id, course, strDate, endDate, totEnroll } = selectedSession;

  console.log(selectedSession);

  const chk = sessionArr.filter((ele) => {
    return ele.id === id;
  });

//  const xx = 

 console.log(chk[0])
  return (
    <div className="edit-container">
        <div className="alert" style={chk[0].isChecked ? {background:'rgb(155, 199, 88)'}:{background:'red'}}>
           Session is {chk[0].isChecked ? "":'not'} active
        </div>

      <div
        className="edit-icon"
        onClick={() => dispatch({ type: "ExitEditSession" })}
      >
        <PiBackspace />
      </div>

      <div className="form">
        <label htmlFor="">
          Batch
          <input type="text" value={batch} readOnly />
        </label>
        <br />

        <label htmlFor="">
          Course
          <input type="text" value={course} readOnly />
        </label>
        <label htmlFor="">
          Start Date
          <input type="text" value={strDate} readOnly />
        </label>
        <label htmlFor="">
          End Date
          <input type="text" value={endDate} readOnly />
        </label>
        <label htmlFor="">
          Enrollment Limit
          <input type="text" value={totEnroll} readOnly />
        </label>
        <br />

        <button onClick={() => update(id)}>Update</button>
      </div>
      {/* <label htmlFor="chk-active">
        {" "}
        <input
          id="chk-active"
          type="checkbox"
          checked={chk[0].isChecked}
          onChange={() => toggleCheckBox(id)}
        />
        Mark Session as active
      </label> */}
    </div>
  );
}

export default EditSession;
