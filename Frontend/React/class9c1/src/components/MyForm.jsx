import { useState } from "react"

function MyForm() {

    //for managing each input feild we have a separate state variables so it becomes difficult to manage 
    const [userName, setUserName] = useState("xyz")
    const [age, setAge] = useState("27")
    const [pass, setPass] = useState("1234")
    function formData(event) {
        event.preventDefault()
        console.log("username value", userName, age, pass)
    }
    return (
        <div>
            <h1>Normal Form Approach</h1>

            <form onSubmit={formData}>
                <div>
                    <label htmlFor="uName">User Name:</label>
                    <input type="text" id="uName" placeholder="Enter User Name" value={userName} onChange={(event) => {
                        setUserName(event.target.value)
                    }} />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" placeholder="Enter User Name" value={age} onChange={(event) => {
                        setAge(event.target.value)
                    }} />
                </div>
                <div>
                    <label htmlFor="pass">Password</label>
                    <input type="password" id="pass" placeholder="Enter User Name" value={pass} onChange={(event) => {
                        setPass(event.target.value)
                    }} />
                </div>
                <div>
                    <button>Submit</button>
                </div>

            </form>

        </div>
    )
}

export default MyForm