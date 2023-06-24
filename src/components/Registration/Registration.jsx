export const Registration = () => {
  return (
    <>
      <form>
        <h1>Registration</h1>
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
