export function getFriendlyUrl(url) {
  return url.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase();
}