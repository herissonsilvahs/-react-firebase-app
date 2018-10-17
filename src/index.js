import React from 'react'
import ReactDOM from 'react-dom'
import IndexRouter from './routes/index'
import { createStore } from 'redux'
import indexStore from './store/index'
import { Provider } from 'react-redux'

import "./assets/style.sass"

const store = createStore(indexStore)

ReactDOM.render(<Provider store={store}><IndexRouter /></Provider>, document.getElementById('app'))

module.hot.accept();