import { HomeOutlined as HomeIcon } from '@material-ui/icons';

function getDate(): string {
  const date = new Date();
  return JSON.stringify(date);
}

export default function Home() {
  return (
    <>
      <h2><HomeIcon /> Home</h2>
      <p>{getDate()}</p>
    </>
  );
}

