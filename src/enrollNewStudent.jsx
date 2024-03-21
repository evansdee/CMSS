function EnrollNewStudent({
  AddStudentInfo,
  AddCourse,
  activeIdx,
  enrollInput,
  dispatch,
  countries,
  states,
  EnrollFormState,
  sessionArr,
}) {
  const {  bank, selectedCourse, courses } = enrollInput;
  const avaliableCourse = sessionArr.filter((ele) => {
    return ele.isChecked;
  });


  return (
    activeIdx === 1 && (
      <div className="form">
        <h3>Personal Info</h3>

        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input
            type="file"
            value={enrollInput.photo}
            onChange={(e) => EnrollFormState("photo", e.target.value)}
          />

          <section className="sec">
            <label htmlFor="">
              Last Name <br />
              <input
                type="text"
                placeholder="Last Name"
                value={enrollInput.lastName}
                onChange={(e) => EnrollFormState("lastName", e.target.value)}
              />
            </label>
            <label htmlFor="">
              First Name <br />
              <input
                type="text"
                placeholder="First Name"
                value={enrollInput.firstName}
                onChange={(e) => EnrollFormState("firstName", e.target.value)}
              />
            </label>
            <label htmlFor="">
              Middle Name <br />
              <input
                type="text"
                placeholder="Middle Name"
                value={enrollInput.middleName}
                onChange={(e) => EnrollFormState("middleName", e.target.value)}
              />
            </label>
            <label htmlFor="">
              Date of Birth <br />
              <input
                type="date"
                placeholder="Date of Birth"
                value={enrollInput.DoB}
                onChange={(e) => EnrollFormState("DoB", e.target.value)}
              />
            </label>
            <label htmlFor="">
              Gender <br />
              <select
                name=""
                id=""
                value={enrollInput.sex}
                onChange={(e) => EnrollFormState("sex", e.target.value)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
            <label htmlFor="">
              Marital Status <br />
              <select
                value={enrollInput.ms}
                onChange={(e) => EnrollFormState("ms", e.target.value)}
              >
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </label>
            <label htmlFor="">
              Nationality <br />
              <select
                value={enrollInput.nationality}
                onChange={(e) => EnrollFormState("nationality", e.target.value)}
              >
                {countries.map((ele) => (
                  <option key={ele.code} value={ele.code}>
                    {ele.name}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="">
              State of Origin <br />
              <select
                name=""
                id=""
                value={enrollInput.stateOrgin}
                onChange={(e) => EnrollFormState("stateOrigin", e.target.value)}
              >
                {states[enrollInput.nationality].map((ele) => (
                  <option key={ele.code} value={ele.code}>
                    {ele.name}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="">
              Local Government Area <br />
              <input
                type="text"
                placeholder="Local Government Area"
                value={enrollInput.LGA}
                onChange={(e) => EnrollFormState("LGA", e.target.value)}
              />
            </label>
          </section>

          <h3>Contact Info</h3>

          <section className="contact">
            <input
              type="text"
              placeholder="Address"
              value={enrollInput.address}
              onChange={(e) => EnrollFormState("address", e.target.value)}
            />
            <select
              value={enrollInput.stateReside}
              onChange={(e) => EnrollFormState("stateReside", e.target.value)}
            >
              <option>What state do you reside in?</option>
              {states[enrollInput.nationality].map((ele) => (
                <option key={ele.code} value={ele.code}>
                  {ele.name}
                </option>
              ))}
            </select>

            <div className="input-flex">
              <input
                type="text"
                placeholder="Phone Number"
                value={enrollInput.gsm}
                onChange={(e) => EnrollFormState("gsm", e.target.value)}
              />
              <input
                type="email"
                placeholder="Email Address"
                value={enrollInput.email}
                onChange={(e) => EnrollFormState("email", e.target.value)}
              />
            </div>
          </section>

          <h3>Form Purchase Details</h3>

          <section className="bank">
            <select
              value={enrollInput.formTeller}
              onChange={(e) => EnrollFormState("formTeller", e.target.value)}
            >
              <option value="GTBANK">GTBANK</option>
              <option value="AMJU BANK">AMJU Bank</option>
              <option value="ZENITH BANK">Zenith Bank</option>
            </select>
            <input type="number" />
            <input type="text" placeholder="Teller Number" />
          </section>

          <h3>Course Registration</h3>

          <section className="chk">
            <select
              className="wid"
              value={enrollInput.selectedCourse}
              onChange={(e) =>
                EnrollFormState("selectedCourse", e.target.value)
              }
            >
              {avaliableCourse.map((ele) => (
                <option value={ele.batch+" "+ele.course} key={ele.batch}>
                  {ele.batch} - {ele.course}

                </option>
              ))}
            </select>
            <label htmlFor="chk">
              For Course Renewal <br />
              <input
                type="checkbox"
                id="chk"
                value={enrollInput.chk}
                onChange={(e) => EnrollFormState("chk", e.target.checked)}
              />
            </label>
            <select
              value={enrollInput.bank}
              onChange={(e) => EnrollFormState("bank", e.target.value)}
            >
              <option value="GTBANK">GTBANK</option>
              <option value="AMJU BANK">AMJU Bank</option>
              <option value="ZENITH BANK">Zenith Bank</option>
            </select>
            <input
              type="number"
              placeholder="Amount Paid"
              value={enrollInput.amount}
              onChange={(e) =>
                EnrollFormState("amount", Number(e.target.value))
              }
            />
            <input
              type="text"
              placeholder="Teller Number"
              value={enrollInput.tellerNum}
              onChange={(e) => EnrollFormState("tellerNum", e.target.value)}
            />
            {selectedCourse && bank && (
              <button onClick={() => AddCourse()}>Add</button>
            )}
          </section>

          <h3>Selected Courses</h3>

          <table>
            <thead>
              <tr>
                <th >Course</th>
                <th>Bank</th>
                <th>Amount Paid</th>
                <th>Teller No</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.isValue && (
                <tr>
                  <td>{courses.selectedCourse}</td>
                  <td>{courses.bank}</td>
                  <td>{courses.amount}</td>
                  <td>{courses.tellerNum}</td>
                  <td
                    style={{ color: "red" }}
                    onClick={() => dispatch({ type: "ClearEnrollCourse" })}
                  >
                    x
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <h3 className="last">Scanned Copy of credentials</h3>

          <div className="flex">
            <select
              value={enrollInput.meansOfId}
              onChange={(e) => EnrollFormState("meansOfId", e.target.value)}
            >
              <option value="DriversLincence">DriversLincence</option>
              <option value="InternationalPassport">
                InternationalPassport
              </option>
              <option value="NationalIdCard">NationalIdCard</option>
              <option value="DishargeBook">DischargeBook</option>
            </select>
            <input
              type="text"
              placeholder="Identity Number"
              value={enrollInput.identityNum}
              onChange={(e) => EnrollFormState("identityNum", e.target.value)}
            />
          </div>

          <div className="btn">
            <button onClick={() => AddStudentInfo()}>Enroll Student</button>
            <button onClick={() => dispatch({ type: "ClearEnrollInfo" })}>
              Clear
            </button>
          </div>
        </form>
      </div>
    )
  );
}

export default EnrollNewStudent;
