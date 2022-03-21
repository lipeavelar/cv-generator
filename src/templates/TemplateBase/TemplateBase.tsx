import React from 'react';
import { Link } from 'react-router-dom';

import Template1 from '../Template1/Template1';
import TemplateError from '../TemplateError/TemplateError';

import './TemplateBase.css';

interface Components {
  [key: string]: React.FC;
}

interface Props {
  templateName: string;
}

const templates: Components = {
  'Template 1': Template1,
  'Error': TemplateError,
}

const TemplateBase: React.FC<Props> = ({templateName}) => {
  let componentName = templateName;
  if (!(templateName in templates)) {
    componentName = 'Error';
  }
  const ChoosenTemplate = templates[componentName];
  return <div>
    <div className='template-base-header'>
      <Link to='/'><div>⟵</div></Link>
      <h1>{templateName}</h1>
    </div>
    <ChoosenTemplate />
  </div>;
}

export default TemplateBase;
