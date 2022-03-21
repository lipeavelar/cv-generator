import { Link } from 'react-router-dom';

import templates from './assets/data/templates.json';
import TemplateBox from './components/TemplateBox/TemplateBox';

import './App.css';

function App() {

  return (
    <div className='template-panel'>
      {
        templates.map((template, idx) => (
          <Link key={`template-link-${idx+1}`} to={template.path} className='template-link'>
            <TemplateBox key={template.name} title={template.name} imageUrl={require(`./assets/img/${template.imageName}`)} />
          </Link>
        ))
      }
    </div>
  );
}

export default App;
