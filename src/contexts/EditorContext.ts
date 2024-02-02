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
  setType: (val: EEditorType) => {}
});

export default EditorContext;