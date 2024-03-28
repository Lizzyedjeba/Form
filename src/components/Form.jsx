import {useState} from "react"
import './form.css'

const Form=()=>{
    const[formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value

        setFormData((prevState)=>(
            {
                ...prevState,
                [name]:value
            }

        ))
    }
        const handleSubmit =(e)=>{
            e.preventDefault()
            console.log(formData);
        }
    return(
        <>
        <form className="F" onSubmit={handleSubmit}>
        <h1>Form</h1>
        <div className="input-control">
        <input name="name" type="text" value={formData.name} onChange={handleChange} />
        </div>


        <div className="input-control">
        <input name="email" type="text" value={formData.email} onChange={handleChange} />
        </div>

        <div className="input-control">
        <input name="password" type="password" value={formData.password} onChange={handleChange}/>
        </div><br />

        <button className="bxt">Submit Form</button>
        </form>
        
        <p className="print-out">
        Name:  {formData.name}
            <br /><br />
            Email:  {formData.email}
            <br /><br />
            Password:  {formData.password}
        </p>
</>



    )
}


export default Form