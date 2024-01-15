import { useNavigate } from "react-router-dom";
import Header from "./Header";

const NotFound = () => {
   const navigate = useNavigate();
   return (
      <div>
         <Header />
         <button onClick={() => navigate(-1)}>Retour</button>
         <div className="flex flex-row items-end gap-1">
            <p className='text-5xl origin-404-first rotate-[-25deg] w-max'>4</p>
            <p className='-mx-3 text-5xl w-max'>0</p>
            <p className='text-5xl origin-404-last rotate-[100deg] w-max'>4</p>
         </div>
      </div>   
   );
};

export default NotFound;
