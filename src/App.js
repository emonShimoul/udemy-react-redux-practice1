import './App.css';
import 'bulma/css/bulma.css';
import ProfileCard from './components/ProfileCard/ProfileCard';

function App() {
  return (
    <div className="App">
      <div>Personal Digital Assistants</div>
      <div className="container">
        <section className='section'>
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title="Emon Shimoul" handle="CSE"></ProfileCard>
            </div>
            <div className="column is-4">
              <ProfileCard title="Farah Iffat" handle="BBA"></ProfileCard>
            </div>
            <div className="column is-4">
              <ProfileCard title="Maahmood Abeer" handle="EEE"></ProfileCard>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
