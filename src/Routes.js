import React                                    from 'react';
import {Route, Switch}                      from 'react-router-dom';
import HomePage                                 from './components/home/HomePage.js';
import AboutPage                                from './components/about/AboutPage.js';


const Routes = () => (
    <main>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/about' component={AboutPage}/>
      </Switch>
    </main>
  )

  export default Routes;