import {Component} from 'react';

class Carousel extends Component {
  state = {
    active: 0
  }

  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg']
  }

  handlerIndexClick= (event) => {
    this.setState({
      active: event.target.dataset.index
    })
  }

  render(){
    const {active} = this.state;
    const {images} = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal"/>
        <div className="carousel-smaller">
          {images.map((photo, index) => {
            return <img key={photo} data-index={index} onClick={this.handlerIndexClick} src={photo} className={index === active ? 'active': ''} alt='animal thumbnail'/>
          })}
        </div>
      </div>
    )
  }
}

export default Carousel;
