const LoginPage = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Left Section */}
      <div className="hidden lg:flex w-1/2 bg-blue-600 text-white items-center justify-center p-10">
        <div>
          <h1 className="text-5xl font-bold mb-6">
            CampusVault
          </h1>

          <p className="text-xl">
            Your University's Centralized Notes Repository
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-1 items-center justify-center">

        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-center mb-8">
            Welcome Back
          </h2>

          <form className="space-y-5">

            <div>
              <label className="block mb-2 font-medium">
                Email / USN
              </label>

              <input
                type="text"
                placeholder="Enter Email or USN"
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter Password"
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600"
              />
            </div>

            <button
              className="w-full bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700 transition"
            >
              Login
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default LoginPage;