import React from 'react';
import { Link } from 'react-router-dom';

const ComicsListItem = ({name, link, latestIssue, index}) => {

    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td><Link to={`/search-comics/${link}`}>{name}</Link></td>
            <td>{latestIssue}</td>
        </tr>
    )

}


export default ComicsListItem