
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [clothingItems, setClothingItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/clothing-items')
      .then(response => response.json())
      .then(data => setClothingItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <div className="item-list">
        {clothingItems.map(item => (
          <div key={item._id} className="item">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.item_name}</h5>
                <p className="card-text card-details">Store: {item.store_name}</p>
                <p className="card-text card-price">Price: ${item.price}</p>
                <p className="card-text card-details">Gender: {item.gender}</p>
                {Array.isArray(item.color) && (
                  <p className="card-text card-details card-colors">
                    Colors: {item.color.join(', ')}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

// import React, { useEffect, useState } from 'react';
// import './App.css'; // You can create this file for additional styling if needed

// function App() {
//   const [clothingItems, setClothingItems] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3001/api/clothing-items')
//       .then(response => response.json())
//       .then(data => setClothingItems(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="container">
//       <div className="item-list">
//         {clothingItems.map(item => (
//           <div key={item._id} className="item">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">{item.item_name}</h5>
//                 <p className="card-text">Store: {item.store_name}</p>
//                 <p className="card-text">Price: ${item.price}</p>
//                 <p className="card-text">Gender: {item.gender}</p>
//                 {Array.isArray(item.color) && (
//                   <p className="card-text">Colors: {item.color.join(', ')}</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
