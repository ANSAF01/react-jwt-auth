import { useState } from "react";

function Register() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({
            name,
            email,
            password
        });
    };


    return (
        <div>
            <h2> Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                     type="text"
                     placeholder="Enter name"
                     value={name}
                     onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <input
                     type="email"
                     placeholder="Enter Email"
                     value={email}
                     onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <input
                     type="password"
                     placeholder="Enter Password"
                     value={password}
                     onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;