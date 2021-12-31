import { useParams } from "react-router";
import DisplayCont from "./displayContest";
import useFetch from "./useFetch";


const Contests = () => {

    const {handle} = useParams();
    const url = "https://codeforces.com/api/user.rating?handle=" + handle ;
    const {data : cont,pending, error} = useFetch(url);

    console.log(cont);
    
    return ( 
        <div className="m-md-5">
           <table className="table table-responsive" >
            {error && <div>{error}</div>}
            {pending && <p>Loading...</p>}
            {cont && <thead>
                <tr>
                <th scope="col">Contest Name</th>
                <th scope="col" className="text-end">Rank</th>
                <th scope="col" className="text-end">Old Rating</th>
                <th scope="col" className="text-end">New Rating</th>
                </tr>
            </thead>}
            {cont && <DisplayCont contest = {cont.result} />}
        </table> 
        </div>
        
     );
}
 
export default Contests;

