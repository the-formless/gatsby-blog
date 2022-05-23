import React from 'react'
import * as footerStyles from './footer.module.scss'

function Footer({author}) {
  return (
    <footer className={footerStyles.footer}>
      Created by: {author}
    </footer>
  )
}

export default Footer