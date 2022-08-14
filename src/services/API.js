const BASE_URL = 'https://api.goprogram.ai/inspiration';

async function getInspiration(url) {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error(response.status));
}

export function fetchInspiration() {
  return getInspiration(BASE_URL);
}
