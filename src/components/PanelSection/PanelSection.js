import React from 'react'
import createReactClass from 'create-react-class'
// Styling
import styles from './panelSection.module.scss'
import cx from "classnames";
import PropTypes from 'prop-types';

const PanelSection = createReactClass({
  getInitialState() {
    return {
      visible: this.props.visible !== undefined ? this.props.visible : true
    }
  },
  _toggleCollapse(val) {
    const { onCollapse } = this.props
    if (this.props.collapsible) {
      if (onCollapse) {
        onCollapse()
      } else {
        if (val !== undefined) {
          this.setState({visible: val})
        } else {
          this.setState({visible: !this.state.visible})
        }
      }
    }
  },
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== undefined && this.state.visible !== nextProps.visible) {
      // console.log('nextProps.visible:', nextProps.visible)
      this.setState({visible: nextProps.visible})
    }
  },
  _getContent() {
    if (this.state.visible) {
      return (
        <div className={cx(this.props.classNameContainer)}>
          {this.props.children}
        </div>
      )
    }
  },
  render() {
    // console.log('this.state:', this.state)
    return (
      <div className={cx(this.props.className)}>
        <div
          className={cx(styles.title,
            !this.state.visible && styles.closed,
            this.props.collapsible && styles.collapsible,
          )}
          onClick={()=>this._toggleCollapse()}
        >
          {this.props.title || "TITLE"}
        </div>
        {this._getContent()}
      </div>
    )
  }
})

PanelSection.propTypes = {
	// styleName: PropTypes.oneOf(['primary','secondary','valid','warning','alert', 'primary-light','light','secondary-light','valid-light','warning-light','alert-light','bid','offer','dark','best']),
  onClick: PropTypes.func,
	// debounce: PropTypes.number,
	// disabled: PropTypes.bool
	visible: PropTypes.bool,
	collapsible: PropTypes.bool,
	classNameContainer: PropTypes.className,
	children: PropTypes.children
}

PanelSection.defaultProps = {
	// styleName: 'primary',
  onClick: ()=>{},
	// debounce: null,
	// disabled: false,
	visible: true,
	collapsible: true,
	className: null,
	children: <div>Panel Section</div>
};


export default PanelSection
