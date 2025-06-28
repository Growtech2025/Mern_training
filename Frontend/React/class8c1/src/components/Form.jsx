import { useState } from "react";
import "./Form.css";

function Form() {

    //Baisc Approach
    const [myemail, setEmail] = useState("abc@gmail.com")
    const [pass, setPassword] = useState("123456")


   
    function formValaData(event) {
        event.preventDefault();
        console.log("mera Data", myemail, pass)
    }
    return (
        <div className="form-container">
            <form className="form" onSubmit={formValaData}>
                <h2>Login</h2>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" value={myemail} onChange={(event) => {
                            setEmail(event.target.value)
                        }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" value={pass} onChange={(event) => {
                            setPassword(event.target.value)
                        }} />
                    </div>
                </div>

                <button>Submit</button>
            </form>
        </div>

    );
}

export default Form;
