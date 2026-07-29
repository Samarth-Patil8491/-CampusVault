const UploadNotesPage = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-3xl font-bold text-blue-600 mb-8">
        Upload Notes
      </h1>

      <div className="max-w-2xl bg-white rounded-xl shadow p-6">

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Subject Name"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="Subject Code"
            className="w-full border rounded-lg p-3"
          />

          <textarea
            placeholder="Description"
            rows={4}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="file"
            className="w-full"
          />

          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Upload
          </button>

        </form>

      </div>

    </div>
  );
};

export default UploadNotesPage;