/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../../Provider/AuthContext";
import toast from "react-hot-toast";
import { Button, Input } from "@material-tailwind/react";

const Login = () => {
  const { signIn, setLoading, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const handleGoogle = () => {
    googleSignIn()
      .then(() => {
        navigate(from);
        toast.success("Login successful!");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    if (!password) {
      toast.error("give your password");
      return;
    }
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password should contain at least one capital letter");
      return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      toast.error("Password should contain at least one special character");
      return;
    }
    signIn(email, password)
      .then(() => {
        toast.success("Login successful!");
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error) {
          toast.error("Incorrect password. Please try again.");
        }
      });
  };
  return (
    <section>
      <div className="containerr">
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="center">
          <h2>Please Log In</h2>
          <form
            onSubmit={handleSignUp}
            className="flex flex-col justify-center items-center gap-3">
            <Input
              type="email"
              name="email"
              variant="outlined"
              label="Email"
              placeholder="email"
            />
            <Input
              name="password"
              type="password"
              variant="Outlined"
              label="Password"
              placeholder="password"
            />
            <Button fullWidth type="submit">
              Log In
            </Button>
          </form>
          <div className="my-3">
            <Button
              onClick={handleGoogle}
              size="lg"
              variant="outlined"
              color="blue-gray"
              className="flex items-center gap-3">
              <img
                src="https://docs.material-tailwind.com/icons/google.svg"
                alt="metamask"
                className="h-6 w-6"
              />
            </Button>
          </div>
          <p className="text-black dark:text-white">
            Welcome! If you're new,
            <Link to="/sign-up" className="btn px-1 p-0 btn-link">
              sign up here
            </Link>
            .
          </p>
          <h2>&nbsp;</h2>
        </div>
      </div>
    </section>
  );
};

export default Login;
