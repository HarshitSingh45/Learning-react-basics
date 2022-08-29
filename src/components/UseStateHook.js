import React, {useState} from 'react'

function UseStateHook() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    function handleChange(e) {
        setEmail(e.target.value);
    }
    function handleChangeName(e) {
        setName(e.target.value);
    }
  return (
    <div>
      <label htmlFor="">Enter email</label> &nbsp;
      <input type="email" value={email} onChange={handleChange} />
      <br />
      <label htmlFor="">Enter name</label> &nbsp;
      <input type="text" value={name} onChange={handleChangeName} />
      <p><span>Email - </span><span>{email}</span></p>
      <p><span>Name - </span><span>{name}</span></p>
    </div>
  )
}

export default UseStateHook
