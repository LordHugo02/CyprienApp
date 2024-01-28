import React, { useEffect } from 'react';
// import CustomTable from './CustomTable';
import { Subscription } from '../../entities/Subscription';

const Stock = () => {

  // const [lines, setLines] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:2810/api/subscription')
      .then(res => res.json())
      .then(
        (result) => {
          const tempTab: Subscription[] = result.map((item:object) => new Subscription(item));
          console.log(tempTab);
        },
        (error) => console.log('== ERROR ====', error),
      );
  }, []);
  return (
    <div className="h-screen w-screen relative">
        THIS IS LE  STOCK
        {/* <CustomTable /> */}
    </div>

  );
};

export default Stock;
