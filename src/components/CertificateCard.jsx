// const data = [
//   { label: "Registration Number", value: "3" },
//   { label: "Name", value: "AJINATH KONDIBA THAKARE" },
//   { label: "Gender", value: "Male" },
//   { label: "DOD", value: "12-05-2018" },
//   { label: "Name of Mother", value: "GANGUBAI AJINATH THAKARE" },
//   { label: "Name of Father", value: "KONDIBA THAKARE" },
//   { label: "Place of Death", value: "SUPPA / सुप्पा" },
//   { label: "Registration Date", value: "15-05-2018" },
//   { label: "Unit Name", value: "GRAMA PANCHAYAT SUPPA" },
//   { label: "Unit Code", value: "33881" },
// ];

// const CertificateCard = () => {
//   return (
//     <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-4 mt-6">

//       {/* Desktop Table */}
//       <div className="hidden md:block">
//         {data.map((item, i) => (
//           <div key={i} className="grid grid-cols-2 border-b py-2">
//             <p className="text-gray-600">{item.label}</p>
//             <p className="font-medium">{item.value}</p>
//           </div>
//         ))}
//       </div>

//       {/* Mobile Layout */}
//       <div className="md:hidden">
//         {data.map((item, i) => (
//           <div key={i} className="mb-3 border-b pb-2">
//             <p className="text-gray-500 text-sm">{item.label}</p>
//             <p className="font-semibold">{item.value}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CertificateCard;




import React from 'react';
import { useParams } from 'react-router-dom';
import './Certificate.css';

const certificates = [
  {
    id: "1",
    data: [
      { label: "Registration Number", value: "3" },
      { label: "Name", value: "AJINATH KONDIBA THAKARE" },
      { label: "Gender", value: "Male" },
      { label: "DOD", value: "12-05-2018" },
      { label: "Name of Mother", value: "GANGUBAI AJINATH THAKARE" },
      { label: "Name of Father", value: "KONDIBA THAKARE" },
      { label: "Place of Death", value: "SUPPA, BEED" },
      { label: "Registration Date", value: "15-05-2018" },
      { label: "Registration Unit Name", value: "GRAMA PANCHAYAT SUPPA" },
      { label: "Registration Unit Code", value: "33881" },
    ],
  },
  {
    id: "2",
    data: [
      { label: "Registration Number", value: "10" },
      { label: "Name", value: "RAHUL SHARMA" },
      { label: "Gender", value: "Male" },
      { label: "DOD", value: "01-01-2020" },
      { label: "Name of Mother", value: "SUNITA SHARMA" },
      { label: "Name of Father", value: "MOHAN SHARMA" },
      { label: "Place of Death", value: "PUNE" },
      { label: "Registration Date", value: "02-01-2020" },
      { label: "Registration Unit Name", value: "PUNE MUNICIPAL" },
      { label: "Registration Unit Code", value: "44521" },
    ],
  },
  {
    id: "3",
    data: [
      { label: "Registration Number", value: "25" },
      { label: "Name", value: "PRIYA PATIL" },
      { label: "Gender", value: "Female" },
      { label: "DOD", value: "15-08-2019" },
      { label: "Name of Mother", value: "LATA PATIL" },
      { label: "Name of Father", value: "SURESH PATIL" },
      { label: "Place of Death", value: "NASHIK" },
      { label: "Registration Date", value: "16-08-2019" },
      { label: "Registration Unit Name", value: "NASHIK MUNICIPAL" },
      { label: "Registration Unit Code", value: "77889" },
    ],
  },
  {
    id: "4",
    data: [
      { label: "Registration Number", value: "40" },
      { label: "Name", value: "AMIT JOSHI" },
      { label: "Gender", value: "Male" },
      { label: "DOD", value: "20-10-2021" },
      { label: "Name of Mother", value: "KUSUM JOSHI" },
      { label: "Name of Father", value: "RAMESH JOSHI" },
      { label: "Place of Death", value: "MUMBAI" },
      { label: "Registration Date", value: "21-10-2021" },
      { label: "Registration Unit Name", value: "MUMBAI MUNICIPAL" },
      { label: "Registration Unit Code", value: "99887" },
    ],
  },
];

const CertificateCard = () => {
  const { id } = useParams();
  const certificate = certificates.find(c => c.id === id);

  if (!certificate) {
    return <h2 className="text-center mt-5">No Data Found</h2>;
  }

  return (
    <div className="container py-5">
      <div className="card shadow-lg page-border mx-auto bg-white">
        <div className="card-body p-3 p-md-5">
          <div className="table-responsive">
            <table className="table table-bordered mb-0 responsive-table">
              <tbody>
                {certificate.data.map((item, i) => (
                  <tr key={i}>
                    <td className="w-50 text-secondary">{item.label}</td>
                    <td className="w-50 fw-medium">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;