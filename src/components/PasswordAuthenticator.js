import React, {useState} from 'react'

export default function PasswordAuthenticator() {
    const [password, setPassword] = useState('');
    const [color, setColor] = useState('white');
  
    let validPassword = (e) => {
      setPassword(e.target.value);
      let n = password.length;
      if(n < 3){
        setColor('red')
      }else if (n >=3 && n <= 8){
        setColor('yellow')
      }else if (!containsSpecialChars(password) || !containsNumber(password)){
        setColor('blue');
      }else{
        setColor('green');
      }
    }
    function containsSpecialChars(str) {
      const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      return specialChars.test(str);
    }
    function containsNumber(str) {
      return /\d/.test(str);
    }
    return (
      <div>
        <input type='text/html' value={password} onChange = {validPassword} />
        <div>{color}</div>
      </div>
    );
}
