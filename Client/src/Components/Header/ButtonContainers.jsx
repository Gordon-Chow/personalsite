import React from 'react';
import styles from './ButtonContainers.css';
import { Link } from 'react-router-dom';
import Headerbutton from './Headerbutton.jsx';

class ButtonContainers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const list = ['Home', 'About', 'Projects', 'Resume', 'Contact']
    // console.log(list)
    // console.log('2', this.props)
    return (
      <div className={styles.buttonDiv}>
        {list.map(button =>{
          return <Headerbutton button={button} selected={this.props.selected} selectorfunction={this.props.selectorfunction}/>
        })}
      </div>
    )
  }
}

export default ButtonContainers;