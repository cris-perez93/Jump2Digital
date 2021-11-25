export default function formValidate (value) {
    
    let error = {};

    

  

    // email
    if(!value.email) {
        error.email = 'Email is required'

    }else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email) ){
        error.email = 'Email format error'
    }

    //number card // visa, mastercard, amercian express, diners club, discover, and jcb cards.
     
    if(!value.numbercard) {
        error.numbercard = 'Number is required'

    }else if ( !/^(?:4\d{3}|5[1-5]\d{2}|6011|3[47]\d{2})([-\s]?)\d{4}\1\d{4}\1\d{3,4}$/i.test(value.numbercard)){

        error.numbercard = 'Invalid card number'
    }

    //expires date
    if(!value.expiry) {
        error.expiry = 'Expiry date is required'

 }else if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/i.test(value.expiry)){
        error.expiry = 'Invalid format date'
        
 }
    //cvc
    if(!value.cvc) {
        error.cvc = 'cvc is required'

    }else if ( !/^^[0-9]{3,4}$/i.test(value.cvc) ){
        error.cvc = 'cvc format error'
    }

    //namecard
    if( !value.namecard) {
        error.namecard = 'name is required'
    }

    //zip
    if(!value.zip) {
        error.zip = 'zip is required'

    }else if ( !/^\d{5}(?:[-\s]\d{4})?$/i.test(value.zip) ){
        error.zip = 'zip format error'
    }

return error ;
}