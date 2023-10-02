
import  { useEffect, useState } from 'react';
import './TH2.css'
const Loading = () => {
    return (
      <div className="loader"></div>
    );
  };
  
export default function TH2(){
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className='container'>
      {isLoading && <Loading />}
    </div>
  );
}