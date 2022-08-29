import React, {useState} from 'react'
function useFormInputs(initialValue) {
    const [value, setValue] = useState('');

    function handleChange(e){
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}
function CustomHooks() {
    const email = useFormInputs('');
    const password = useFormInputs('');

  return (
    <div>
      <label htmlFor="">Email</label>
      <input type="email" value={email.value} onChange={email.onChange} /><br />
      <label htmlFor="">Password</label>
      <input type="password" {...password} /> <br />
      <div>
          <p>Email : {email.value}</p>
          <p>Password : {password.value}</p>
      </div>

    </div>
  )
}

export default CustomHooks
