/**
 * Confirm if a reload needs to happen
 */
const confirmReload = () => confirm('A new version of Manga is available. Launch it?') //eslint-disable-line no-alert

/**
 * If the update is ready then update it
 */
const confirmIfUpdateReady = () => {
  if (window.applicationCache.status !== window.applicationCache.UPDATEREADY) { return false; }
  if (confirmReload()) { window.location.reload() }
}

/**
 * Export variable
 */
const watchForUpdates = () => {
  if (!window.applicationCache) { return false;}
  window.applicationCache.addEventListener('updateready', confirmIfUpdateReady)
}

/**
 * Export it
 */
export default { watchForUpdates }
