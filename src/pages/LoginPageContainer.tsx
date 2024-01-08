import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

interface LoginForm {
  username: string;
  password: string;
}

const LoginPageContainer: React.FC = () => {
  <Header />
  // State to manage the login form data
  const [loginForm, setLoginForm] = useState<LoginForm>({
    username: '',
    password: '',
  });

  // Event handler for form input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  // Event handler for form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add logic for handling login (e.g., API call) here
    console.log('Login Form Data:', loginForm);
  };

  // Render the login page
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={loginForm.username}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginForm.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:border-blue-700"
          >
            Login
          </button>
        </form>
      </div>
      
    </div>
  );
  <Footer />
};


// function LoginPageContainer() {
//   return (
//     <>
//       <Header />
//       <div className="h-screen flex justify-center items-center">
//         <div className="">
//           <p>Email</p>
//           <input
//             className="border border-bgColor mb-4 rounded-lg py-1"
//             type="email" placeholder="Enter email"
//           />{" "}
//           <br></br>
//           <p>Password</p>
//           <input
//             className="border border-bgColor rounded-lg py-1"
//             type="password" placeholder="Enter password"
//           />{" "}
//           <br></br>
//           <button
//             className="bg-orange px-5 py-1  mt-5 rounded-lg"
//             type="submit"
//           >
//             Sign in
//           </button>
//         </div>
//       </div>
//       < Footer />
//     </>
//   );
// }

export default LoginPageContainer;
