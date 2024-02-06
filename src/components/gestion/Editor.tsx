import React, { useContext, useEffect, useRef, useState } from 'react';
import { EditorContext } from '../../contexts';
import { EEditorType } from '../../contexts/EditorContext';
import { Family, Income, Outcome, Product, Supplier, Use, Vat, Storage } from '../../entities';

const Editor = () => {
  const { editorType, editorOpen } = useContext(EditorContext);
  const { setEditorState } = useContext(EditorContext);
  
  const [actualClass, setClass] = useState<Family | Income | Outcome | Product | Storage | Supplier | Use | Vat>()

  useEffect(() => {
    let theClass = undefined;
    switch (editorType) {
      case EEditorType.FAMILY:
        theClass = new Family({});
        break;
      case EEditorType.INCOME:
        theClass = new Income({});
        break;
      case EEditorType.OUTCOME:
        theClass = new Outcome({});
        break;
      case EEditorType.PRODUCT:
        theClass = new Product({});
        break;
      case EEditorType.STORAGE:
        theClass = new Storage({});
        break;
      case EEditorType.SUPPLIER:
        theClass = new Supplier({});
        break;
      case EEditorType.USE:
        theClass = new Use({});
        break;
      case EEditorType.VAT:
        theClass = new Vat({});
        break;
        
      default:
        break;
    }

    if(theClass){
      setClass(theClass);
    }  
  }, [editorType])

  let editorClasses = useRef(`w-full ${editorOpen === 1 ? 'h-max' : 'h-0'} relative overflow-hidden`)

  useEffect(() => {
    editorClasses.current = `w-full ${editorOpen === 1 ? 'h-max' : 'h-0'} relative overflow-hidden`;
  }, [editorOpen])

  const handleEditorClose = () => {
    console.log('want to toggle');
    setEditorState(-1);
  }  

  return (
    <div className={editorClasses.current}>
      <form className='flex flex-wrap justify-between gap-2 bg-slate-400 w-full h-max p-4 pb-20' action="">
        { actualClass && Object.entries(actualClass.headers).map((item) => <input className='w-9/20 2xl:w-6/20 3xl:w-4/20 4xl:w-3/20 rounded-lg p-2 placeholder:capitalize' type="text" placeholder={item[1]} name={item[1]} id={item[0]}/>) }
      </form>
      <div className="flex gap-4 items-center absolute bottom-4 right-4 text-white font-semibold">
        <div className="rounded px-4 py-2 bg-blue">Enregistrer</div>
        <div className="rounded px-4 py-2 bg-red-600" onClick={handleEditorClose} >Annuler</div>
      </div>
    </div>
  );
};

export default Editor;
