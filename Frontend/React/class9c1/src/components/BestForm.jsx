import { useState } from "react"

function MyForm() {
    //agar mere pass multiple input feilds hai us case me, ham ek object ko useState ke andar pass kar denge 


    const [myFormData, setMyFormData] = useState({
        userName: "xyz",
        age: 27,
        pass: "1234",
        date: "2025-06-24",
        email: "abc@gmail.com",
        city: "katni"
    });


    function handleChangeFormData(event) {
        // 
        setMyFormData((initalData) => {
            return { ...initalData, [event.target.name]: event.target.value }
        })
    }

    function formData(event) {
        event.preventDefault()
        console.log("Form data me value", myFormData)
    }

    function seleCTdATA(event) {
        console.log(event.target.value)


    }
    return (
        <div>
            <h1>Best Form Approach</h1>
            <form onSubmit={formData}>
                <div>
                    <label htmlFor="uName">User Name:</label>
                    <input type="text" id="uName" name="userName" placeholder="Enter User Name" value={myFormData.userName} onChange={(event) => {
                        handleChangeFormData(event)
                    }} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter User Name" value={myFormData.email} onChange={(event) => {
                        handleChangeFormData(event)
                    }} />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" placeholder="Enter User Name" value={myFormData.age} onChange={(event) => {
                        handleChangeFormData(event)
                    }} />
                </div>
                <div>
                    <label htmlFor="pass">Password</label>
                    <input type="password" id="pass" name="pass" placeholder="Enter User Name" value={myFormData.pass} onChange={(event) => {
                        handleChangeFormData(event)
                    }} />
                </div>

                <div>
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" name="date" placeholder="Enter User Name" value={myFormData?.date} onChange={(event) => {
                        handleChangeFormData(event)
                    }} />
                </div>

                <div>
                    <p>Select city:</p>
                    <select name="city" onChange={(event) => {
                        handleChangeFormData(event)
                    }}>
                        <option value="Katni">Katni</option>
                        <option value="Jabalpur">Jabalpur</option>
                        <option value="Indore">Indore</option>
                    </select>


                </div>
                <div>
                    <button>Submit</button>
                </div>

            </form>

        </div>
    )
}

export default MyForm