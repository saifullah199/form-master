import { useState } from "react";


const StatefulForm = () => {

    const [email, SetEmail] = useState();
    const [password, setPassword] =useState();
    const [name, setName]= useState('Rojoni Klanto');
    const [error,setError] = useState('')
    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length <6 ){
            setError('Password must be 6 characters or longer')

        }
        else {
            setError('');
        }
        console.log(email,name, password);
    }
    const handleEmailChange = e =>{
        console.log(e.target.value);
        SetEmail(e.target.value);
    }
    const handlePassword = e =>{
        setPassword(e.target.value);
    }
    const handleName = e =>{
        setName(e.target.value);
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                onChange={handleName}
                type="text" name="name" />
                <br />
                <input
                onChange={handleEmailChange}
                type="email" name="email" />
                <br />
                <input
                onChange={handlePassword}
                type="password" name="password" />
                <br />
                <input type="submit" name="Submit" />

                {
                    error && <p> {error}</p>
                }
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default StatefulForm;