// import { useState } from "react";
import React ,{useState} from "react";

const txtStyle ={
    padding:'.5em 1em',
    fontSize:"1em"
}

const labelStyle ={
    display:'flex',
    gap:'1.5em',
    margin:"0 1em 2em"
    // alignItems
}

const secStyle ={
    padding:"2em"
}
const tdStyle = {
    color:"rgb(80, 140, 219)"
}
function Student({dispatch,enrollArr}) {

    const [txt, setinp] = useState({
        inp:'',
        sel:"firstName"
    });

    function change(e){
        setinp(prev => ({...prev,[e.target.name]:e.target.value}))
    }

    const filt = enrollArr.filter(ele=>{
        return ele[`${txt.sel}`].toLowerCase().includes(txt.inp.toLowerCase())
    })

    return ( 
        <section style={secStyle}>
            <label htmlFor="" style={labelStyle}>

            <select name="sel" value={txt.sel} onChange={change} style={txtStyle}>
                <option value="firstName">
                    Search by First Name
                </option>
                <option value="middleName">
                    Search by Middle Name
                </option>
                <option value="lastName">
                    Search by Last Name
                </option>
                <option value="gsm">
                    Search by Phone Number
                </option>
             
            </select>
          <input type="text" name="inp" value={txt.inp} placeholder={txt.sel} onChange={change} style={txtStyle}/>
          </label>

          <table className="tabe">
            <thead>
                <tr>
                    <th>
                    Last Name 	 	 	
                    </th>
                    <th>
                    First Name
                    </th>
                    <th>
                    Other Names
                    </th>
                    <th>
                    Date of Birth
                    </th>
                    <th>
                    Email 
                    </th>
                    <th>
                        Phone
                    </th>
                    <th>
                        Gender
                    </th>
                    <th>
                        Registration Date
                    </th>
                    <th>
                        Details
                    </th>
                </tr>
            </thead>

            <tbody>
            {
                txt.inp && 
                filt.map(ele=>{
                    return <TableStudent key={ele.id} ele={ele}/>
                })
            }
            </tbody>
          </table>

        </section>
     );
}

export default Student;

function TableStudent({ele}){
    return(
       <tr>
        <td>{ele.lastName}</td>
        <td>{ele.firstName}</td>
        <td>{ele.middleName}</td>
        <td>{ele.email}</td>
        <td>{ele.DoB}</td>
        <td>{ele.gsm}</td>
        <td>{ele.sex}</td>
        <td>-</td>
        <td style={tdStyle}>Details</td>
       </tr>
    )
}