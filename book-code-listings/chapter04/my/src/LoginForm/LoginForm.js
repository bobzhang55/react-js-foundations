import UsernameInput from "./UsernameInput";
import PasswordInput from "./PasswordInput";
import LoginSubmit from "./LoginSubmit";

export function LoginForm() {
  return (
    <>
      <form>
        <UsernameInput />
        <PasswordInput />
        <LoginSubmit />
      </form>
      
    </>
  );
}
