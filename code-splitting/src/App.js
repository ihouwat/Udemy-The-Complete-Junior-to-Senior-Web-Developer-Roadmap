import React, { Component, Suspense } from 'react';
import './App.css';

import Page1 from './components/Page1';
// Part 1 - No Code Splitting
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';

// Part 3 - Cleaner Code Splitting
// import AsyncComponent from './components/AsyncComponent';

// Part 4 - React.lazy
const Page2Lazy = React.lazy(() => import('./components/Page2'));
const Page3Lazy = React.lazy(() => import('./components/Page3'));

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      // Part 2 - Code splitting - manual
      // component: null
    }
  }

  onRouteChange = (route) => {
    // Part 1
    this.setState({route: route});
    // Part 2 - Code Splitting - manual
    // if (route === 'page1') {
    //   this.setState({ route: route });
    // } else if (route === 'page2') {
    //   import('./components/Page2').then((Page2) => {
    //     this.setState({ route: route, component: Page2.default });
    //   })
    // } else if (route === 'page3') {
    //   import('./components/Page3').then((Page3) => {
    //     this.setState({ route: route, component: Page3.default });
    //   })
    // }
  }

  render() {
    // Part 1 - No code splitting 
    //   if (this.state.route === 'page1') {
    //     return <Page1 onRouteChange={this.onRouteChange}/>
    //   } else if (this.state.route === 'page2') {
    //     return <Page2 onRouteChange={this.onRouteChange}/>
    //   } else if (this.state.route === 'page3') {
    //     return <Page3 onRouteChange={this.onRouteChange}/>
    //   }
    // }

    // Part 2 - Code Splitting - manual
    //   if (this.state.route === 'page1') {
    //     return <Page1 onRouteChange={this.onRouteChange} />
    //   } else {
    //     return <this.state.component onRouteChange={this.onRouteChange} />
    //   }
    // }

    //  Part 3 - Cleaner Code Splitting 
    // if (this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange}/>
    // } else if (this.state.route === 'page2') {
    //   const AsyncPage2 = AsyncComponent(()=> import('./components/Page2'));
    //   return <AsyncPage2 onRouteChange={this.onRouteChange}/>
    // } else if (this.state.route === 'page3') {
    //   const AsyncPage3 = AsyncComponent(()=> import('./components/Page3'));
    //   return <AsyncPage3 onRouteChange={this.onRouteChange}/>
    // }

    // Part 4 - React.lazy
    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />
    } else if (this.state.route === 'page2') {
      return (
      <Suspense fallback={<div>Loading...</div>}> 
        <Page2Lazy onRouteChange={this.onRouteChange} />
      </Suspense>
      )
    } else if (this.state.route === 'page3') {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page3Lazy onRouteChange={this.onRouteChange} />
        </Suspense>
      )
    }
  }
}

export default App;
