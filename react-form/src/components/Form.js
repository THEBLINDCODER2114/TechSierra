import React, { useState, useEffect } from 'react'

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [DOB, setDOB] = useState("");
  const [emailid, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirm, setconfirm] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [cPassword, setCPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState('form-control');


  useEffect(() => {
    if (isCPasswordDirty) {
        if (password === cPassword) {
            setShowErrorMessage(false);
            setCPasswordClass('form-control is-valid')
        } else {
            setShowErrorMessage(true)
            setCPasswordClass('form-control is-invalid')
        }
    }
},
 [cPassword, isCPasswordDirty, password])
  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setIsCPasswordDirty(true);
}

  function validateForm() {
   

    if (firstName.length === 0) {
      alert('Invalid Form, First Name can not be empty')
      return
    }
    else if (emailid.length === 0) {
      alert('Invalid Form, Email Address can not be empty')
      return
    }
    else if (password.length < 8) {
      alert(
        'Invalid Form, Password must contain atleast 8 characters.',
      ) 
    }
    else if (password.length > 8) {
      let countUpperCase = 0
   
    let countLowerCase = 0
   
    let countDigit = 0
    
    let countSpecialCharacters = 0

    for (let i = 0; i < password.length; i++) {
      const specialChars = [
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '_',
        '-',
        '+',
        '=',
        '[',
        '{',
        ']',
        '}',
        ':',
        ';',
        '<',
        '>',
      ]

      if (specialChars.includes(password[i])) {
       
        countSpecialCharacters++
      } else if (!isNaN(password[i] * 1)) {
      
        countDigit++
      } else {
        if (password[i] === password[i].toUpperCase()) {
         
          countUpperCase++
        }
        if (password[i] === password[i].toLowerCase()) {
        
          countLowerCase++
        }
      }
    }

    if (countLowerCase === 0) {
      
      alert('Invalid Form, 0 lower case characters in password')
      return
    }

    if (countUpperCase === 0) {
      
      alert('Invalid Form, 0 upper case characters in password')
      return
    }

    if (countDigit === 0) {
   
      alert('Invalid Form, 0 digit characters in password')
      return
    }

    if (countSpecialCharacters === 0) {
      alert('Invalid Form, 0 special characters in password')
      return
    }
    }
    else if (password === setCPassword) {
      console.log(password, setCPassword);
      alert("Correct pass")
    }
   else{
    alert('Check Password')
   }
    
   
  }

  return (
    <div className="main">
      <div>
        <label htmlFor="firstname">FirstName</label>:
        <input
          placeholder="abc"
          required
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor="lastname">LastName</label>:
        <input
          placeholder="xyz"
          required
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor="emailid">Email-Id</label>:
        <input
          placeholder="example@gmail.com"
          required
          type="text"
          value={emailid}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br />
      <div>
      <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={password}
                        onChange={(e) => { setPassword(e.target.value) }} />
      </div>
      <br />
      <div>
      <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className={cPasswordClass} id="confirmPassword" value={cPassword}
                        onChange={handleCPassword} />
      </div>
      {showErrorMessage && isCPasswordDirty ? <div> Passwords did not match </div> : ''}
      <br />
      <div>
        <label htmlFor="DOB">DOB</label>:
        <input
          required
          type="date"
          value={DOB}
          onChange={(e) => setDOB(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor="address">Address</label>:
        <input
          required
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor="country">Country</label>:
        <input
          required
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor="state">State</label>:
        <input
          required
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor="contact">Contact</label>:
        <input
          required
          type="tel"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>
      <br />
      <button type="submit" onClick={() => {
            validateForm()
          }} >Submit</button>
    </div>
  );
}

export default Form;
