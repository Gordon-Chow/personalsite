import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Headerbutton.css'

class Headerbutton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props)

    let isSelected = '';
    // console.log(this.props.button === this.props.selected)
    if (this.props.button === this.props.selected) {
      isSelected = styles.selected;
    }
    if(this.props.button === 'Home') {
      return (
        <Link className={`${styles.buttons} ${isSelected}`} onClick={()=> this.props.selectorfunction(this.props.button)} to={`/`}>{this.props.button}</Link>
      )
    }
    return (
        <Link className={`${styles.buttons} ${isSelected}`} onClick={()=> this.props.selectorfunction(this.props.button)} to={`/${this.props.button}/`}>{this.props.button}</Link>
    )
  }
}


export default Headerbutton;