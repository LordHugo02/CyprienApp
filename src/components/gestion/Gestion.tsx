import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Gestion = () => {

  const [asideOpen, setAsideState] = useState(true);

  const linkClasses = 'inline-flex items-center gap-4 h-full w-full transition px-3 hover:bg-blue-dark';
  const divLinkClasses = 'flex flex-row gap-4';
  const iconLinkClasses = 'text-4xl';
  const closedWidthAside = 'w-16';
  const baseWidthAside = 'w-60';
  const asideClasses = 'bg-blue h-screen flex flex-col gap-3 text-white relative overflow-x-hidden transition-all duration-500 shrink-0 group-hover:w-10 ' + baseWidthAside; 

  const toggleAside = () => {
    setAsideState(state => !state);
  };

  useEffect(() => {
    const aside = document.querySelector('aside') as HTMLElement;
    const toggler = document.querySelector('#toggler') as HTMLElement;
    if (!toggler || !aside) return;  
    if (asideOpen) {
      toggler.classList.replace('rotate-0', 'rotate-180');
      aside.classList.replace(closedWidthAside, baseWidthAside);
    } else {
      toggler.classList.replace('rotate-180', 'rotate-0');
      aside.classList.replace(baseWidthAside, closedWidthAside);
    }
  }, [asideOpen]);

  return (
        <div className="h-screen w-screen">
            <div className="flex flex-row items-stretch w-screen h-screen overflow-hidden">
                <aside id="menu" className={asideClasses}>
                    <div className="w-60 absolute h-0"></div>
                    <Icon id="toggler" onClick={toggleAside} icon="material-symbols:chevron-right-rounded" className='rotate-180 text-4xl text-bold absolute top-3 right-3 cursor-pointer transition-all duration-500' />
                    <div className="h-32 bg-no-repeat bg-bottom bg-contain mt-3 mb-2 ml-1 mr-3 bg-logo"></div>
                    <hr className="mx-3"/>
                    <ul className="text-2xl flex flex-col py-3 items-stretch justify-start gap-2">
                        <li>
                            <Link className={linkClasses} to="/gestion">
                                <div className={divLinkClasses}>
                                    <Icon className={iconLinkClasses} icon="material-symbols:inventory-2-outline-rounded" />
                                    Stock
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link className={linkClasses} to="/gestion">
                                <div className={divLinkClasses}>
                                    <Icon className={iconLinkClasses} icon="material-symbols:input" />
                                    Entrées
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link className={linkClasses} to="/gestion">
                                <div className={divLinkClasses}>
                                    <Icon className={iconLinkClasses} icon="material-symbols:output" />
                                    Sorties
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link className={linkClasses} to="/gestion">
                                <div className={divLinkClasses}>
                                    <Icon className={iconLinkClasses} icon="material-symbols:communities-outline" />
                                    Familles
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link className={linkClasses} to="/gestion">
                                <div className={divLinkClasses}>
                                    <Icon className={iconLinkClasses} icon="material-symbols:location-on-outline" />
                                    Rangements
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link className={linkClasses} to="/gestion">
                                <div className={divLinkClasses}>
                                    <Icon className={iconLinkClasses} icon="material-symbols:local-shipping-outline-rounded" />
                                    Fournisseurs
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link className={linkClasses} to="/gestion">
                                <div className={divLinkClasses}>
                                    <Icon className={iconLinkClasses} icon="material-symbols:description-outline-rounded" />
                                    Usages
                                </div>
                            </Link>
                        </li>
                    </ul>
                </aside>
                <main className="w-aside-close h-screen transition-all duration-500">
                    <Outlet />
                </main>
            </div>
        </div>
  );
};

export default Gestion;
