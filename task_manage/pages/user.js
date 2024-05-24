// // import { useRouter } from 'next/router';
// // import { useEffect, useState } from 'react';
// // // import styles from '../app/Dashboard.module.css';

// // const UserPage = () => {
// //   const router = useRouter();
// //   const { email } = router.query;
// //   const [data, setData] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     async function fetchData() {
// //       try {

// //         const response = await fetch('/api/user_task', {
// //           method: 'POST',
// //           headers: {
// //             'Content-Type': 'application/json',
// //           },
// //           body: JSON.stringify({ email }),
// //         });

// //         const result = await response.json();
// //         setData(result);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }
// //     fetchData();
// //   }, []);

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div>
// //       <h1>Welcome User!</h1>
// //       {email && <p>Email: {email}</p>}
// //       <table>
// //         <thead>
// //           <tr>
// //             <th>Title</th>
// //             <th>Description</th>
// //             <th>Created At</th>
// //             <th>Status</th>
// //             <th>Solution</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {data.map((item, index) => (
// //             <tr key={index}>
// //               <td>{item.title}</td>
// //               <td>{item.description}</td>
// //               <td>{new Date(item.createdAt).toLocaleString()}</td>
// //               <td>{item.status}</td>
// //               <td>{item.solution}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default UserPage;


// import { useEffect, useState } from 'react';
// import express from 'express';

// // import fs from 'fs';
// // import styles from '../styles/Dashboard.module.css';

// export default function Dashboard() {
//   const router = express.Router();
//   const { email } = router.query;
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [rows, setRows] = useState([]);
  

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch('/api/user_task', {
//                     method: 'POST',
//                     headers: {
//                       'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({ email }),
//                   });
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (data.length > 0) {
//       const tempRows = [];
//       data.forEach((item, index) => {
//         tempRows.push(
//           <tr key={index}>
//             <td>{item.title}</td>
//             <td>{item.description}</td>
//             <td>{new Date(item.createdAt).toLocaleString()}</td>
//             <td>{item.status}</td>
//             <td>{item.solution}</td>
//           </tr>
//         );
//       });
//       setRows(tempRows);
//     }
//   }, [data]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Created At</th>
//             <th>Status</th>
//             <th>Solution</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// pages/dashboard.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


export default function Dashboard() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rows, setRows] = useState([]);
  const { email } = router.query;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/user_task', {
                              method: 'POST',
                              headers: {
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({ email }),
                            });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const tempRows = [];
      for (const item of data) {
        tempRows.push(
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{new Date(item.createdAt).toLocaleString()}</td>
            <td>{item.status}</td>
            <td>{item.solution}</td>
          </tr>
        );
      }
      setRows(tempRows);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Status</th>
            <th>Solution</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}
