// import './App.css';
import 'bulma/css/bulma.css';
import ProfileCard from './components/ProfileCard/ProfileCard';

function App() {
  return (
    <div className="App">
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className='section'>
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Thor"
                handle="CSE"
                description="Expertise: HTML5, CSS3, Bootstrap 5, ReactJs Comfortable: JavaScript, SCSS, Magento2 etc. Familiar: Python, Django, PHP, MySQL, SQLite, Laravel, NodeJs, etc. Tools: Git, Chrome Dev Tool, VS Code, PhpStorm, Docker, Warden, etc."
              ></ProfileCard>
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Iron Man"
                handle="BBA"
                description="Expertise: HTML5, CSS3, Bootstrap 5, ReactJs Comfortable: JavaScript, SCSS, Magento2 etc. Familiar: Python, Django, PHP, MySQL, SQLite, Laravel, NodeJs, etc. Tools: Git, Chrome Dev Tool, VS Code, PhpStorm, Docker, Warden, etc."
              ></ProfileCard>
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Ant Man"
                handle="EEE"
                description="Expertise: HTML5, CSS3, Bootstrap 5, ReactJs Comfortable: JavaScript, SCSS, Magento2 etc. Familiar: Python, Django, PHP, MySQL, SQLite, Laravel, NodeJs, etc. Tools: Git, Chrome Dev Tool, VS Code, PhpStorm, Docker, Warden, etc."
              ></ProfileCard>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
