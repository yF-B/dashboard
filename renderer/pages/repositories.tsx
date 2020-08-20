import { Component } from 'react';
import SpaceAround from '../modules/shared/hoc/SpaceAround';
import Repository from '../modules/shared/services/github/models/repository.model';
import Searcher from '../components/Searcher/Searcher.controller';

interface HomeProps {
  data: Repository[];
}
export default class Home extends Component<HomeProps> {
  render(): JSX.Element {
    return (
      <SpaceAround>
        <Searcher></Searcher>
      </SpaceAround>
    );
  }
}
