import React from 'react'
import * as footerStyles from './footer.module.scss'

function Footer({author}) {
  return (
    <footer className={footerStyles.footer}>
      <p>Created by: {author}</p>
    </footer>
  )
}

export default Footer