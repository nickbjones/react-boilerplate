import { HomeOutlined as HomeIcon } from '@material-ui/icons';
import Layout from '../shared/styles/layout';

function getDate(): string {
  const date = new Date();
  return JSON.stringify(date);
}

export default function Home() {
  return (
    <Layout>
      <h2><HomeIcon /> Home</h2>
      <p>{getDate()}</p>
    </Layout>
  );
}

