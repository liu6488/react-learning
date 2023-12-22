import React, { useEffect } from "react";

// function EffectHookDemo(props)
//主体函数
export const EffectHookDemo = (props) => {
  return (
    <>
      <DipMountCom name='Dip'></DipMountCom>
      {/* <DidUpdateCom name="DidUpdate"></DidUpdateCom> */}
      {/* <WillUnMountCom name="willUnMount"></WillUnMountCom> */}
    </>
  )
}

const DipMountCom = (props) => {
  useEffect(() => {
    console.log(props.name, 'DipMountCom');
  })
}

// const DidUpdateCom = (props) => {
//   useEffect(() => {
//     console.log(props.name, 'DidUpdateCom');
//   }, ['count', 'name'])
// }
// // componentWillUnMount 
// const WillUnMountCom = (props) => {
//   useEffect(() => {
//     return () => {
//       console.log(props.name, 'WillUnMount');
//     }
//   }, [])
// }

