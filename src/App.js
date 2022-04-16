import './App.css';
import { Header } from './Header'
import { Intro } from './Intro'
import { Skills } from './Skills'
import { Projects } from './Projects'



function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
