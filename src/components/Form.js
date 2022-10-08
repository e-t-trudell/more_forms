import { useState } from  'react';
    
const FunkyForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmError, setConfirmError] = useState("");   
    
    const hasBlanks = !firstName || !lastName || !email || !password || !confirmPassword 
    const hasErrors  = firstNameError || lastNameError || emailError || passwordError || confirmError
    const valid = !hasBlanks && !hasErrors

    const handleChange = (e) => {
        if(e.target.name === "firstname"){
            setFirstName(e.target.value)
            if (e.target.value.length < 2){
                
                setFirstNameError('Name must be at least two characters');
                }else {
                    
                    setFirstNameError('');
                }
        }
        if(e.target.name === "lastname"){
            setLastName(e.target.value)
            if (e.target.value.length < 2){
                
                setLastNameError('Name must be at least two characters');
                }else {
                    setLastName(e.target.value)
                    setLastNameError('');
                }
        }
        if(e.target.name === 'email'){
            setEmail(e.target.value)
            if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)){
                
                setEmailError('Incorrect email format');
                }else {
                    setEmailError('');
                }
        }
        if(e.target.name === 'password'){
            setPassword(e.target.value)
            if (e.target.value.length < 8){
                setPasswordError('Password must be at least eight characters');
            }else {
                // setPassword(e.target.value)
                setPasswordError('');
            }
        };
        if(e.target.name === 'confirmpassword'){
            setConfirmPassword(e.target.value)
            if (e.target.value !== password){
                setConfirmError('Password does not match');
            }else {
                
                setConfirmError('');
            }
        };
    }

// pass regex
// ^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$



    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset, a reset would also clear the form
        e.preventDefault();
        
        // create a javascript object to hold all of the values
        // property value shorthand can be used here if the key and the value are the same
        const newUser = { firstName, lastName, email, password };
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
                <input className='moveme' name='firstname' value={firstName} type="text" onChange={ handleChange }/>
                {
                    firstNameError ?
                    <p>{firstNameError}</p>:
                    ""
                }
            </div>
            
            <div className='formInput'>
                <label>Last Name: </label> 
                <input className='moveme' name='lastname' value={lastName} type="text" onChange={ handleChange }/>
                {
                    lastNameError ?
                    <p>{lastNameError}</p>:
                    ""
                }
            </div>
            <div className='formInput'>
                <label>Email Address: </label> 
                <input className='moveme' name='email' type="text" onChange={ handleChange }/>
                {
                    emailError ?
                    <p>{emailError}</p>:
                    ""
                }
            </div>
            <div className='formInput'>
                <label>Password: </label>
                <input className='moveme' name='password' type="password" onChange={ handleChange}/>
                {
                    passwordError ?
                    <p>{passwordError}</p>:
                    ""
                }
            </div>
            <div className='formInput'>
                <label>Confirm Password: </label>
                <input className='moveme' name='confirmpassword' type="password" onChange={ handleChange}/>
                {
                    confirmError ?
                    <p>{confirmError}</p>:
                    ""
                }
            </div>
            <button type="submit" disabled={!valid} >Creater User</button>
        </form>
        <div className='displayMe'>
            <h3>Your Form Data</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
        </>
        
    );
};
    
export default FunkyForm;