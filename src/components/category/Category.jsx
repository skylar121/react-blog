import './category.css'

function Category({category}) {
  return (
    <dl className="category">
        <dt className="a11y-hidden">Category</dt>
        {category.map((item) => (
          <dd key={item}>{item}</dd>
        ))}
    </dl>
  )
}

export default Category;