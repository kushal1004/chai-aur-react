import { StrictMode } from 'react'
import { ReactDOM } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

export function MyApp () {
  return <h1>Hello kushal Singha</h1>
}

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me'
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <App />
    <MyApp />
    {reactElement}
  </>
)
