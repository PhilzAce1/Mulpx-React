import React, { useState, useRef, useEffect } from 'react';
import './DropdownContacts.css';

function DropdownContacts({
    contacts,
    id,
    label,
    prompt,
    value1,
    onChange,
}) {

const [open1, setOpen] = useState(false);
const ref1 = useRef(null);

useEffect(() => {
  document.addEventListener('click', close)
  return () => document.removeEventListener('click', close);
}, []);

function close(e) {
  setOpen(e && e.target === ref1.current);
}

    return (
      <div className='container-dropdown-contacts'>
        <div className='dropdown-contacts'>
          <div className='control' onClick={() => setOpen(prev => !prev)}>
            <div className='selected-value' ref={ref1}>{value1 ? value1[label] : prompt}</div>
            <div className={`arrow circle ${open1 ? 'open' : null}`}/> 
          </div>
          <div className={`contacts ${open1 ? 'open' : null}`}>
            {contacts.map(contact => (
                <div
                    key={contact[id]} 
                    className={`contact ${value1 === contact ? 'selected' : null}`}
                    onClick={() => {
                        onChange(contact);
                        setOpen(false);
                }}>{contact[label]}
                </div>
            ))}
          </div>
        </div>
      </div>
        
    )
}

export default DropdownContacts;
