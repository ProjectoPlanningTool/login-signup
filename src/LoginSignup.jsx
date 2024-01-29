import React from "react";
import { useState } from "react";
import axios from "axios";
import "./login.css";
import { useLocation } from "react-router-dom";

const LoginSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [full_name, setFullname] = useState("");
  const [last_name, setLastname] = useState("");
  const [action, setAction] = useState("Log in");


  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlefirstName = (e) => {
    setFullname(e.target.value);
  };

  const handleLastName = (e) => {
    setLastname(e.target.value);
  };

  const handleApi = async (e) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/login`,
        {
          email: email,
          password: password,
        }
      );
      if (response.status) {
        const searchValue = new URLSearchParams(window.location.search).get(
          "redirectUrl"
        );
        if (searchValue) {
          window.location.href = searchValue;
        }
      }

      console.log("location,");
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleSignup = async () => {
    console.log("full_name", full_name);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/signup`,
        {
          firstName: full_name,
          lastName: last_name,
          email: email,
          password: password,
        }
      );
      console.log("🚀 ~ handleApi ~ response:", response);
    } catch (err) {
      console.log("err", err);
    }
  };
  return (
    <section className="p-3 p-md-4 p-xl-5">
      <div className="container">
        <div className="card border-light-subtle shadow-sm">
          <div className="row g-0">
            <div className="col-12 col-xl-4 left-column">
              <div className="d-flex p-5 h-100">
                <div className="col-10 col-xl-12 py-3">
                  {/* <img
                      class="img-fluid rounded mb-4"
                      loading="lazy"
                      src="./assets/img/bsb-logo-light.svg"
                      width="245"
                      height="80"
                      alt="BootstrapBrain Logo"
                    /> */}
                  {/* <hr class="border-primary-subtle mb-4"></hr> */}
                  <h2 className="h1 mb-4 text-white">
                    We make digital products that drive you to stand out.
                  </h2>
                  <p className="lead m-0 text-white">
                    We write words, take photos, make videos, and interact with
                    artificial intelligence.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-8 right-column">
              <div className="col-12 col-xl-8 py-3 offset-xl-4">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-4">
                        <h3>Create Account</h3>
                      </div>
                    </div>

                    <div className="col-12">
                      {/* <p className="mb-5">Or sign in with</p> */}
                      <div className="d-flex gap-3 flex-column flex-xl-row mb-3">
                        <a
                          href="#!"
                          class="btn bsb-btn-xl btn-outline-primary social-btn"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-google"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                          </svg>
                          <span class="ms-2 fs-6">Sign up with Google</span>
                        </a>
                        <a
                          href="#!"
                          class="btn bsb-btn-xl btn-outline-primary social-btn"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-facebook"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                          </svg>
                          <span className="ms-2 fs-6">
                            Sign up with Facebook
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <hr className="border-primary-subtle me-2 hr-width"></hr>
                    OR
                    <hr className="border-primary-subtle ms-2 hr-width"></hr>
                  </div>
                  <form>
                    <div className="row gy-3 gy-md-4 overflow-hidden">
                      {action === "Log in" ? (
                        <div className="row gy-3 gy-md-4 overflow-hidden">
                          <div className="col-12">
                            <input
                              value={email}
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="Email"
                              required
                              onChange={handleEmail}
                            />
                          </div>
                          <div className="col-12">
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              value={password}
                              id="password"
                              placeholder="Password"
                              required
                              onChange={handlePassword}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="row gy-3 gy-md-4 overflow-hidden">
                          <div className="col-12">
                            <input
                              value={full_name}
                              type="text"
                              className="form-control"
                              name="text"
                              id="First_name"
                              placeholder="First Name"
                              required
                              onChange={handlefirstName}
                            />
                          </div>
                          <div className="col-12">
                            <input
                              value={last_name}
                              type="text"
                              className="form-control"
                              name="text"
                              id="last_name"
                              placeholder="Last Name"
                              required
                              onChange={handleLastName}
                            />
                          </div>
                          <div className="col-12">
                            <input
                              value={email}
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="Email"
                              required
                              onChange={handleEmail}
                            />
                          </div>
                          <div className="col-12">
                            <input
                              value={password}
                              type="password"
                              className="form-control"
                              name="password"
                              id="password"
                              placeholder="Password"
                              required
                              onChange={handlePassword}
                            />
                          </div>
                        </div>
                      )}

                      <div className="col-12">
                        <div className="d-flex justify-content-center">
                          {action === "Log in" ? (
                            <span
                              className="px-5 btn bsb-btn-xl btn-primary"
                              onClick={handleApi}
                            >
                              Log in
                            </span>
                          ) : (
                            <span
                              className="px-5 btn bsb-btn-xl btn-primary "
                              onClick={handleSignup}
                            >
                              Create Account
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="row">
                    <div className="col-12">
                      <hr className="mt-5 mb-4 border-secondary-subtle" />
                      {action === "Log in" ? (
                        <div className="d-flex justify-content-center">
                          Don't have an account?
                          <span
                            className="ms-2 link-secondary text-decoration-none"
                            onClick={() => {
                              setAction("Sign Up");
                            }}
                          >
                            Sign Up
                          </span>
                        </div>
                      ) : (
                        <div className="d-flex justify-content-center">
                          Already have an account?
                          <span
                            className="ms-2 link-secondary text-decoration-none"
                            onClick={() => setAction("Log in")}
                          >
                            Log in
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSignup;
