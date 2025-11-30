"use client";
import {FC} from "react"

interface BtnProps {
  open: boolean;
  onClick: (e:boolean) => boolean
}

const HamburgerToggle:FC<BtnProps> =({open,onClick})=> {
  return (
    <div>
      <input type="checkbox" id="checkbox" checked={open} onChange={(e)=>onClick(e.target.checked)} />
      <label htmlFor="checkbox" className="toggle">
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
      </label>
    </div>
  );
}

export default HamburgerToggle;
