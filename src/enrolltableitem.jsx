const today = new Date();
const day = today.getDate();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const month = monthNames[today.getMonth()];
const year = today.getFullYear();

function EnrollTableItem({ ele, dispatch }) {
  const enrollDate = `${day}-${month}-${year}`;
  return (
    <tr className="enrollItem">
      <td style={{cursor:'pointer'}} onClick={() => dispatch({ type: "EditEnrollment", payload: ele })}>
        {ele.view}
      </td>
      <td>
        {ele.lastName} {ele.middleName} {ele.firstName}
      </td>
      {/* <td>{ele.batch}</td> */}
      <td>{ele.selectedCourse}</td>
      <td>{enrollDate}</td>
      <td>{ele.formTeller}</td>
      <td>{ele.bank}</td>
      <td>{ele.tellerNum}</td>
      <td>{ele.amount}</td>
      <td>{ele.status}</td>
    </tr>
  );
}

export default EnrollTableItem;
