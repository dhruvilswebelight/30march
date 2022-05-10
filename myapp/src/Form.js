import { useState } from 'react';
const Form = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

const handleName = (e) => {
setName(e.target.value);
setSubmitted(false);
};

const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};

const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

const handleSubmit = (e) => {
e.preventDefault();
};

const Showpswd = () => {
    const [passwordShown, setPasswordShown] = useState(false)
    const togglePassword = () => {
        setPasswordShown(!passwordShown)
    }
}


return (
<div className="form">
<div>
<h1>User Registration</h1>
</div>


<form>
<label className="label">Name</label>
<input onChange={handleName} className="input"
value={name} type="text" />

<label className="label">Email</label>
<input onChange={handleEmail} className="input"
value={email} type="email" />

<label className="label">Password</label>

<input onChange={handlePassword} className="input"
value={password} type="password"   />

<button onClick={handleSubmit} className="btn" type="submit">
Submit
</button>


</form>


</div>


);
}
export default Form