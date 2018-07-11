import React                       from 'react';
import Routes                      from '../Routes';
import Header                      from '../common/Header';

class App extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                    <Header />
                    <Routes />
                <p>Foother here...</p>
            </div>
        );
    }
}


export default App;