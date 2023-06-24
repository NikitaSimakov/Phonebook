export const Login = () => {
  return (
    <>
      <form>
        <h1>Log In</h1>
        <label htmlFor="email">
          Email
          <input type="text" name="email" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" />
        </label>
        <button type="sumbit">Send</button>
      </form>
    </>
  );
};
