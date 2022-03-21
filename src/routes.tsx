import { Route, Routes } from 'react-router-dom';

import App from './App';
import TemplateBase from './templates/TemplateBase/TemplateBase';
import templates from './assets/data/templates.json';

function Router() {
  return (<Routes>
    <Route path='/' element={<App />} />
    {templates.map((template) =>
      <Route path={template.path} element={<TemplateBase templateName={template.name} />} />
    )}
  </Routes>)
}

export default Router;
