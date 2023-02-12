import React, { Component } from "react";
import Newitem from "./Newitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  // articles = [
  //     {
  //         "source": {
  //             "id": "news-com-au",
  //             "name": "News.com.au"
  //         },
  //         "author": null,
  //         "title": "Test in major strife after damning findings",
  //         "description": "The third Test between India and Australia is at risk of being moved to a different venue at the eleventh hour, with Dharamsala&rsquo;s Himachal Pradesh Cricket Association Stadium reportedly not fit to host international cricket.",
  //         "url": "https://www.news.com.au/sport/cricket/dharamsala-at-risk-of-losing-bordergavaskar-trophy-test-as-bcci-ponders-eleventhhour-venue-change/news-story/454b80f794a0be03885c090bbb36dc6f",
  //         "urlToImage": "https://content.api.news/v3/images/bin/e90d0ebb2d685e2c25015b6e6ca530c2",
  //         "publishedAt": "2023-02-11T04:37:00Z",
  //         "content": "The third Test between India and Australia is at risk of being moved to a different venue at the eleventh hour, with Dharamsala’s Himachal Pradesh Cricket Association Stadium reportedly not fit to ho… [+2243 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "espn-cric-info",
  //             "name": "ESPN Cric Info"
  //         },
  //         "author": null,
  //         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //         "publishedAt": "2020-04-27T11:41:47Z",
  //         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "espn-cric-info",
  //             "name": "ESPN Cric Info"
  //         },
  //         "author": null,
  //         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //         "publishedAt": "2020-03-30T15:26:05Z",
  //         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //     }
  // ]

  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  //constructor() will run first then render() and then component.DidMount()
  constructor(props) {
    super(props); //super() is a class
    // console.log("Hello I am a constructor from news component");
    this.state = {
      articles: [],
      // articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsSite`;
  }

  //updateNews() is used for update page by 1 or reduce page by 1
  async updateNews() {
    //this.props.setProgress(0); for progress bar on the top of the navbar
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    //This is for fetch API and this is also a promise which can be resolved
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  //componentDidMount() will run after running the render()
  //componentDidMount() is used for fetching of Api
  //async makes a function return a Promise
  //await makes a function wait for a Promise
  async componentDidMount() {
    // console.log("cdm");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c7f4c3b1584d4113babcb3c403376084&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    //This is for fetch API and this is also a promise which can be resolved
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false })
    this.updateNews();
  }

  handlePreviousClick = async () => {
    // console.log("Previous");
    // Here ${this.props.country} is used for passing the country category as a props
    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c7f4c3b1584d4113babcb3c403376084&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    //This is for fetch API and this is also a promise which can be resolved
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({
    // page: this.state.page - 1,
    // articles: parsedData.articles,
    // loading: false
    // })
    // this.setState({ page: this.state.page - 1 });
    // this.updateNews();
  };

  handleNextClick = async () => {
    // console.log("Next");
    // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    //Backticks(` `) are an ES6 feature that allows you to create variable in JavaScript
    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c7f4c3b1584d4113babcb3c403376084&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    //This is for fetch API and this is also a promise which can be resolved
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({
    // page: this.state.page + 1,
    // articles: parsedData.articles,
    // loading: false
    //             })
    // }
    // this.setState({ page: this.state.page + 1 });
    // this.updateNews();
  };

  // fetchMoreData function is used below in InfiniteScroll below for scrolling the content infinite times
  fetchMoreData = async () => {
    this.setState({ loading: true });
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //This is for fetch API and this is also a promise which can be resolved
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  render() {
    // console.log("render")
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          NewsSite - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        {this.state.loading && <Spinner />}
        {/* Below for fetching of news articles from Api  */}

        {/* Here InfiniteScroll is used for showing more content or news when scrolling down on a page */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.loading ? <Spinner /> : null}
        >
          <div className="container">
            <div className="row">
              {/* {!this.state.loading &&
            this.state.articles.map((element) => { */}
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    {/* Here title={element.title ? element.title : ""}, description={element.description ? element.description : ""},
                                  imageUrl={element.urlToImage}, newsUrl={element.url}, author={element.author} and date={element.publishedAt
                                  are passed as props from Newitem.js */}
                    <Newitem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                    {/* <Newitem title={element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,88):""} 
                      imageUrl={element.urlToImage} newsUrl={element.url}/> */}
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default News;
