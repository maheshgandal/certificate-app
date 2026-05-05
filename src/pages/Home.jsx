// import Header from "../components/Header";
// import CertificateCard from "../components/CertificateCard";
// import Footer from "../components/Footer";

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Header />
//       <CertificateCard />
//       <Footer />
//     </div>
//   );
// };

// export default Home;

const Home = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-2xl font-bold">
        Scan QR or open certificate
      </h1>
      <p className="mt-3">Example: /certificate/1</p>
    </div>
  );
};

export default Home;