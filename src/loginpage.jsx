

export default function LogIn({ dispatch, user_name }) {

    return (
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="user">
          User Name <br />{" "}
          <input
            type="text"
            value={user_name}
            id="user"
            placeholder="Log in"
            onChange={(e) =>
              dispatch({ type: "formChange", payload: e.target.value })
            }
          />
          <p style={{ color: "red" }}>
            {user_name &&
              (user_name.length < 3
                ? "name must contain more than 3 characters"
                : "")}
          </p>
        </label>
  
        <br />
  
        <label htmlFor="pass">
          Passowrd <br /> <input type="text" id="pass" placeholder="Password" />
        </label>
  
        <button
          onClick={() =>
            user_name.length > 3 &&
            (user_name.toLowerCase() === "john" || user_name.toLowerCase() === "admin") &&
            dispatch({ type: "LoggedIn" })
          }
        >
          Log in
        </button>
      </form>
    );
  }