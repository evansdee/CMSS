import { GrClose } from "react-icons/gr";


function EditEnrollment({selectedEnroll,dispatch}) {
    return ( 
        <div>
            <p onClick={()=>dispatch({type:"ExitEditEnrollment"})}>
                <GrClose/>
            </p>
           {selectedEnroll.fullName}
        </div>
     );
}

export default EditEnrollment;