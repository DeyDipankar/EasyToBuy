
import './category-item.styles.scss'

const CategoryItems = (props) =>{

    const {categories} = props
    return(
        <div className='categories-container'>
      {categories.map(item => {
        return (
          <div key={item.id} className="category-container">
            <div className='background-image' style={
                {
                  backgroundImage : `url(${item.imageUrl})`
                }
              }></div>
            <div className='category-body-container'>
              <h2>{item.title}</h2>
              <p>Buy now</p>
            </div>
          </div>
        )
      }
      )}
    </div>

    )
}
export default CategoryItems;