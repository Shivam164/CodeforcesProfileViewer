const DisplayCont = (prop) => {
    const contest = prop.contest;
    return ( 
        <tbody className="BlogList">
            {contest.map((blog) => (
                <tr className = "contest-box" key = {blog.contestId}>
                    <td>{blog.contestName}</td>
                    <td className="text-end">{blog.rank}</td>
                    <td className="text-end">{blog.oldRating}</td>
                    <td className="text-end">{blog.newRating}</td>
                </tr>
            ))}
        </tbody>
     );
}
 
export default DisplayCont;