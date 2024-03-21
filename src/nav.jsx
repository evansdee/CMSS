function Nav({ dispatch, user_name, status }) {
  return (
    <nav>
      <header>
        <h2>certificate management system</h2>
      </header>

      {status === "ready" || status ==="active" ? (
        <div>
          {" "}
          <button
            style={{ background: "orangered" }}
            onClick={() => dispatch({ type: "LoggedOut" })}
          >
            Logout
          </button>
          <h5>{user_name}@fakeaccount.com</h5>
        </div>
      ) : (
        <button>Login</button>
      )}
    </nav>
  );
}

export default Nav;
