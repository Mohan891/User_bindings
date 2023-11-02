export function User_1() 
{
    let user={name:"Mohan", email :"M@gmail.com", phone:94925571444, gender: "Male", dob :"02/11/2023"}
    return <>
    <div className="margin-20">
        <div className="margin-10"> 
        <label>Name:</label>
        <label>{user.name} </label>
        </div>
        <div className="margin-10">    
        <label>Email:</label> 
        <label>{user.email}</label>   
        </div>  
        <div className="margin-10">
        <label>Phone:</label>
        <label>{user.phone}</label>    
        </div>
        <div className="margin-10">   
        <label>Gender:</label>
        <label>{user.gender}</label>
        </div>
        <div className="margin-10">
        <label>DOB:</label>
        <label>{user.dob}</label>
        </div>
    </div>

   </>
}