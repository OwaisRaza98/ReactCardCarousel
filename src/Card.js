import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './App.css'

class CardCom extends React.Component {
  constructor(){
    super();
    this.state = {
      i: 0,
      card: [
        {
          cardPic: 'pic1', cardHeading1: 'Bender Should Not Be Allowed On Tv',
          cardHeading2: 'A Head in the Polls', cardContent: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Number1'
        },
        {
          cardPic: 'pic1', cardHeading1: 'Bender Should Not Be Allowed On Tv1',
          cardHeading2: 'A Head in the Polls1', cardContent: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Number1'
        },
        {
          cardPic: 'pic2', cardHeading1: 'Bender Should Not Be Allowed On Tv2',
          cardHeading2: 'A Head in the Polls2', cardContent: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Number2'
        },
        {
          cardPic: 'pic2', cardHeading1: 'Bender Should Not Be Allowed On Tv2',
          cardHeading2: 'A Head in the Polls2', cardContent: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Number2'
        },
        {
          cardPic: 'pic2', cardHeading1: 'Bender Should Not Be Allowed On Tv2',
          cardHeading2: 'A Head in the Polls2', cardContent: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Number2'
        },
        {
          cardPic: 'pic2', cardHeading1: 'Bender Should Not Be Allowed On Tv2',
          cardHeading2: 'A Head in the Polls2', cardContent: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Number2'
        },
        {
          cardPic: 'pic2', cardHeading1: 'Bender Should Not Be Allowed On Tv2',
          cardHeading2: 'A Head in the Polls2', cardContent: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Number2'
        }
      ]
    }
  }

  render(){
    return (
      <div className="me">
        <div></div>
        <div className="card">
          <div className="cardPicture">
            <img className="picture" src={require(`../public/Images/${this.state.card[this.props.value].cardPic}.jpg`)} alt="" />
          </div>
          <div className="cardText">
            <h3>{this.state.card[this.props.value].cardHeading1}</h3>
            <h4>{this.state.card[this.props.value].cardHeading2}</h4>
            <p className="cardHovers">{this.state.card[this.props.value].cardContent}</p>
          </div>
        </div>
        <div></div>
      </div>
    )
  } 
}
 
class Card extends React.Component {
  constructor(){
    super();
    this.state = {
      currentIndex: 0,
      itemsInSlide: 1, 
      galleryItems: this.galleryItems()
    }
  }
  

  responsive = {
    0: { items: 1 },
    767: { items: 2 },
    1024: { items: 3 },
  }

  i = 0;
 
  galleryItems() {
    return (
      Array(7).fill().map((item, i) => <CardCom value={i} />
    )
    )
  }
 
  slidePrevPage = () => {
    const currentIndex = this.state.currentIndex - this.state.itemsInSlide
    this.setState({ currentIndex })
  }
 
  slideNextPage = () => {
    const { itemsInSlide, galleryItems: { length }} = this.state
    let currentIndex = this.state.currentIndex + itemsInSlide
    if (currentIndex > length) currentIndex = length
 
    this.setState({ currentIndex })
  }
 
  handleOnSlideChange = (event) => {
    const { itemsInSlide, item } = event
    this.setState({ itemsInSlide, currentIndex: item })
  }

 
  render() {
    const { currentIndex, galleryItems, responsive } = this.state
 
    return (
        <div className="cardBody">
          <div></div>
          <AliceCarousel
            items={galleryItems}
            slideToIndex={currentIndex}
            responsive={this.responsive}
            onInitialized={this.handleOnSlideChange}
            onSlideChanged={this.handleOnSlideChange}
            onResized={this.handleOnSlideChange}
          />
          <div></div>
        </div>
    )
  }
}

export default Card;