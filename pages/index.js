import React from 'react'
import Page from '../src/components/Page'
import PagePreview from '../src/components/PagePreview'
import { formatDate } from '../src/utils/date'
import { makeUrl, filterPosts } from '../src/utils/content'
import CONFIG from '../content/index.json'
import SUMMARY_JSON from '../content/summary.json'
import { Alert } from 'reactstrap'

function Index(props) {
  return (
    <div>
      <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>
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

    <h1> I dont know what this section is for</h1>

    </div>
  )
}

export default Index
