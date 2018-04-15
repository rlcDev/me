import { CategoriesData } from './CategoriesData';
import Category from './Category/Category';

export default function Categories() {
    return (
        CategoriesData.map((elt) => {
            return (Category(elt))
        })
    )

}