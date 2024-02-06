import { createContext } from "react"

export enum EEditorType {
  FAMILY = 0,
  INCOME,
  OUTCOME,
  PRODUCT,
  STORAGE,
  SUPPLIER,
  USE,
  VAT
}

const EditorContext = createContext({
  editorType: EEditorType.PRODUCT,
  setType: (val: EEditorType) => {},
  editorOpen: -1,
  toggleEditor: (force: number) => {},
});

export default EditorContext;