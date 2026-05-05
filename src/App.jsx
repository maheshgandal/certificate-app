// import { useEffect, useState } from "react";
// import Loader from "./components/Loader";
// import Home from "./pages/Home";


// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const t = setTimeout(() => setLoading(false), 2500);
//     return () => clearTimeout(t);
//   }, []);

//   return loading ? <Loader /> : <Home />;
// }

// export default App;

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CertificateCard from "./components/CertificateCard";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      
      {/* Global Header */}
      <Header />

      {/* Page Content */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificate/:id" element={<CertificateCard />} />
        </Routes>
      </div>

      {/* Global Footer */}
      <Footer />
      
    </div>
  );
}

export default App;
