
import React, {useState,useEffect} from 'react';
function Shop(){
    useEffect(() => {
        fetchitems();
   },[]);
   const [items,setItems] = useState({});

   const fetchitems = async () => {
       const data = await fetch('https://api.quotable.io/random');

       const items = await data.json();
       console.log(items);
       setItems(items);
   };
    return(
        <div>
            <h1 Text style=
              {{textDecorationLine: 'underline',
               fontFamily:'American Typewriter, serif'}}>{items.author}</h1>
            <h2>{items.content}</h2>
        </div>
    );
}
export default Shop;