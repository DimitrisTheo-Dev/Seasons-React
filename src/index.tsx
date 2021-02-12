import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import "semantic-ui-css/semantic.min.css";

interface Props {
    lat: number;
    errorMessage: string;
}

// ASK kostas about the <{}>
class App extends React.Component<{}, Props>  {
    // constructor(props: any) {
    //     super(props);
    //     // This is the only time we do direct assignment to this.state
    //     this.state = { lat: 0, errorMessage: '' };
    // }
    state = { lat: 0, errorMessage: '' };

    // this function will be automatically called one time when the component gets rendered
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude
                });
            },
            err => {
                this.setState({
                    errorMessage: err.message
                });
            }
        );
    }

    // It will be called every time our component gets updated
    // componentDidUpdate() { console.log('My component was updated'); }

     renderContent() {
         if(this.state.errorMessage && !this.state.lat){
             return <div> Error: { this.state.errorMessage } </div>;
         } else if (this.state.lat && !this.state.errorMessage) {
             return <SeasonDisplay lat={this.state.lat}  />;
         }
         return <Spinner message = "Accept the location request!" />;

     }

    //React says that we have to define render!
    render() {
       return (
           <div className="border white"> {this.renderContent()} </div>
       );
    }
}

ReactDOM.render(<App />,  document.querySelector('#root'));