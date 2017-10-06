import * as cookie from './cookie'

export default function getAuthData () {
  if (typeof window !== 'undefined') {
    return cookie.getJSON('githubAuth') || {}
  }
  return {}
}
