import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Repository } from '../../store/ducks/repositories/types';
import { ApplicationState } from '../../store';

import * as RepositoriesActions from '../../store/ducks/repositories/actions';

interface StateProps {
  repositories: Repository[]
}

interface DispatchProps {
  loadRequest(): void
}

interface OwnProps {

}

type Props =  StateProps & DispatchProps & OwnProps;

class RepositoryList extends Component<Props> {
  render() {
    const { repositories } = this.props;
    return (
      <ul>
        {repositories.map(repository => repository.name)}
      </ul>
    )
  }

}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data
});

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators(RepositoriesActions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);