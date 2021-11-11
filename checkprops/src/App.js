import './App.css';
import Profile from './profile/profileCompo'

function App() {
  const handleName = name => alert(name);
  return (
    <div className="App">
      <Profile FullName= 'John Doe' handleName={handleName} Bio='unknown' Profession= 'agent of chaos'  />
    </div>
  );
}

export default App;
