import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

function Shop ()
{
  return(
    <div>Shop</div>
  )
}
function Contact ()
{
  return(
    <div>Contact</div>
  )
}
function SignIn ()
{
  return(
    <div>SignIn</div>
  )
}

/*Note :  
- When using index, that Route was set as index page
- When using index, no need to mention the path = ''
- The Header/Footer/Navigation like elements should have outlet, in order to show their child components. e.g. <Navigation /> > <Home />
*/
function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
          <Route index  element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='contact' element={<Contact />} />
          <Route path='signin' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
