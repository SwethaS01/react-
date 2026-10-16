// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App


    {/* <h1 style={{color : 'red'}}>Hello</h1>

    <img src={sampleImg} alt="new image" /> <br />
    <Button name={"hello all"}onclick={() => alert("hello react")} /><br />
  <label> Counter:{counter}</label>
  <Button name={"Increment"} onclick={()=> setCounter(counter+1)}/>
  <Button name={"Derement"} onclick={()=> setCounter(counter-1)}/> */}

// task 1//

//   import React,{useEffect,useState} from "react";
// import sampleImg from "./assets/sample.jpg"; 
// import "./App.css";
// import Button from "./components";

// const App = () =>{
//   const[counter,setCounter]=useState(0)
//   const[data,setData]=useState([]);
//   useEffect(()=>{
//     const fetchData = async ()=>{
//       const response = await fetch('http://jsonplaceholder.typicode.com/users');
//       const data = await response.json();
//       setData(data);
//     }
//     fetchData();
//   },[])
//   console.log(data,"data")
//   return(
//     <div>
     
//      {data?.map((item,key)=>{
//       return(
        
//         <div key ={key}>
//         <h2>{item.name}</h2>
//         <p><strong>Email:</strong>{item.email}</p>
//         {/* <p>{item.address.street}</p> */}
//        <p> <strong>Address:</strong> {item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode} (Lat: {item.address.geo.lat}, Lng: {item.address.geo.lng})
//        </p>
//        <p><strong>Phone No:</strong>{item.phone}</p>
//        <p><strong>Website:</strong>{item.website}</p>
//        <p>
//         <strong>Company:</strong> {item.company.name} | <em>"{item.company.catchPhrase}"</em> | <small>({item.company.bs})</small>
//       </p>
//         </div>
//       )
//      })}
//      </div>
//   );
  
// }
// export default App;


//task2//
// import { useState, useEffect } from "react";
// import "./App.css";

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(
//         "https://dummyjson.com/products/category/groceries"
//       );

//       const products = await response.json();
//       setData(products.products);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container">
//       <h1>Fruit Shop</h1>

//       <div className="product-grid">
//         {data.map((product) => (
//           <div className="card" key={product.id}>
//             <img
//               src={product.thumbnail}
//               alt={product.title}
//             />

//             <h3>{product.title}</h3>
//             <p>{product.description}</p>
//             <h4>Price: ${product.price}</h4>
//             <p>Rating: {product.rating}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };




// export default App;

// import { useState } from "react";
// import Title from "./title";
// function App(){
//   const [count, setCount]=useState(0);
//   return(
//     <>
//     <Title count={count}/>
//     <button onClick={()=> setCount(count+1)} >Click me</button>
//     </>
//   )
// }
// export default App;










import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [pageError, setPageError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const itemsPerPage = 3;

  const filteredProducts = data.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase().trim())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");
      setPageError("");

      const response = await fetch(
        "https://dummyjson.com/products/category/groceries",
        {
          cache: "no-store",
        }
      );

      console.log("HTTP Status Code:", response.status);

      if (response.ok) {
        const result = await response.json();

        if (result.products && result.products.length > 0) {
          setData(result.products);
          setCurrentPage(1);
          setSuccess("Success");
        } else {
          setData([]);
          setCurrentPage(1);
        }
      } else if (response.status >= 400 && response.status < 500) {
        setError(`Client Error: HTTP ${response.status}`);
      } else if (response.status >= 500 && response.status < 600) {
        setError(`Server Error: HTTP ${response.status}`);
      } else {
        setError(`Unexpected HTTP Status: ${response.status}`);
      }
    } catch (err) {
      if (!navigator.onLine) {
        setError(
          "Network Error: No internet connection. Please check your network."
        );
      } else {
        setError(
          "Network Error: Unable to connect to the server. Please try again."
        );
      }

      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!success) return;

    const timer = setTimeout(() => {
      setSuccess("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [success]);

  const handleRetry = () => {
    fetchData();
  };

  const handleSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
    setPageError("");
    setSuccess("");
  };

  const handlePageChange = (page) => {
    if (page < 1) {
      setPageError("You are already on the first page.");
      setSuccess("");
      return;
    }

    if (page > totalPages) {
      setPageError("You have reached the last page.");
      setSuccess("");
      return;
    }

    setPageError("");
    setSuccess("");
    setLoading(true);

    setTimeout(() => {
      setCurrentPage(page);
      setLoading(false);
      setSuccess("Success");
    }, 500);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="container">
      <h1>Fresh Grocery Store</h1>

      <p className="subtitle">
        Explore our grocery collection
      </p>

      <input
        type="text"
        className="search-bar"
        placeholder="Search groceries..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />

      {loading && (
        <p className="status loading">
          Loading products...
        </p>
      )}

      {!loading && error && (
        <div className="error-container">
          <p className="status error">Error</p>

          <button
            className="retry-button"
            onClick={handleRetry}
          >
            Retry
          </button>
        </div>
      )}

      {!loading && !error && data.length === 0 && (
        <p className="status empty">
          No products available.
        </p>
      )}

      {!loading && !error && data.length > 0 && (
        <>
          {success && (
            <p className="status success">
              {success}
            </p>
          )}

          {pageError && (
            <p className="status error">
              {pageError}
            </p>
          )}

          {filteredProducts.length === 0 ? (
            <p className="status empty">
              No data found.
            </p>
          ) : (
            <>
              <div className="product-grid">
                {currentProducts.map((product) => (
                  <div className="card" key={product.id}>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                    />

                    <div className="card-content">
                      <h3>{product.title}</h3>

                      <p className="description">
                        {product.description}
                      </p>

                      <div className="product-details">
                        <span className="price">
                          ${product.price}
                        </span>

                        <span className="rating">
                          ★ {product.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pagination">
                <button
                  onClick={() =>
                    handlePageChange(currentPage - 1)
                  }
                  disabled={loading}
                >
                  Previous
                </button>

                <span className="page-info">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={() =>
                    handlePageChange(currentPage + 1)
                  }
                  disabled={loading}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;
