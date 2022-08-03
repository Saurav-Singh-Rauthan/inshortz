import React from 'react'

import Styles from './Navbar.module.css';

const Navbar = (props) => {
  return(
    <div className={Styles.cont}>
      {props.children}
    </div>
  )
}

export default Navbar