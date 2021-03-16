import React, { useState, useRef, useEffect } from 'react';
import './DropdownAccounts.css';

function DropdownAccounts({
    accounts,
    id,
    label,
    accountType,
    prompt,
    value2,
    onChange,
}) {

const [open2, setOpen] = useState(false);
const ref2 = useRef(null);

useEffect(() => {
  document.addEventListener('click', close)
  return () => document.removeEventListener('click', close);
}, []);

function close(e) {
  setOpen(e && e.target === ref2.current);
}

    return (
        <div className='container-dropdown-accounts'>
            <div className='ContainerPayFrom'>
                <p>Pay from:</p>
            </div>
            <div className='dropdown-accounts'>
                <div className='control' onClick={() => setOpen(prev => !prev)}>
                    <div className='selected-value' ref={ref2}>{
                                (accountType == 'BANKACCOUNT')
                                ? <i class='fas fa-university'></i>
                                : <i class='fas fa-credit-card'></i>
                            } {value2 ? value2[label] : prompt}</div>
                    <div className={`arrow circle ${open2 ? 'open' : null}`}/> 
                </div>
                <div className={`accounts ${open2 ? 'open' : null}`}>
                    {accounts.map(account => (
                        <div
                            key={account[id]} 
                            className={`account ${value2 === account ? 'selected' : null}`}
                            onClick={() => {
                                onChange(account);
                                setOpen(false);
                        }}>
                            {
                                (account[accountType] == 'BANKACCOUNT')
                                ? <i class='fas fa-university'></i>
                                : <i class='fas fa-credit-card'></i>
                            }
                            {account[label]}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    )
}

export default DropdownAccounts;
