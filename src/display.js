import { Link } from "react-router-dom";
import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogList = () => {

    const {handle} = useParams();
    const url = " https://codeforces.com/api/user.info?handles=" + handle;
    const {data : blogs,pending,error} =  useFetch(url);


    return ( 
        <div className="BlogList mt-5">
            {error && <div>{error}</div>}
            {pending && <p>Loading...</p>}
            {blogs && (blogs.result).map((blog) => (
                <div className = "card  mt-3 text-center mx-auto p-2"  key = {blog.maxRating}>
                    <img src={blog.avatar} className = "rounded-3 p-2 shadow border border-secondary border-3" alt="this is an image" />
                    <h4 className="card-title">{blog.handle}</h4>
                    <p className="p-1 m-0">Current Rank : {blog.rank} {blog.rating}</p>
                    <p className="p-1 m-0">Highest Rank : {blog.maxRank} {blog.maxRating}</p>
                    <p className="p-1 m-0">Contribution : {blog.contribution}</p>
                    <p className="p-1 m-0">Friend of {blog.friendOfCount} user</p>
                    <Link to = {`/contest/${blog.handle}`} className="btn btn-success">Contests</Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;
