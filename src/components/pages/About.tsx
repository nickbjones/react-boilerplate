import { InfoOutlined as InfoIcon } from '@material-ui/icons';
import { SpHide, PcHide } from '../shared/styles/breakpoints';

export default function About() {
  return (
    <>
      <h2><InfoIcon /> About</h2>
      <SpHide>this is PC</SpHide>
      <PcHide>this is SP</PcHide>
    </>
  );
}
