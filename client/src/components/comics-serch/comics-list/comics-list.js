import React from 'react';
import ComicsListItem from './comics-list-item'

const ComicsList = ({data}) => {
    
    return (
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">LatestIssue</th>
                </tr>
            </thead>
            <tbody> 
                {
                    Object.values(data).map((item, index) => {
                        console.log(item)
                        return <ComicsListItem name={item.name} link={item.link} key={index} latestIssue={item.latestIssue} index={index}/>
                    })
                }
            </tbody>
        </table>
    )

}

export default ComicsList