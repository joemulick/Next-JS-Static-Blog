import React from 'react'
import Page from '../src/components/Page'
import PagePreview from '../src/components/PagePreview'
import { formatDate } from '../src/utils/date'
import { makeUrl, filterPosts } from '../src/utils/content'
import { Alert } from 'reactstrap'
import CONFIG from '../content/index.json'
import SUMMARY_JSON from '../content/summary.json'

function Index(props) {
  return (
    <div>
      <Page
        siteTitle={`${CONFIG.siteTitle} - Index`}
        description={CONFIG.description}
        copyright={CONFIG.copyright}
        siteId={CONFIG.siteId}
      />
    </div>
  )
}

function Body(props) {
  return (
    <div>

      <h1>Test from inside pages index.js</h1>

      <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>
    </div>
  )
}

export default Index
