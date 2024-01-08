'use client'
import Split from "react-split";
import Coding from "./Coding";
import Output from "./Output";


export default function WorkSpace() {
  return (
    <Split className='split' minSize={0}>
      <Coding/>
      <Output/>
    </Split>
  )
}
