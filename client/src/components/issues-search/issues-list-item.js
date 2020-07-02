import React from 'react';
import { Link } from 'react-router-dom';

const IssueListItem = ({name, link}) => {

    return (
        <tr>
            <td><Link to={`/read-comics/${link}`}>{name}</Link></td>
        </tr>
    )

}


export default IssueListItem