import React from 'react';
import styles from './Header.css';
import ButtonContainers from './ButtonContainers.jsx'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Home'
    };
  }

  render() {
        console.log('current page', this.props.match)
    return(
      <div className={styles.header}>
        <div className={styles.toplefticon}> top left icon</div>
        <ButtonContainers selected={this.props.selected} selectorfunction={this.props.selectorfunction}/>
      </div>
    )
  }
}

export default Header;