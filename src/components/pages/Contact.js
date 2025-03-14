import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container form-signin w-50 m-auto text-center px-4 py-5 my-5 text-center">
        <div className="row">
          <main className=" ">
            <for4m>
              <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating py-5">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign in
              </button>
              <p className="mt-5 mb-3 text-muted">© 2024-2024</p>
            </for4m>
          </main>
        </div>
      </div>
    </>
  );
};

export default Contact;
