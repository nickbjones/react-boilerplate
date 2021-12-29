import { InfoOutlined as InfoIcon } from '@material-ui/icons';
import { SpHide, PcHide } from '../shared/styles/breakpoints';
import Layout from '../shared/styles/layout';

export default function About() {
  return (
    <Layout>
      <h2><InfoIcon /> About</h2>
      <SpHide>this is PC</SpHide>
      <PcHide>this is SP</PcHide>
    </Layout>
  );
}
