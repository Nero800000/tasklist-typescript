import React from "react";
import Styles from './Footer.module.css'


const Footer = () => {

    return (
       <div>
           <footer className={Styles.footer}>
          <p>
            <span>React + TS Todo</span> @2022
          </p>
         </footer>

       </div>
    )

}

export default Footer