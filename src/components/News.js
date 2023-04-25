import React, { useEffect, useState } from 'react'
import NewItem from './NewItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capatalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const updateNews = async () => {
    props.setNewProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setNewProgress(100);
  }

  useEffect(() => {
    document.title = `NewsMonkey - ${capatalize(props.category)}`
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  };

  return (
    <>
      <h1 className="text-center">Top - {capatalize(props.category)} Headlines</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
      <div className="container">
      <div className="row">
          {articles.map((element) => { 
          return  <div className="col-md-4" key={element.url}>
                <NewItem title={element.title?element.title.slice(0, 40):""} description={element.description?element.description.slice(0, 80):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
            </div>
          })}
      </div>
      </div>
      </InfiniteScroll>
    
    </>
  )
}


News.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News


