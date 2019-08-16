import React from 'react';

export default function ModalMenu(props) {
  const {options, upgrades} = props.options;

  return (
    <div id="modal_menu">
      {options !== undefined
        ? options.map(option => (
          <div key={option._id}>
            <h4>
              {option.name}
            </h4>
            <p>
              {option.text}
            </p>
          </div>))
        : null
      }
      {upgrades !== undefined
        ? upgrades.map(upgrade => (
          <div key={upgrade._id}>
            <h4>
              {upgrade.name}
            </h4>
            <p>
              {upgrade.text}
            </p>
          </div>))
        : null
      }
    </div>
  )
}