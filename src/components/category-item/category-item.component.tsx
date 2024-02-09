import './category-item.styles.css'

import Category from '../../types/categories.types'
import { CategoryItemContainer, CategoryName } from './category-item.styles'

interface CategoryItemProps {
  category: Category
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <CategoryItemContainer>
      <CategoryName></CategoryName>
    </CategoryItemContainer>
  )
}

export default CategoryItem
