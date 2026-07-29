const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-slate-100">

      <header className="bg-blue-600 text-white p-5 text-2xl font-bold">
        CampusVault Dashboard
      </header>

      <div className="p-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold">Total Notes</h2>
            <p className="text-3xl font-bold text-blue-600 mt-3">128</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold">Uploads</h2>
            <p className="text-3xl font-bold text-blue-600 mt-3">12</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold">Downloads</h2>
            <p className="text-3xl font-bold text-blue-600 mt-3">64</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold">Bookmarks</h2>
            <p className="text-3xl font-bold text-blue-600 mt-3">8</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default DashboardPage;