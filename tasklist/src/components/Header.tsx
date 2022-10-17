import React from "react";
import Styles from './Header.module.css'



const Header = () => {

    return (
       <div>
          <header className={Styles.header}>
            <h1>MyTodo with TS and React</h1>
            </header>
       </div>
    )

}

export default Header