import './App.css';
import Header from '../Header/Header';
import Description from '../Description/Description';
import Admins from '../Admins/Admins';
import Footer from '../Footer/Footer';
import Roles from '../Roles/Roles';
function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <Roles />
      <Admins />
      <Footer />
    </div>
  );
}

export default App;
