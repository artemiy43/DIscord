import './App.css';
import Header from '../Header/Header';
import Description from '../Description/Description';
import Members from '../Members/Members';
import Footer from '../Footer/Footer';
import Roles from '../Roles/Roles';
function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <Roles />
      <Members />
      <Footer />
    </div>
  );
}

export default App;
