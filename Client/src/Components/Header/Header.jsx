import React from 'react';
import styles from './Header.css';
import ButtonContainers from './ButtonContainers.jsx'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className={styles.header}>
        <div className={styles.toplefticon}> top left icon</div>
        <ButtonContainers/>
      </div>
    )
  }
}

export default Header;