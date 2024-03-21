import React from "react";
import TableItem from "./tableitem";

function Session({ sessionArr,enrollArr, input, dispatch, filterInput }) {
  const filterEle = sessionArr.filter((ele) => {
    return ele.course.toLowerCase().includes(filterInput.toLowerCase());
  });

  const limit = enrollArr.filter(ele =>{
    return ele.selectedCourse ===""
  })

  // console.log(limit[0].selectedCourse.split(' '))

  return (
    <div className="session">
      <h3>Enrollment Sessions</h3>

      <div className="session-container">
        <div className="left">
          <label htmlFor="">
            Batch <br />
            <input
              type="text"
              value={input.batch}
              onChange={(e) =>
                dispatch({ type: "Batch", payload: e.target.value })
              }
            />
          </label>

          <label htmlFor="">
            Course <br />
            <select
              value={input.course}
              onChange={(e) =>
                dispatch({ type: "Course", payload: e.target.value })
              }
            >
              {sessionArr
                .filter((ele) => ele.course)
                .map((ele) => {
                  return (
                    <option key={ele.id} value={ele.course}>
                      {ele.course}
                    </option>
                  );
                })}
            </select>
          </label>

          <div className="label-flex">
            <label htmlFor="">
              Start Date <br />
              <input
                type="date"
                value={input.strDate}
                onChange={(e) =>
                  dispatch({ type: "StartDate", payload: e.target.value })
                }
              />
            </label>
            <br />
            <label htmlFor="">
              End Date <br />
              <input
                type="date"
                value={input.endDate}
                onChange={(e) =>
                  dispatch({ type: "EndDate", payload: e.target.value })
                }
              />
            </label>
            <br />
          </div>
          <label htmlFor="">
            Enrollment Limit <br />
            <input
              type="number"
              max={25}
              value={input.totEnroll}
              onChange={(e) =>
                dispatch({ type: "TotalEnrollment", payload: e.target.value })
              }
            />
          </label>

          <div className="btn">
            <button onClick={() => dispatch({ type: "AddSessionCourse" })}>
              Add Session
            </button>
            {/* <button>Clear</button> */}
          </div>
        </div>

        <div className="right">
          <main className="filterInput">
            <label htmlFor="">
              Course <br />
              <input
                type="text"
                placeholder="Search by Course"
                value={filterInput}
                onChange={(e) =>
                  dispatch({ type: "FilterInput", payload: e.target.value })
                }
              />
            </label>
          </main>

          <table className="tab">
            <thead>
              <tr>
                <th>Batch</th>
                <th style={{ width: "40%" }}>Course</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Limit</th>
                <th>Total Enrollment</th>
                <th>Active</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {!filterInput
                ? sessionArr.map((ele) => {
                    return (
                      <TableItem key={ele.id} ele={ele} dispatch={dispatch} />
                    );
                  })
                : filterEle.map((ele) => {
                    return (
                      <TableItem key={ele.id} ele={ele} dispatch={dispatch} />
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Session;
