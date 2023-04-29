import './App.css';

function App() {
  const categories = [
    { 'id': 1, 'name': 'Hats' },
    { 'id': 2, 'name': 'Jackets' }, ,
    { 'id': 3, 'name': 'Shoes' }, ,
    { 'id': 4, 'name': 'Womens' }, ,
    { 'id': 5, 'name': 'Mens' },
  ]
  return (
    <div className='categories-container'>
      {categories.map(item => {
        return (
          <div key={item.id} className="category-container">
            <div className='category-body-container'>
              {/* <img></img> */}
              <h2>{item.name}</h2>
              <p>Buy now</p>
            </div>
          </div>
        )
      }
      )}
    </div>
  );
}

export default App;
