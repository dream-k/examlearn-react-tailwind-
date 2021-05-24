import './App.scss';
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router/immutable'
import { Provider as ReduxProvider } from 'react-redux'
import ReduxToastr from 'react-redux-toastr'

import Routes from './Routes'
import { appSelectors } from './redux/selectors/appSelector'

function App({ store, history }) {
  return (
    <ReduxProvider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
      <ReduxToastr
        getState={appSelectors.selectToastr} // This is the default
        newestOnTop={false}
        position="bottom-right"
        transitionIn="bounceIn"
        transitionOut="fadeOut"
      />
    </ReduxProvider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default App