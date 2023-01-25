import './App.css';
import 'bulma/css/bulma.css';
import ProfileCard from './components/ProfileCard/ProfileCard';

function App() {
  return (
    <div className="App">
      <ProfileCard title="Emon Shimoul" handle="CSE"></ProfileCard>
      <ProfileCard title="Farah Iffat" handle="BBA"></ProfileCard>
      <ProfileCard title="Maahmood Abeer" handle="EEE"></ProfileCard>
    </div>
  );
}

export default App;
