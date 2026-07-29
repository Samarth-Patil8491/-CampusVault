const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Student Registration
        </h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <input
            type="text"
            placeholder="Full Name"
            className="border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="USN"
            className="border rounded-lg p-3"
          />

          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg p-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="Department"
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            placeholder="Semester"
            className="border rounded-lg p-3"
          />

          <button
            className="md:col-span-2 bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700"
          >
            Register
          </button>

        </form>

      </div>
    </div>
  );
};

export default RegisterPage;