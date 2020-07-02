import React from 'react';
import { connect } from 'react-redux'
import { getIssuesList } from '../../actions'

import Spinner from '../spinner'
import IssueList from './issues-list'


class IssuesSearch extends React.Component {

    componentDidMount() {
        this.props.getIssuesList('/api/issues-list/' + this.props.match.params.name)
      }
   
    render() {
        const { isLoading, issuesList } = this.props.comicIssues
        const marginStyle = {
            'margin-top': "40px"
        }
        // console.log(comicsList[0])
        return(
            <React.Fragment>
                <div className="comics-search">
                    <div className="container" style={marginStyle}>
                        {isLoading && <Spinner />}
                        {!isLoading && issuesList[0] !== undefined && <IssueList data={issuesList}/> }
                    </div>    
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    comicIssues: state.comicIssues
})

export default connect(mapStateToProps, { getIssuesList })(IssuesSearch);