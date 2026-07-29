const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">

      <div className="bg-white rounded-xl shadow p-8 w-96">

        <div className="w-24 h-24 rounded-full bg-blue-600 mx-auto mb-5"></div>

        <h2 className="text-2xl font-bold text-center">
          Samarth Patil
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Computer Science
        </p>

        <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg">
          Edit Profile
        </button>

      </div>

    </div>
  );
};

export default ProfilePage;