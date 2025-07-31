import { useEffect, useState } from "react"

const App=()=>{
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
   setTimeout(()=>{
    setLoading(false)
   },3000)
   return ()=>{
    clearTimeout(loading)
   }
  },[])
  return (<div>
    {loading ? <p>Loading...</p>: <p>Loaded</p>}
  </div>)
}

export default App;


// import { useEffect, useState } from "react";

// const App = () => {
//   const [user, setUser] = useState([]);
//   const [list, setList] = useState([]);
//   const FetchData = async () => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       const data = await response.json();
//       console.log(data);
//       setUser(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     FetchData();
//   }, []);

//   const handlerlist = (ele) => {
//     setList((prev) => {
//       if (prev.some((prevEle) => prevEle.id === ele.id)) {
//         return prev;
//       } else {
//         return [...prev, ele];
//       }
//     });
//   };
//   return (
//     <div>
//       <ul>
//         {user.slice(0, 5).map((ele, id) => {
//           return (
//             <li key={ele.id} onClick={() => handlerlist(ele)}>
//               {ele.name}
//             </li>
//           );
//         })}
//       </ul>

//       {/* <ul>
//         {list.map((ele, id) => {
//           return <li key={ele.id}>{ele.name}</li>;
//         })}
//       </ul> */}
//     </div>
//   );
// };
// export default App;

// import Filter from "./filter";

// const App = () => {
//   return (
//     <div>
//       <Filter />
//     </div>
//   );
// };

// export default App;

// import { useEffect, useState } from "react";

// const App=()=>{
//   const [user,setUser]=useState([])
//   const [list,setList]=useState([])

//   const FetchData=async()=>{
//     try{
//       const response=await fetch("https://jsonplaceholder.typicode.com/users");
//       const data=await response.json()
//       console.log(data)
//       setUser(data)
//     }catch(error){
//       console.log(error)
//     }
//   }
//   useEffect(()=>{
//     FetchData()
//   },[])

//   const handleList=(ele)=>{
//     setList((prev)=>{
//       if(prev.some((prevEle)=>prevEle.id===ele.id)){
//         return prev
//       }else{
//         return [...prev,ele]
//       }
//     })
//   }

//   return (<div>
//    <ul>

//     {
//       user.map((ele,id)=>{
//         return <li onClick={()=>handleList(ele)}>{ele.name}</li>
//       })
//     }
//    </ul>
//    <div>
//     <ul>
//       {
//         list.map((ele)=>{
//           return <li>{ele.name}</li>
//         })
//       }
//     </ul>
//    </div>
//   </div>)
// }

// export default App
// // import { useEffect, useState } from "react";

// // const App = () => {
// //   const [user, setUser] = useState([]);
// //   const [list, setList] = useState([]);
// //   const FetchData = async () => {
// //     try {
// //       const response = await fetch(
// //         "https://jsonplaceholder.typicode.com/users"
// //       );
// //       const data = await response.json();
// //       console.log(data);
// //       setUser(data);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };
// //   useEffect(() => {
// //     FetchData();
// //   }, []);

// //   const handlerlist = (ele) => {
// //     setList((prev) => {
// //       if (prev.some((prevEle) => prevEle.id === ele.id)) {
// //         return prev;
// //       } else {
// //         return [...prev, ele];
// //       }
// //     });
// //   };
// //   return (
// //     <div>
// //       <ul>
// //         {user.slice(0, 5).map((ele, id) => {
// //           return (
// //             <li key={ele.id} onClick={() => handlerlist(ele)}>
// //               {ele.name}
// //             </li>
// //           );
// //         })}
// //       </ul>

// //       {/* <ul>
// //         {list.map((ele, id) => {
// //           return <li key={ele.id}>{ele.name}</li>;
// //         })}
// //       </ul> */}
// //     </div>
// //   );
// // };
// // export default App;

// // import Filter from "./filter";

// // const App = () => {
// //   return (
// //     <div>
// //       <Filter />
// //     </div>
// //   );
// // };

// // export default App;

// // import { useEffect, useState } from "react";

// // const App = () => {
// //   const [users, setUsers] = useState([]);
// //   const [handleList, setHandleList] = useState([]);

// //   const FetchData = async () => {
// //     try {
// //       const response = await fetch(
// //         "https://jsonplaceholder.typicode.com/users"
// //       );
// //       const data = await response.json();
// //       console.log(data);
// //       setUsers(data);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   useEffect(() => {
// //     FetchData();
// //   }, []);

// //   const handleShowList = (ele) => {
// //     setHandleList((prev) => {
// //       if (prev.some((pervEle) => pervEle.id === ele.id)) {
// //         return prev;
// //       } else {
// //         return [...prev, ele];
// //       }
// //     });
// //   };

// //   return (
// //     <>
// //       <div>
// //         <ul>
// //           {users.map((ele) => {
// //             return (
// //               <li key={ele.id} onClick={() => handleShowList(ele)}>
// //                 {ele.name}
// //               </li>
// //             );
// //           })}
// //         </ul>
// //       </div>
// //       <div>
// //         {handleList.map((ele) => {
// //           return <li>{ele.name}</li>;
// //         })}
// //       </div>
// //     </>
// //   );
// // };

// // export default App;

// // import { useEffect, useState } from "react";

// // const App = () => {
// //   const [users, setUsers] = useState([]);
// //   // const [inputValue, setInputValue] = useState("");
// //   const [handleSelected, setHandleSelect] = useState([]);

// //   const fetchData = async () => {
// //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
// //     const data = await response.json();
// //     console.log(data);
// //     setUsers(data);
// //   };

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const handleChange = (e) => {
// //     setInputValue(e.target.value);
// //   };

// //   const handleSelect = (ele) => {
// //     setHandleSelect((prev) => {
// //       if (prev.some((prevEle) => ele.id === prevEle.id)) {
// //         return prev;
// //       } else {
// //         return [...prev, ele];
// //       }
// //     });
// //   };
// //   return (
// //     <div>
// //       <ul>
// //         {users.map((ele) => {
// //           return (
// //             <li key={ele.id} onClick={() => handleSelect(ele)}>
// //               {ele.name}
// //             </li>
// //           );
// //         })}
// //       </ul>
// //       <div>
// //         {handleSelected.map((ele) => {
// //           return <li key={ele.id}>{ele.name}</li>;
// //         })}
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;

// // {
// //   /*
// // // import { useEffect } from "react";
// // // import { useState } from "react";

// // // const App = () => { */
// // }
// // {
// //   /* //   const [users, setUsers] = useState([]);
// // //   const [handleInput, setHandleInput] = useState("");

// // //   const FetchData = async () => { */
// // // }
// // // {
// //   /* //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
// // //     const data = await response.json();
// // //     console.log(data);
// // //     setUsers(data);
// // //   };
// // //   useEffect(() => { */
// // }
// // //     FetchData();
// // //   }, []);

// // //   const handleOnchnage = (e) => {
// // //     setHandleInput(e.target.value);
// // //   };
// // //   const FilterData = users.filter((ele) =>
// // //     ele.name.toLowerCase().includes(handleInput.toLowerCase())
// // //   );
// // //   return (
// // //     <>
// // //       <div>
// // //         <div>
// // //           <input
// // //             type="text"
// // //             placeholder="Search here"
// // //             value={handleInput}
// // //             onChange={handleOnchnage}
// // //           />
// // //         </div>
// // //         <ul>
// // //           {FilterData.map((ele) => {
// // //             return <li>{ele.name}</li>;
// // //           })}
// // //         </ul>
// // //       </div>
// // //     </>
// // //   );
// // // };
// // // export default App;
// // // // import { useEffect, useState } from "react";

// // // const App = () => {
// // //   const [users, setUsers] = useState([]);
// // //   const [handleSelect, setHandleSelect] = useState([]);
// // //   const FetchData = async () => {
// // //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
// // //     const data = await response.json();
// // //     console.log(data);
// // //     setUsers(data);
// // //   };
// // //   useEffect(() => {
// // //     FetchData();
// // //   }, []);
// // //   const handleadd = (ele) => {
// // //     setHandleSelect((prev) => {
// // //       if (prev.some((prevEle) => ele.id === prevEle.id)) {
// // //         return prev;
// // //       } else {
// // //         return [...prev, ele];
// // //       }
// // //     });
// // //   };
// // //   return (
// // //     <>
// // //       <div>
// // //         <ul>
// // //           {users.map((ele) => {
// // //             return (
// // //               <li
// // //                 style={{ cursor: "pointer" }}
// // //                 key={ele.id}
// // //                 onClick={() => handleadd(ele)}
// // //               >
// // //                 {ele.name}
// // //               </li>
// // //             );
// // //           })}
// // //         </ul>
// // //       </div>
// // //       <div>
// // //         <ul>
// // //           {handleSelect.map((ele) => {
// // //             return <li>{ele.name}</li>;
// // //           })}
// // //         </ul>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default App;
