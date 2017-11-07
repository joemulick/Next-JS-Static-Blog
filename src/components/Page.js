import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import Tracking from './Tracking'

function Page(props) {
  return (
    <div>
      <Header
        siteTitle={props.siteTitle}
        description={props.description}
        stylesheets={props.stylesheets}
      />
      <main>
        {props.body}

        <Footer copyright={props.copyright} />
        {props.siteId && (
          <Tracking siteId={props.siteId} />
        )}

      </main>
    </div>
  )
}

Page.propTypes = {
  description: PropTypes.string.isRequired,
  stylesheets: PropTypes.array,
  topLinks: PropTypes.array,
  siteId: PropTypes.string.isRequired,
}

Page.defaultProps = {
  description: '',
  stylesheets: [
    'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js'
  ],
}


export default Page
