import React, { useContext, useEffect, useRef, useState } from 'react';
import { EditorContext } from '../../contexts';
import { EEditorType } from '../../contexts/EditorContext';
import { Family, Income, Outcome, Product, Supplier, Use, Vat, Storage } from '../../entities';
import { Plus } from 'lucide-react';
import Loading from '../Loading';

const Editor = () => {
  const { editorType, editorOpen } = useContext(EditorContext);
  const { toggleEditor } = useContext(EditorContext);
  
  const [actualClass, setClass] = useState<Family | Income | Outcome | Product | Storage | Supplier | Use | Vat>();
  const [editorHeight, setEditorHeight] = useState(0);
  const [okInit, setOkInit] = useState(false);

  // ===== SET CLASS ==============================================================================
  useEffect(() => {
    setOkInit(false);
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
    
    setTimeout(() => {
      if (editor !== null && editor.current !== null) {
        const item = editor.current as HTMLElement;
        item.style.height = '';
        const height = item.getBoundingClientRect().height;
        setEditorHeight(height);
        handleEditorClose();
        setTimeout(() => {
          item.style.height = '0';
        }, 100);
        setTimeout(() => {
          item.classList.add('transition-all');
          setOkInit(true);
        }, 100);
      }
    }, 250);
  }, [editorType])

  const editor = useRef(null);


  useEffect(() => {
    if (editor !== null && editor.current !== null && okInit) {
      const item = editor.current as HTMLElement;
      if( editorOpen === 1)
        item.style.height = editorHeight+'px';
      else
        item.style.height = '0';
    }
  }, [editorOpen])

  const handleEditorClose = () => {
    console.log('want to close');
    
    toggleEditor(-1);
  }  
  const handleEditorOpen = () => {
    toggleEditor(1);
  }  
  const handleEditorToggle = () => {
    toggleEditor();
  }  

  const editorClasses = `w-full relative overflow-hidden`;

  return (
    <>
    { !okInit && <Loading wClass='w-full' /> }
      <div ref={editor} className={editorClasses}>
        <form className='flex flex-wrap justify-between gap-2 bg-slate-400 w-full h-max p-4 pb-20' action="">
          { actualClass && Object.entries(actualClass.headers).map((item) => <input className='w-9/20 2xl:w-6/20 3xl:w-4/20 4xl:w-3/20 rounded-lg p-2 placeholder:capitalize' type="text" placeholder={item[1]} name={item[1]} id={item[0]}/>) }
        </form>
        <div className="flex gap-4 items-center absolute bottom-4 right-4 text-white font-semibold">
          <div className="rounded cursor-pointer px-4 py-2 bg-blue">Enregistrer</div>
          <div className="rounded cursor-pointer px-4 py-2 bg-red-600" onClick={handleEditorClose}>Annuler</div>
        </div>
      </div>
      <Plus className='bg-blue rounded-full absolute bottom-10 right-10 text-white flex justify-around items-center cursor-pointer w-14 h-14 p-1 z-50' onClick={handleEditorToggle} />
    </>
  );
};

export default Editor;
