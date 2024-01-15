
import { Link } from 'react-router-dom';

const NotFound = () => {
   const headerClasses = "w-full bg-slate-100 p-8 text-xl"
   const headerDivClasses = "w-1/2 flex flex-row items-center justify-between mx-auto"
   return (
      <div>
         <header className={headerClasses}>
            <div className={headerDivClasses}>
               <h1 className='text-3xl font-bold'>YogStock</h1>
               <nav> 
                  <ul>
                     <li>
                        <Link to="/auth">Connexion / Insciption</Link>
                     </li>
                  </ul>
               </nav>
            </div>
         </header>
         <div className="flex flex-row items-end gap-1">
            <p className='text-5xl origin-404-first rotate-[-25deg] w-max'>4</p>
            <p className='-mx-3 text-5xl w-max'>0</p>
            <p className='text-5xl origin-404-last rotate-[100deg] w-max'>4</p>
         </div>
      </div>   
   );
};

export default NotFound;
