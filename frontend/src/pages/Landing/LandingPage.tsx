import Navbar from "../../components/landing/Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen items-center justify-center bg-slate-100">
        <h1 className="text-5xl font-bold text-blue-600">
          Welcome to CampusVault
        </h1>
      </main>
    </>
  );
};

export default LandingPage;