import React from 'react';

import '../assets/css/MultiPayment.css';

function MultiPayment() {
	return <div>{<section class="section-form">
    <div class="header">
        <h1>&leftarrow; Multiple Payment </h1> 
     </div>
    <div class="box">

        <h2>payment Beneficiaries</h2>

        <div class="toggle-box">
            <span class="toggle__text">fill same amount</span>
            <input type="checkbox" name="" id="toggle-auto-complete">
            <label for="toggle-auto-complete"  class="toggle-switch">&nbsp; <span class="toggle-switch__botton"></span></label>

            <input type="checkbox" name="" id="toggle-delete">
            <label for="toggle-delete" id="toggle-delet" class="toggle-delete"> &#128465;</label>
        </div>

    </div>

    
    <form action="#" class="form">
        <div class="form__detail">

            <input type="checkbox" class="checked" name="account-num" id="form--01">
            <input type="number" placeholder="Account no/Phone no" name="acc-num" id="">
            <input type="text" placeholder="Bank name" name="acc-name" id="">
            <input type="number" placeholder="Amount" name="amount" id="">
        </div>
        <div class="form__detail"> 
            <input type="checkbox" name="account-num" id="form--01">
            <input type="number" placeholder="Account no/Phone no" name="acc-num" id="">
            <input type="text" placeholder="Bank name" name="acc-name" id="">
            <input type="number" placeholder="Amount" name="amount" id="">
        </div>
        <div class="form__detail">
            <input type="checkbox" name="account-num" id="form--01">
            <input type="number" placeholder="Account no/Phone no" name="acc-num" id="">
            <input type="text" placeholder="Bank name" name="acc-name" id="">
            <input type="number" placeholder="Amount" name="amount" id="">
        </div> 

        <div class="form__detail">
            <input type="checkbox" name="account-num" id="form--01">
            <input type="number" placeholder="Account no/Phone no" name="acc-num" id="">
            <input type="text" placeholder="Bank name" name="acc-name" id="">
            <input type="number" placeholder="Amount" name="amount" id="">
        </div>
        <div class="box">
            <a href="#" class="btn">&male; Pay from group list</a>
            <a href="#" class="btn">&plus; Add recipients</a>
        </div>
        <button type="submit">Pay</button>
    </form>

</section>}</div>;
}

export default MultiPayment;
