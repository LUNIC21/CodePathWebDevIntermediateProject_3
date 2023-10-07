import React, { useState, useEffect } from 'react';
import '../Q6Checkbox.css';

const Q6Checkbox = ({ updateCheckboxes }) => {
  const [checkboxes, setCheckboxes] = useState({
    'imitation crab meat': false,
    'spicy tuna': false,
    'yellowtail': false,
    'spicy scallop': false,
    'onions': false,
    'avocado': false,
    'green onions': false,
    'sesame seeds': false,
    'cucumber': false,
    'albacore': false
  });

  const handleCheckboxChange = (option) => {
    setCheckboxes(prevCheckboxes => {
      const updatedCheckboxes = { ...prevCheckboxes, [option]: !prevCheckboxes[option] };
      updateCheckboxes(updatedCheckboxes);
      return updatedCheckboxes;
    });
  };

  return (
    <div className='checkbox-options'>
      <ul>
        {Object.entries(checkboxes).map(([option, isChecked]) => (
          <li key={option}>
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Q6Checkbox;
