import React from "react";

import Styles from './Modal.module.css'

interface Props {
    children: React.ReactNode;

}

const Moda = ({children}:Props) => {

    const closeModal = (e:React.MouseEvent):void => {
        const modal = document.querySelector("#modal")
        modal!.classList.add("hide")

    }
    return (
        <div id="modal" className="hide">
          <div className={Styles.fade} onClick={closeModal}></div>
          <div className={Styles.modal}>

          <h2>Texto modal</h2>
          {children}

          </div>
          </div>
     
    )
}

export default Moda