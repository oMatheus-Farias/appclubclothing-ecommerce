import './category-item.styles.css'

import Category from '../../types/categories.types'

interface CategoryItemProps {
  category: Category
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className='category-item-container'>
      <div className='category-name'></div>
    </div>
  )
}

export default CategoryItem
