import React from "react"

interface InitValueType {
  name: string
  role: string
  [propsName: string]: any
}
export const initValue: Partial<InitValueType> = {
  name: "admin", role: 'admin'
}
export const TopContext = React.createContext(initValue)