import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <main className="container" style={{ paddingTop: "60px" }}>
        <h1>Welcome to LocalNexus</h1>
      </main>
    </>
  );
}

export default Home;