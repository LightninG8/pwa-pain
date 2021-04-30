import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Redactor } from 'containers';
import 'semantic-ui-css/semantic.min.css';

const App: React.FC = () => {
  return (
    <div className='app'>
      <Suspense fallback={'loading...'}>
        <Router>
          <Switch>
            <Route
              path='/'
              exact={true}
              component={(props: any) => <Redactor {...props}/>}/>
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
