import templates from './assets/data/templates.json';
import TemplateBox from './components/TemplateBox/TemplateBox';

import './App.css';

function App() {

  return (
    <div className='template-panel'>
      {
        templates.map(template => (<TemplateBox key={template.name} title={template.name} imageUrl={require(`./assets/img/${template.imageName}`)} />))
      }
    </div>
  );
}

export default App;
