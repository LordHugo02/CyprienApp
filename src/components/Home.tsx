
import { Link } from 'react-router-dom';

const Home = () => {
   const headerClasses = "w-full bg-slate-100 p-8 text-xl"
   const headerDivClasses = "w-1/2 flex flex-row items-center justify-between mx-auto"
 return (
    <>
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
    </>
 );
};

export default Home;
