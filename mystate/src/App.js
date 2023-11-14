import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      person: {
        fullName: 'Hazem Miri',
        age: '27 ans',
        shool: 'GOMYCODE',
        bio: '💻🌐 Full-Stack Web Developer ',
        imgSrc: 'https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/347228787_988620425646364_6465496557404408124_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zJlccABRdUoAX8KymhM&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfD0DbWoFNhvQ_DEwuX11RPa6Gl0O0OI6liX64kz17qC_w&oe=6553B959',
        profession: 'Software Developer',
      },
      show: false,
      elapsedTime: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1,
      }));
    }, 1000); // Update every 1000 milliseconds (1 second)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, elapsedTime } = this.state;

    return (
      <div>
        <button style={{color:"red"}} onClick={this.toggleShow}> Profile</button>
        <p style={{color:"green"}} >Time since mount: {elapsedTime} seconds</p>
        
        
        {show && (
          <div>
            
            <h1 style={{color:"red"}}>{person.fullName}</h1>
            <p style={{color:"green"}}>{person.bio}</p>
            <p className='x'>{person.age}</p>
            <p className='x'>{person.shool}</p>
            <img style={{height:"60vh",margin:"1rem"}}variant="top" src={person.imgSrc} alt={person.fullName} />
            <p className='x'>Profession: {person.profession}</p>
            
          </div>
        )}
      </div>
    );
  }
}

export default App;
