// app.js

class Carousel extends React.Component {

  constructor(props) {

    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        items: [
            'http://unsplash.it/512/384?image=1081',
            'https://unsplash.it/512/384?image=1082',
            'https://unsplash.it/512/384?image=1083'
        ],
        active: 0
    };

  }

  render() {
    return (
      <div className="carousel">
          <Image
              src={this.state.items[this.state.active]}
          />
         <div className="left" onClick={() => this.handleChange(this.state.active - 1)} >
             <span className="arrow-left" />
         </div>
         <div className="right" onClick={() => this.handleChange(this.state.active + 1)} >
             <span className="arrow-right" />
         </div>
         <Dots
             items={this.state.items}
             handler={this.handleChange}
         />
      </div>
    );
  }

  handleChange(index) {

    if (index === -1) {
        this.setState({
            active: (this.state.items.length - 1)
        });
    } else if (index === this.state.items.length) {
        this.setState({
            active: 0
        });
    } else {
        this.setState({
            active: index
        })
    }

  }

}

const Image = props => {
    return (
        <div className="image">
            <img src={props.src} className="slide-left" />
        </div>
    );
}

const Dots = props => {
    return (
        <div className="dots" >
            {
                props.items.map((dot, key) => {
                    return (<span onClick={() => props.handler(key)} className="dot" key={key} />)
                })
            }
        </div>
    )
}

ReactDOM.render(<Carousel />, document.querySelector('.container'));
