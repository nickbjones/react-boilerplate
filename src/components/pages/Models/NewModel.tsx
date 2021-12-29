import { AirplanemodeActive as AirplaneIcon } from '@material-ui/icons';
import Layout from '../../shared/styles/layout';
import ModelsBreadcrumb from './shared/ModelsBreadcrumb';

export default function NewModel() {
  return (
    <>
      <Layout>
        <ModelsBreadcrumb currentPage="New" />
        <h2><AirplaneIcon /> New Model</h2>
      </Layout>
    </>
  );
}
