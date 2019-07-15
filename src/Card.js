import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

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
      <div className="card">
        <div>
          <img className="cardPicture" src={require(`../public/Images/${this.state.card[this.props.value].cardPic}.jpg`)} alt="" />
        </div>
        <div>
          <h2 className="text-dec">Z NYC Hotel...</h2>
          <h3 className="text-dec1">Long Island City</h3>
          <div className="cardPadding"></div>
          <h4 className="text-dec2">Birmingham(BHX)</h4>
          <h4 className="text-dec2">New York John F Kennedy(JFK)</h4>
          <div className="cardPadding"></div>
          <p className="text-dec3">27 Nov 2019 - 13 Dec 2019</p>
          <div className="hr-sect">Only</div>
          <h2 className="cardPrice">$779<span className="cardPrice2">pp</span></h2>
        </div>
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

  slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })
 
  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })

 
  render() {
    const { currentIndex, galleryItems, responsive } = this.state
 
    return (
        <div className="cardBody">
          <a onClick={() => this.slidePrev()} href="Javascript:Void(0)" className="cardIcon"><div><FontAwesomeIcon  className="carouselIcons1" icon={faChevronLeft}  size="2x" color="#00356f"/></div></a>
          <AliceCarousel
            items={galleryItems}
            slideToIndex={currentIndex}
            responsive={this.responsive}
            onInitialized={this.handleOnSlideChange}
            onSlideChanged={this.handleOnSlideChange}
            onResized={this.handleOnSlideChange}
            buttonsDisabled={true}
            dotsDisabled={true}
          />
          <a onClick={() => this.slideNext()} href="Javascript:Void(0)" className="cardIcon"><div onClick={() => this.slideNext()}><FontAwesomeIcon  className="carouselIcons2" icon={faChevronRight} size="2x" color="#00356f" /></div></a>
        </div>
    )
  }
}

export default Card;
