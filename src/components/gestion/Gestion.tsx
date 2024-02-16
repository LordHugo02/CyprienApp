import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ChevronRight, Component, Package, PackageMinus, PackagePlus, ReplaceAll, Table, Truck } from 'lucide-react';
import { EditorContext } from '../../contexts';
import { EEditorType } from '../../contexts/EditorContext';
import Editor from './Editor';

const Gestion = () => {
    
    const [asideOpen, setAsideState] = useState(true);

    const [editorType, setType] = useState(EEditorType.PRODUCT);
    const [itemId, setItem] = useState(-1);
    const [editorOpen, setEditorState] = useState(-1);

    const toggleEditor = (state: number = 0) => {
        setEditorState((current) => {
            return state === 0 ? current *= -1 : state
        } );
    };
    const setItemId = (id: number = -1) => {
        setItem(id);
    };
    const value = { 
        editorType, setType,
        editorOpen, toggleEditor,
        itemId, setItemId
    };

  const linkClasses = 'inline-flex items-center gap-4 h-full w-full transition px-3 py-2 hover:bg-blue-dark hover:text-white aria-[current=page]:bg-white aria-[current=page]:text-blue aria-[current=page]:rounded-l-full';
  const divLinkClasses = 'flex flex-row gap-4';
  const iconLinkClasses = 'w-10 h-10';
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
  
  const mainClasses = `${asideOpen ? 'w-aside-open' : 'w-aside-close'} h-screen transition-all duration-500 relative`;

  return (
        <div className="h-screen w-screen">
            <div className="flex flex-row items-stretch w-screen h-screen overflow-hidden">
                <aside id="menu" className={asideClasses}>
                    <div className="w-60 absolute h-0"></div>
                    <ChevronRight id="toggler" onClick={toggleAside} className='rotate-180 w-10 h-10 text-bold absolute top-3 right-3 cursor-pointer transition-all duration-500' />
                    <div className="h-32 bg-no-repeat bg-bottom bg-contain mt-3 mb-2 ml-1 mr-3 bg-logo"></div>
                    <hr className="mx-3"/>
                    <ul className="text-2xl flex flex-col py-3 items-stretch justify-start gap-2">
                        <li>
                            <NavLink className={linkClasses} to="/gestion/stock" end>
                                <div className={divLinkClasses}>
                                    <Package className={iconLinkClasses} />
                                    Stock
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={linkClasses} to="/gestion/incomes" end>
                                <div className={divLinkClasses}>
                                    <PackagePlus className={iconLinkClasses} />
                                    Entrées
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={linkClasses} to="/gestion/outcomes" end>
                                <div className={divLinkClasses}>
                                    <PackageMinus className={iconLinkClasses} />
                                    Sorties
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={linkClasses} to="/gestion/families" end>
                                <div className={divLinkClasses}>
                                    <Component className={iconLinkClasses} />
                                    Familles
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={linkClasses} to="/gestion/storages" end>
                                <div className={divLinkClasses}>
                                    <ReplaceAll className={iconLinkClasses} />
                                    Rangements
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={linkClasses} to="/gestion/suppliers" end>
                                <div className={divLinkClasses}>
                                    <Truck className={iconLinkClasses} />
                                    Fournisseurs
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={linkClasses} to="/gestion/uses" end>
                                <div className={divLinkClasses}>
                                    <Table className={iconLinkClasses} />
                                    Usages
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </aside>
                <main className={mainClasses}>
                    <EditorContext.Provider value={value}>
                        <Editor />
                        <Outlet />
                    </EditorContext.Provider>
                </main>
            </div>
        </div>
  );
};

export default Gestion;
