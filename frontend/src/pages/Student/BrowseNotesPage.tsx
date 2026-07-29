const BrowseNotesPage = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-3xl font-bold text-blue-600 mb-8">
        Browse Notes
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-bold text-lg">
            Data Structures
          </h2>

          <p className="text-gray-600 mt-2">
            Module 1 Notes
          </p>

          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
            Download
          </button>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-bold text-lg">
            DBMS
          </h2>

          <p className="text-gray-600 mt-2">
            Previous Year Paper
          </p>

          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
            Download
          </button>
        </div>

      </div>

    </div>
  );
};

export default BrowseNotesPage;