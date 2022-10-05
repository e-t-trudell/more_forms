import { useState } from  'react';
    
const FunkyForm = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstnameError, setFirstNameError] = useState("");
    const [lastnameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmError, setConfirmError] = useState("");   
    
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2){
            setFirstNameError('Name must be at least two characters');
        }else {
            setFirstNameError('');
        }
    };
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2){
            setLastNameError('Name must be at least two characters');
        }else {
            setLastNameError('');
        }
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5){
            setEmailError('Email must be at least five characters');
        }else {
            setEmailError('');
        }
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8){
            setPasswordError('Password must be at least eight characters');
        }else {
            setPasswordError('');
        }
    };
    const handleConfirm = (e) => {
        setConfirm(e.target.value);
        if (e.target.value !== password){
            setConfirmError('Password does not match');
        }else {
            setConfirmError('');
        }
    };

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset, a reset would also clear the form
        e.preventDefault();
        
        // create a javascript object to hold all of the values
        // property value shorthand can be used here if the key and the value are the same
        const newUser = { firstname, lastname, email, password };
        console.log("Did you bring brownies", newUser);
        // these are only possible if the two way data binding from the use of value on lines 32,36,40,44
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setHasBeenSubmitted(true);
    };

    const formMessage = () => {
        if(hasBeenSubmitted) {
            return 'Thank you for submitting a form with FORM_o';
        } else {
            return 'Welcome your form completion is requested';
        }
    };
    // <h2>{formMessage()}</h2> Dont need this if you ahve another 'manual message upon submit'
    return(
        <>
        <form onSubmit={ createUser }>
            
            {
                hasBeenSubmitted ?
                <h3>Thank you for submitting a form with Form_o</h3> :
                <h3>Welcome Form_o requests you complete this form.</h3>
            }
            <div className='formInput'>
                <label>First Name: </label> 
                <input className='moveme' type="text" onChange={ handleFirstName }/>
                {
                    firstnameError ?
                    <p>{firstnameError}</p>:
                    ""
                }
            </div>
            
            <div className='formInput'>
                <label>Last Name: </label> 
                <input className='moveme' type="text" onChange={ handleLastName }/>
                {
                    lastnameError ?
                    <p>{lastnameError}</p>:
                    ""
                }
            </div>
            <div className='formInput'>
                <label>Email Address: </label> 
                <input className='moveme' type="text" onChange={ handleEmail }/>
                {
                    emailError ?
                    <p>{emailError}</p>:
                    ""
                }
            </div>
            <div className='formInput'>
                <label>Password: </label>
                <input className='moveme' type="password" onChange={ handlePassword}/>
                {
                    passwordError ?
                    <p>{passwordError}</p>:
                    ""
                }
            </div>
            <div className='formInput'>
                <label>Confirm Password: </label>
                <input className='moveme' type="password" onChange={ handleConfirm}/>
                {
                    confirmError ?
                    <p>{confirmError}</p>:
                    ""
                }
            </div>
            
            {
                firstnameError || lastnameError || emailError || passwordError || confirmError ?
                <input type = "submit" value= "Create" disabled /> :
                <input type = "submit" value= "Create" />
            }
            
        </form>
        <div className='displayMe'>
            <h3>Your Form Data</h3>
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {password}</p>
        </div>
        </>
        
    );
};
    
export default FunkyForm;