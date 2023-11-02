export function SingleUser() {
    let name = "Mohan";
    let email = "M@gmail.com";
    let phone = 9181224758; 
    let gender = "Male";
    let dob = "2/11/2020";
    return <>
        <div className="margin-20">
            <div className="margin-10">
                <label>Name:</label>
                <label>{name}</label>
            </div>
            <div className="margin-10">
                <label>Email:</label>
                <label>{email}</label>
            </div>
            <div className="margin-10">
                <label>Phone:</label>
                <label>{phone}</label>
            </div>
            <div className="margin-10">
                <label>Gender:</label>
                <label>{gender}</label>
            </div>
            <div className="margin-10">
                <label>DOB:</label>
                <label>{dob}</label>
            </div>
        </div>

    </>
}

