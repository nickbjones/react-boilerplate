import { WbSunnyOutlined as WeatherIcon } from '@material-ui/icons';
import Layout from '../shared/styles/layout';

export default function Weather() {
  return (
    <>
      <Layout>
        <h2><WeatherIcon /> Weather</h2>
      </Layout>
    </>
  );
}
