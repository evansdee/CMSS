import { sessArr,enArr } from "./data";
import { nanoid } from "nanoid";

const initialState = {
  status: "login",
  user_name: "",
  active: "",
  sessionArr: [...sessArr],
  input: {
    batch: "",
    course: "APPA/RADAR OPERATION",
    strDate: "",
    endDate: "",
    totEnroll: "",
    active: "false",
    action: "Edit",
    limit: 25,
    isChecked: false,
  },
  selectedSession: null,
  selectedEnroll: null,
  filterInput: "",
  enrollInput: {
    photo: "",
    firstName: "",
    middleName: "",
    lastName: "",
    fullName: "",
    DoB: "",
    sex: "male",
    ms: "married",
    nationality: "NG",
    stateOrigin: "",
    LGA: "",
    address: "",
    stateReside: "",
    gsm: "",
    email: "",
    formTeller: "AMJU BANK",
    selectedCourse: "",
    chk: false,
    bank: "GTBANK",
    amount: "",
    tellerNum: "",
    courses: { isValue: false },
    meansOfId: "NationalIdCard",
    identityNum: "",
  },
  enrollArr: [...enArr],
  activeIdx: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "formChange":
      return { ...state, user_name: action.payload };
    case "Batch":
      return { ...state, input: { ...state.input, batch: action.payload } };
    case "Course":
      return { ...state, input: { ...state.input, course: action.payload } };
    case "StartDate":
      return { ...state, input: { ...state.input, strDate: action.payload } };
    case "EndDate":
      return { ...state, input: { ...state.input, endDate: action.payload } };
    case "TotalEnrollment":
      return { ...state, input: { ...state.input, totEnroll: action.payload } };
    case "AddSessionCourse":
      // if(state.input.batch)
      return {
        ...state,
        sessionArr:
          state.input.batch &&
          state.input.course &&
          state.input.strDate &&
          state.input.endDate
            ? [{ ...state.input, id: nanoid() }, ...state.sessionArr]
            : [...state.sessionArr],
        input: { ...initialState.input },
      };
    case "LoggedIn":
      return {
        ...state,
        status: "ready",
        active: action.payload,
        selectedSession: null,
      };
    case "LoggedOut":
      return { ...state, status: "login", active: "" };
    case "ExitEditSession":
      return { ...state, selectedSession: null };
    case "ExitEditEnrollment":
      return { ...state, selectedEnroll: null };
    case "EditSession":
      return { ...state, selectedSession: action.payload };
    case "EditEnrollment":
      return { ...state, selectedEnroll: action.payload };
    case "ToggleCheckBox":
      return { ...state, sessionArr: [...action.payload] };
    case "FilterInput":
      return { ...state, filterInput: action.payload };
    case "UpdateSelectedSession":
      return { ...state, sessionArr: [...action.payload] };
    case "Set_Active":
      return { ...state, activeIdx: action.payload };
    case "AddCourseEnroll":
      return {
        ...state,
        enrollInput: {
          ...state.enrollInput,
          courses: {
            ...state.enrollInput.courses,
            isValue: true,
            ...action.payload,
          },
          fullName:
            state.enrollInput.firstName + " " + state.enrollInput.lastName,
        },
      };
    case "EnrollStateChange":
      return {
        ...state,
        enrollInput: {
          ...state.enrollInput,
          [action.payload.name]: action.payload.value,
        },
      };
    case "AddStudentInfo":
      return {
        ...state,
        activeIdx: 0,
        enrollArr: [
          {
            ...action.payload,
            status: "Awaiting Approval",
            view: "view",
            id: nanoid(),
          },
          ...state.enrollArr,
        ],
        enrollInput: { ...initialState.enrollInput },
      };
    case "ClearEnrollInfo":
      return { ...state, enrollInput: { ...initialState.enrollInput } };
    case "ClearEnrollCourse":
      return {
        ...state,
        enrollInput: { ...state.enrollInput, courses: { isValue: false } },
      };
    default:
      throw new Error("Not Found");
  }
}

export { initialState, reducer };
