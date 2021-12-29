import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ModelsType } from './shared/ModelTypes';
import Layout from '../../shared/styles/layout';
import {
  AddBox,
  AirplanemodeActive as AirplaneIcon,
} from '@material-ui/icons';
import styled from 'styled-components';
import txt from '../../shared/styles/typography';
import colors from '../../shared/styles/colors';

const AddNewTextWrapper = styled(Link)`
  display: flex;
  align-items: center;
  color: ${colors.apple};
  ${txt.linkStates} {
    text-decoration: none;
  }
`;

const AddNewText = styled.span`
  margin-left: 2px;
`;

export default function Models() {
  const endpoint = 'http://localhost:8888/app/api/get-models.php';
  const [models, setModels] = useState<ModelsType>([]);

  function getModelsData() {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setModels(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => getModelsData(), []);

  return (
    <>
      <Layout>
        <h2><AirplaneIcon /> Models</h2>
        <AddNewTextWrapper to="/models/new">
          <AddBox />
          <AddNewText>NEW</AddNewText>
        </AddNewTextWrapper>
        <ul>
          {
            models.map((model, index) => (
              <li key={index}>
                <Link to={`/models/${model.id}`}>{model.name}</Link>
              </li>
            ))
          }
        </ul>
      </Layout>
    </>
  );
}
