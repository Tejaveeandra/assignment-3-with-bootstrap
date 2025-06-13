import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/react/Header';
import Sidebar from './components/react/Sidebar';
import  StudentInfo from './components/react/Payments/StudentInfo';
import AkashBooksForm from './components/react/Payments/AkashBooksForm'

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Main layout with three sections */}
      <div className="container-fluid ">
        <div className="row">
          {/* Left Sidebar */}
          <aside
            className="col-1 d-flex align-items-center p-0"
            style={{ backgroundColor: 'bisque', width:60 }}  /* in this i use inline css for adjusting size*/ 
          >
            <Sidebar />
          </aside>

          {/* Main Content */}
          <main className="col-9 p-2">
          
            <StudentInfo />
            {/* <AkashBooksForm /> */}


          </main>

          {/* Right Sidebar */}
          <aside className="col bg-light p-0">
            <h2>Right Sidebar</h2>
            <p>This is the right sidebar.</p>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;