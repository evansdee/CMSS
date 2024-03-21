import React from "react";
import EnrollTableItem from "./enrolltableitem";
function EnrollmentList({ activeIdx, enrollArr, dispatch }) {
  const [inp, setInp] = React.useState("");

  const filterEle = enrollArr.filter((ele) => {
    return ele.fullName.toLowerCase().includes(inp.toLowerCase());
  });

  const sty= {
    display:'flex',
    alignItems:"center"
  }

  return (
    activeIdx === 0 && (
      <>
        <main className="filterInput">
          <label htmlFor="" style={sty}>
            <br />
            <input
              type="text"
              placeholder="Search by Name"
              value={inp}
              onChange={(e) => setInp(e.target.value)}
            />
            <p>
                {enrollArr.length} available certificate for approval
            </p>
          </label>
        </main>
        <table className="tab">
          <thead>
            <tr>
              <th>View</th>
              <th>Student</th>
              {/* <th>Batch</th> */}
              <th>Course</th>
              <th>Enrollment Date</th>

              <th>Form Teller</th>
              <th>Bank("Tution")</th>
              <th>Teller Number</th>
              <th>Amount Paid</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {!inp
              ? enrollArr.map((ele) => {
                  return (
                    <EnrollTableItem
                      key={ele.id}
                      ele={ele}
                      dispatch={dispatch}
                    />
                  );
                })
              : filterEle.map((ele) => {
                  return (
                    <EnrollTableItem
                      key={ele.id}
                      ele={ele}
                      dispatch={dispatch}
                    />
                  );
                })}
          </tbody>
        </table>
      </>
    )
  );
}

export default EnrollmentList;
