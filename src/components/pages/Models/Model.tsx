import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ModelType } from './shared/ModelTypes';
import Layout from '../../shared/styles/layout';
import ModelsBreadcrumb from './shared/ModelsBreadcrumb';

export default function Model() {
  let params = useParams();
  const modelId = params.id;
  const endpoint = `http://localhost:8888/app/api/get-model.php?id=${modelId}`;
  const [model, setModel] = useState<ModelType>();

  function getModelData() {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setModel(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => getModelData(), []);

  const { brand, scale, name } = model || {};

  return (
    <>
      <Layout>
        <ModelsBreadcrumb currentPage={name || ''} />
        <div>
          <h2>{`${brand} 1/${scale} ${name}`}</h2>
        </div>
      </Layout>
    </>
  );
}
