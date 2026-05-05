// const Header = () => {
//   return (
//     <div className="w-full shadow">

//       {/* 🔶 TOP HEADER WITH WAVE */}
//       <div
//         className="relative w-full"
//         style={{
//           backgroundImage: "url('/hrb.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="flex items-center justify-between px-2 py-1">

//           {/* LEFT SECTION */}
//           <div className="flex items-center gap-5">
//             <img src="/logo1.png" className="h-11" />
//             <img src="/h75.png" className="h-12" />

//             {/* <div className="leading-tight">
//               <h1 className="font-bold text-xl">
//                 Birth & Death Registration
//               </h1>
//               <p className="text-xs">
//                 Office of the Registrar General & Census Commissioner, India
//               </p>
//               <p className="text-xs">
//                 Ministry of Home Affairs
//               </p>
//             </div> */}
//           </div>

//           {/* CENTER EMBLEM */}
//           <div className="hidden md:flex justify-center flex-1">
//             <img src="/emblem.png" className="h-14" />
//           </div>

//           {/* RIGHT CONTROLS */}
//           <div className="flex items-center gap-1">

//             {/* Font Controls */}
//             <button className="bg-white px-2 py-1 shadow rounded text-sm">
//               A-
//             </button>
//             <button className="bg-white px-2 py-1 shadow rounded text-sm">
//               A
//             </button>
//             <button className="bg-white px-2 py-1 shadow rounded text-sm">
//               A+
//             </button>

//             {/* Dark Mode */}
//             <button className="p-2 color-black">
//               <img src="/darklogo.png" className="h-6 " />
//             </button>

//             {/* Login */}
//             <button className="bg-[#2c5d8f] text-white px-4 py-1 rounded shadow flex items-center gap-1">
//               Login
//               <span>▾</span>
//             </button>

//           </div>
//         </div>
//       </div>

//       {/* 🔷 NAVBAR */}
//       <div className="bg-[#2c5d8f] text-white px-4 py-3 flex gap-6 items-center overflow-x-auto">

//         <a className="hover:underline whitespace-nowrap">Home</a>
//         <a className="hover:underline whitespace-nowrap">About CRS</a>
//         <a className="hover:underline whitespace-nowrap">
//           RBD Act and Model Rules ▾
//         </a>
//         <a className="hover:underline whitespace-nowrap">Circulars</a>
//         <a className="hover:underline whitespace-nowrap">Forms ▾</a>
//         <a className="hover:underline whitespace-nowrap">Training Manuals</a>
//         <a className="hover:underline whitespace-nowrap">FAQs ▾</a>
//         <a className="hover:underline whitespace-nowrap">How To Apply</a>

//       </div>
//     </div>
//   );
// };

// export default Header;

// const Header = () => {
//   return (
//     <div className="w-full shadow-md">

//       {/* 🔶 TOP HEADER */}
//       <div
//         className="relative w-full bg-cover bg-no-repeat"
//         style={{
//           backgroundImage: "url('/hrb.png')",
//           backgroundPosition: "top center",
//           minHeight: "50px",
//         }}
//       >
//         <div className="flex items-center justify-between px-2 py-2">

//           {/* LEFT SECTION */}
//           <div className="flex items-center gap-7 z-10">

//             {/* Logo */}
//             <img
//               src="/logo1.png"
//               alt="logo"
//               className="h-12"
//             />

//             {/* 75 Logo */}
//             <img
//               src="/h75.png"
//               alt="75"
//               className="h-12 hidden md:block"
//             />
//           </div>

//           {/* CENTER EMBLEM */}
//           <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
//             <img
//               src="/emblem.png"
//               alt="emblem"
//               className="h-14"
//             />
//           </div>

//           {/* RIGHT CONTROLS */}
//           <div className="flex items-center gap-2 z-10">

//             {/* Font Buttons */}
//             <button className="bg-white px-2 py-1.5 rounded shadow text-sm font-medium hover:bg-gray-100">
//               A-
//             </button>

//             <button className="bg-white px-2 py-1.5 rounded shadow text-sm font-medium hover:bg-gray-100">
//               A
//             </button>

//             <button className="bg-white px-2 py-1.5 rounded shadow text-sm font-medium hover:bg-gray-100">
//               A+
//             </button>

//             {/* Dark Mode */}
//             <button className="p-1 rounded hover:bg-gray-100">
//               <img
//                 src="/darklogo.png"
//                 alt="dark"
//                 className="h-6"
//               />
//             </button>

//             {/* Login */}
//             <button className="bg-[#2c5d8f] hover:bg-[#234b73] text-white px-4 py-1.5 rounded shadow flex items-center gap-1 font-medium">
//               Login
//               <span>▾</span>
//             </button>

//           </div>
//         </div>
//       </div>

//       {/* 🔷 NAVBAR */}
//       <div className="w-full bg-[#1f4d86] h-[50px] flex justify-center items-center shadow">

//         <div className="flex items-center gap-8 text-white font-semibold text-[14px]">

//           <a
//             href="#"
//             className="hover:text-gray-200 transition whitespace-nowrap"
//           >
//             Home
//           </a>

//           <a
//             href="#"
//             className="hover:text-gray-200 transition whitespace-nowrap"
//           >
//             About CRS
//           </a>

//           <a
//             href="#"
//             className="hover:text-gray-200 transition whitespace-nowrap flex items-center gap-1"
//           >
//             RBD Act and Model Rules
//             <span className="text-[14px]">▼</span>
//           </a>

//           <a
//             href="#"
//             className="hover:text-gray-200 transition whitespace-nowrap"
//           >
//             Circulars
//           </a>

//           <a
//             href="#"
//             className="hover:text-gray-200 transition whitespace-nowrap flex items-center gap-1"
//           >
//             Forms
//             <span className="text-[14px]">▼</span>
//           </a>

//           <a
//             href="#"
//             className="hover:text-gray-200 transition whitespace-nowrap"
//           >
//             Training Manuals
//           </a>

//           <a
//             href="#"
//             className="hover:text-gray-200 transition whitespace-nowrap flex items-center gap-1"
//           >
//             FAQs
//             <span className="text-[14px]">▼</span>
//           </a>

//           <a
//             href="#"
//             className="hover:text-gray-200 transition whitespace-nowrap"
//           >
//             How To Apply
//           </a>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;


import React from "react";

const Header = () => {
  return (
    <div className="w-full shadow-md">

      {/* 🔶 TOP HEADER */}
      <div
        className="relative w-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/hrb.png')",
          backgroundPosition: "top center",
          minHeight: "60px",
        }}
      >
        <div className="flex items-center justify-between px-2 py-2 md:py-3 h-full">

          {/* 🔹 LEFT SECTION */}
          <div className="flex items-center gap-2 md:gap-4 z-10">

            {/* 📱 Mobile Logo */}
            <img
              src="/image.png"
              alt="mobile logo"
              className="h-10 block md:hidden"
            />

            {/* 💻 Desktop Logo */}
            <img
              src="/logo1.png"
              alt="desktop logo"
              className="h-12 hidden md:block"
            />

            {/* 75 Logo (always visible) */}
            <img
              src="/h75.png"
              alt="75"
              className="h-10 md:h-12"
            />

          </div>

          {/* 🔹 CENTER EMBLEM */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
            <img
              src="/emblem.png"
              alt="emblem"
              className="h-12 md:h-14"
            />
          </div>

          {/* 🔹 RIGHT CONTROLS */}
          <div className="flex items-center gap-2 md:gap-3 z-10">

            {/* 💻 Desktop Font Controls */}
            <div className="hidden md:flex gap-1">
              <button className="bg-white px-2 py-1 rounded shadow text-sm hover:bg-gray-100">
                A-
              </button>
              <button className="bg-white px-2 py-1 rounded shadow text-sm hover:bg-gray-100">
                A
              </button>
              <button className="bg-white px-2 py-1 rounded shadow text-sm hover:bg-gray-100">
                A+
              </button>
            </div>

            {/* 🌙 Dark Mode */}
            <button className="p-1 rounded hover:bg-gray-100">
              <img
                src="/darklogo.png"
                alt="dark"
                className="h-5 md:h-6"
              />
            </button>

            {/* 💻 Desktop Login */}
            <button className="hidden md:flex bg-[#2c5d8f] hover:bg-[#234b73] text-white px-4 py-1.5 rounded shadow items-center gap-1 font-medium">
              Login <span>▾</span>
            </button>

            {/* 📱 Mobile Login Icon */}
            <button className="md:hidden flex bg-[#4b6e9b] text-white p-2 rounded-full shadow items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
            </button>

            {/* 📱 Hamburger Menu */}
            <button className="md:hidden flex p-1">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>

          </div>
        </div>
      </div>

      {/* 🔷 NAVBAR (Desktop Only) */}
      <div className="hidden md:flex w-full bg-[#1f4d86] h-[50px] justify-center items-center shadow">
        <div className="flex items-center gap-8 text-white font-semibold text-[14px]">

          <a href="#" className="hover:text-gray-200 whitespace-nowrap">
            Home
          </a>

          <a href="#" className="hover:text-gray-200 whitespace-nowrap">
            About CRS
          </a>

          <a href="#" className="hover:text-gray-200 whitespace-nowrap flex items-center gap-1">
            RBD Act and Model Rules <span>▼</span>
          </a>

          <a href="#" className="hover:text-gray-200 whitespace-nowrap">
            Circulars
          </a>

          <a href="#" className="hover:text-gray-200 whitespace-nowrap flex items-center gap-1">
            Forms <span>▼</span>
          </a>

          <a href="#" className="hover:text-gray-200 whitespace-nowrap">
            Training Manuals
          </a>

          <a href="#" className="hover:text-gray-200 whitespace-nowrap flex items-center gap-1">
            FAQs <span>▼</span>
          </a>

          <a href="#" className="hover:text-gray-200 whitespace-nowrap">
            How To Apply
          </a>

        </div>
      </div>
    </div>
  );
};

export default Header;