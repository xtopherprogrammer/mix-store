import Header from "../components/Header";
import Footer from "../components/Footer";

function LoginPageContainer() {
  return (
    <>
      <Header />
      <div className="h-screen flex justify-center items-center">
        <div className="">
          <p>Email</p>
          <input
            className="border border-bgColor mb-4 rounded-lg py-1"
            type="email" placeholder="Enter email"
          />{" "}
          <br></br>
          <p>Password</p>
          <input
            className="border border-bgColor rounded-lg py-1"
            type="password" placeholder="Enter password"
          />{" "}
          <br></br>
          <button
            className="bg-orange px-5 py-1  mt-5 rounded-lg"
            type="submit"
          >
            Sign in
          </button>
        </div>
      </div>
      < Footer />
    </>
  );
}

export default LoginPageContainer;
