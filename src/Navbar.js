import { useState } from "react";
import { useHistory } from "react-router";

const Navbar = () => {

    const history = useHistory();
    const [handle,setHandle] = useState('');
  
    const handleData = (e) => {
        e.preventDefault();
        console.log(handle);
        history.push(`/display/${handle}`)
    };


    return ( 
        <div className="text-center">
            <h1 className="bg-light text-dark fw-bold text-center shadow w-75 mb-4 mx-auto">Codeforces Profile Viewer</h1>
            <form className="d-inline p-3 mx-auto mt-5">
                <label>
                    <input type="text" value = {handle} required onChange = {e => setHandle(e.target.value)} placeholder="Codeforces Handle"/>
                </label>
                <input type="submit" value="Submit" onClick = {handleData}/>
            </form>
          
        </div>
     );
}
 
export default Navbar;