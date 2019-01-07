import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
// import store from './store/store';
// import Routes from './routers/index';
// import ScrollToTop from '../common/utils/scrollToTop';
// import ErrorBoundary from '../common/utils/traceError/ErrorBoundary';
// import getUrlParams from '../common/utils/url';
// import history from './utils/history';

// 微信js加载
loadWeixin();

// 测试
const { groupid, m, appId, groupId } = getUrlParams(window.location.search);

if (groupid || groupId) {
  localCache.put('groupId', groupid || groupId || '0001103');
}

// 小程序聚合支付需要
if (appId) {
  localCache.put('appId', appId || '');
}

if (m) {
  localCache.put(Enum.SESSION_KEY_MZONE_SESSION_ID, m);
}

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <Router history={history}>
        <ScrollToTop>
          <Routes />
        </ScrollToTop>
      </Router>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
