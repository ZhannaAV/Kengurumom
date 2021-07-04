import React, { useState } from 'react';
import './CustomSelect.css';

const CustomSelect = ({ options, startValue, page }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSelectActive, setIsSelectActive] = useState(false);

  const toggling = () => {
    setIsOpen(!isOpen);
    setIsSelectActive(!isSelectActive);
  };

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    setIsSelectActive(false);
    console.log(selectedOption);
  };

  return (
    <section className={`select ${page && `select_${page}`}`}>
      <div className="select__wrapper">
        <div
          className={`select__header ${
            isSelectActive && 'select__header_active select-arrow-active'
          }`}
          onClick={toggling}
        >
          <div className="select__main-option">{selectedOption || startValue}</div>
        </div>
        <div className={`select__container ${isOpen && 'select__container_opened'}`}>
          <div className="select__list">
            {options.map((option, i) => (
              <li
                className={`select__list-item ${
                  selectedOption === option && 'select__list-item__active'
                }`}
                onClick={onOptionClicked(option)}
                key={i}
              >
                <div className="test">{option}</div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSelect;
