import React, { useContext, useEffect, useState } from 'react';
import { EditorContext } from '../../contexts';
import { EEditorType } from '../../contexts/EditorContext';
import { Family, Income, Outcome, Product, Supplier, Use, Vat, Storage } from '../../entities';

const Editor = () => {
  const { editorType } = useContext(EditorContext);
  
  const [actualClass, setClass] = useState<Family | Income | Outcome | Product | Storage | Supplier | Use | Vat>()

  useEffect(() => {
    let theClass = undefined;
    switch (editorType) {
      case 0:
        theClass = new Family({});
        break;
      case 1:
        theClass = new Income({});
        break;
      case 2:
        theClass = new Outcome({});
        break;
      case 3:
        theClass = new Product({});
        break;
      case 4:
        theClass = new Storage({});
        break;
      case 5:
        theClass = new Supplier({});
        break;
      case 6:
        theClass = new Use({});
        break;
      case 7:
        theClass = new Vat({});
        break;
        
      default:
        break;
    }

    if(theClass){
      setClass(theClass);
      console.log(theClass.headers);
    }  
  }, [editorType])

  return (
    <div className='w-full h-max'>
      <form className='flex flex-wrap justify-between gap-y-2 bg-slate-400 w-full h-max p-4 pb-20' action="">
        
        { actualClass && Object.entries(actualClass.headers).map((item) => <input className='w-6/20 rounded-lg p-2' type="text" placeholder={item[1]} name={item[1]} id={item[0]}/>) }
      </form>
    </div>
  );
};

export default Editor;
