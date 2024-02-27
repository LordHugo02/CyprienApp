import { createContext } from 'react';
import Storage from '../models/Storage';

const GeneralContext = createContext({
  actualClass: <undefined|Storage> undefined,
  setActualClass: (newClass: undefined|Storage) => console.log(newClass),

  editorOpen: false,
  toggleEditor: (state: boolean) => console.log(state)
});

export default GeneralContext;