import React from 'react';
import IssueListItem from './issues-list-item'

const IssueList = ({data}) => {
    
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                </tr>
            </thead>
            <tbody> 
                {
                    Object.values(data).map((item, index) => {
                        console.log(item)
                        return <IssueListItem name={item.name} link={item.link} key={index}/>
                    })
                }
            </tbody>
        </table>
    )

}

export default IssueList