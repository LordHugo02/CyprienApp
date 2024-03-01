import { createContext } from 'react';
import Storage from '../models/Storage';

const GeneralContext = createContext({
  actualClass: <undefined|Storage> undefined,
  setActualClass: (newClass: undefined|Storage) => console.log(newClass),

  editorOpen: false,
  toggleEditor: (state: undefined|boolean = undefined) => console.log(state),

  itemId: -1,
  setItemId: (id: number) => console.log(id)
});

export default GeneralContext;