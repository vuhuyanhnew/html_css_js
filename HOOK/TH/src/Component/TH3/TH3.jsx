import  { useState, useMemo } from 'react';

export default function TH3() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);
  
  const total = useMemo(() => {
    const result = products.reduce((acc, ele) => {
      return acc + ele.price;
    }, 0);
    return result;
  }, [products]);

  const onAddProduct = () => {
    if (name && price) {
      setProducts([...products, { name, price: Number(price) }]);
      setName(''); 
      setPrice('');
    }
  };

  return (
    <div className='container'>
      <input
        placeholder='Enter name...'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br />
      <input
        placeholder='Enter price...'
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <br />
      <button onClick={onAddProduct}>Add product</button>
      <div>Total: {total}</div>
      <ul>
        {products.map((e, i) => <li key={i}>{e.name} - {e.price}</li>)}
      </ul>
    </div>
  );
}
