import * as cookie from './cookie'

export default function getInitialState () {
  if (typeof window !== 'undefined') {
    return cookie.getJSON('githubAuth') || {}
  }
  return {}
}
