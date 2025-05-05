import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([]);
  const url = 'https://dummyjson.com/products';

  const fetchData = async () => {
    let values = await fetch(url);
    let products = await values.json();
    console.log(products.products);
    setData(products.products);
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <>
      <div className='items-container'>
        {
          data.map(d => (
            <Card key={d.id} id={d.id} title={d.title} thumbnail={d.thumbnail} />
          ))
        }
      </div>
    </>
  )
}

function Card({id, title, thumbnail}){
  return(
    <div key={id} className='outer-container'>
      <div className='inner-container'>
        <img src={thumbnail} alt={title} />
        <label>{title}</label>
      </div>
    </div>
  );
}

export default App
