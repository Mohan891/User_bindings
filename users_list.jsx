

export function Users_list() 
{
    let users=[
        {name:"Mike", email :"M@gmail.com", phone:9100000101, gender: "Male", dob :"02/11/2023"},
        {name:"Lane", email :"L@gmail.com", phone:8200142147, gender: "Male", dob :"02/11/2023"},
        {name:"Dune", email :"D@gmail.com", phone:7224511111, gender: "Female", dob :"02/11/2023"}]
    return <>
    {users.map((user)=>
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
    )
}

   </>
}    
