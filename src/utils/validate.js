export const checkValidData=(name,email,password)=>{
    const emailValidate=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const passwordValidate=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const nameValidate=/^[a-zA-Z]+(([ ][a-zA-Z])?[a-zA-Z]*)*$/.test(name)
    
    if(!nameValidate){  return 'Invalid Name' } 
    else if(!emailValidate) {return 'Invalid Email'}

   else if(!passwordValidate) {return 'Invalid Password'}
   else if (!email && !password) {
    return 'All fields are required';
  }
    else return null;
}