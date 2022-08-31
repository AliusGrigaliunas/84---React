import React from 'react';

type ClockProps = {
  date: Date,
  children?: React.ReactNode;
}

class ClockUpdated extends React.Component<{},ClockProps> {

  private timerID: NodeJS.Timer | undefined;

  constructor(props: ClockProps){
    super(props);
    const {children} = props;
    this.state = {date: new Date(), children};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render(){
    return(
      <div>
        {this.state.children}
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

const Clock: React.FC<ClockProps> = (props) =>{

  return (
    <div>
    <h2>It is {props.date.toLocaleTimeString()}.</h2>
  </div>
  );
}



export {Clock, ClockUpdated};
