import { useEffect, useRef } from "react";


const RefForm = () => {

    const nameref = useRef(null);
    const emailref = useRef(null);
    const passwordref = useRef(null);

    useEffect (()=> {
        nameref.current.focus();
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(nameref.current.value)
        console.log(emailref.current.value)
        console.log(passwordref.current.value)
    }
    return (
        <div>
                <form action="" onSubmit={handleSubmit}>
                <input ref={nameref} type="text" name="name" />
                <br />
                <input ref={emailref} type="email" name="email" />
                <br />
                <input ref={passwordref} type="password" name="password" />
                <br />
                <input type="submit" name="Submit" />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default RefForm;