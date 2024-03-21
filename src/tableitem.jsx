function TableItem({ ele,dispatch }) {
  return (
    <tr className="tableItem">
      <td>{ele.batch}</td>
      <td>{ele.course}</td>
      <td>{ele.strDate}</td>
      <td>{ele.endDate}</td>
      <td>{ele.limit}</td>
      <td>{ele.totEnroll}</td>
      <td style={ele.isChecked ? {color:'rgb(155, 199, 88)'}:{color:'red'}}><strong>{ele.isChecked ? "true":'false'}</strong></td>
      <td onClick={()=>dispatch({type:'EditSession',payload:ele})}>{ele.action}</td>
    </tr>
  );
}

export default TableItem;
