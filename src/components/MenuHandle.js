import React from 'react'
import Btn from './Button'

const defaultProps = {
  className: 'col-menu-handle',
  label: 'Open the menu for this block',
  type: 'button'
}

export default class MenuHandle extends React.Component {
  render() {
    const { label, ...safe } = this.props

    return (
      <Btn {...safe}>
        <span className="col-hidden">{label}</span>
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </Btn>
    )
  }
}

MenuHandle.defaultProps = defaultProps
