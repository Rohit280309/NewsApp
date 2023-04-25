import React from 'react'

const NewItem = (props) => {
  
    let {title, description, imageUrl, newsUrl, author, date} = props;
    return (
      <div className='my-3'>
        <div className="card">
        <img src={imageUrl?imageUrl:"https://bsmedia.business-standard.com/_media/bs/img/article/2023-04/13/full/1681378442-2549.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author?author:"UnKnown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
        </div>
        </div>
      </div>
    )
  }


export default NewItem
