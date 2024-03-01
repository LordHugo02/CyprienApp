import React, { useContext, useEffect, useRef, useState } from 'react';
import { Plus } from 'lucide-react';
import Loading from '../Loading';
import GeneralContext from '../../contexts/GeneralContext';

const Editor = () => {
  const { actualClass, editorOpen, itemId } = useContext(GeneralContext);
  const { toggleEditor } = useContext(GeneralContext);
  
  const [editorHeight, setEditorHeight] = useState(0);
  const [okInit, setOkInit] = useState(false);
  const [item, setItem] = useState();

  // ===== SET CLASS ==============================================================================
  useEffect(() => {
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
  }, [actualClass]);

  const editor = useRef(null);

  useEffect(() => {
    async function initItem(){
      const data = await actualClass?.getById(itemId);
      setItem(data);
    }
    initItem();
  }, [itemId, actualClass]);

  useEffect(() => {
    if (editor !== null && editor.current !== null && okInit) {
      const item = editor.current as HTMLElement;
      if( editorOpen === true)
        item.style.height = editorHeight+'px';
      else
        item.style.height = '0';
    }
  }, [editorOpen]);

  const handleEditorClose = () => {
    toggleEditor(false);
  };
  const handleEditorToggle = () => {
    toggleEditor();
  };  

  const editorClasses = 'w-full relative overflow-hidden delay-75';

  return (
    <>
      { !okInit && <Loading wClass='w-full' /> }
      <div ref={editor} className={editorClasses}>
        <form className='flex flex-wrap justify-between gap-2 bg-slate-400 w-full h-max p-4 pb-20' action="">
          { actualClass && Object.entries(actualClass.headers).map((header) => <input className='w-9/20 2xl:w-6/20 3xl:w-4/20 4xl:w-3/20 rounded-lg p-2 placeholder:capitalize' type="text" value={item ? item[header[0]] : ''} placeholder={header[1]} name={header[1]} id={header[0]} key={header[1]}/>)}
          { item && <input type="hidden" name="id" value={item['id']} />}
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
