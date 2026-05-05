// const Loader = () => {
//   return (
//     <div className="fixed inset-0 bg-gray-100 flex flex-col items-center justify-center z-50">
//       {/* Logo */}
//       <img src="/image.png" alt="logo" className="w-24 mb-6" />

//       {/* Spinner */}
//       <div className="w-28 h-28 border-[6px] border-gray-300 border-t-gray-500 rounded-full animate-spin"></div>
//     </div>
//   );
// };

// export default Loader;

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gray-100 flex items-center justify-center z-50">

      {/* Spinner Container */}
      <div className="relative flex items-center justify-center">

        {/* Spinner */}
        <div className="w-40 h-40 border-[10px] border-t-gray-500 rounded-full animate-spin"></div>

        {/* Bigger Logo */}
        <img
          src="/image.png"
          alt="logo"
          className="w-28 absolute"
        />

      </div>

    </div>
  );
};

export default Loader;