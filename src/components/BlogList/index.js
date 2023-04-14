import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blogs-list">
      {blogsList.map(eachBlog => (
        <BlogItem key={eachBlog.id} blogData={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
