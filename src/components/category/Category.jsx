import './category.css'

function Catagory({category}) {
  const categoryArr = [];
  for (let i = 0; i < category.length; i++) {
    categoryArr.push(<dd>{category[i]}</dd>);
  }
  return (
    <dl className="category">
        <dt className="a11y-hidden">Category</dt>
        {categoryArr}
    </dl>
  )
}

export default Catagory;