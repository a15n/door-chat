// TODO and add tests

export const request = obj => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(obj.method || 'GET', obj.url);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status <= 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
};

const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export const toRoomName = roomUrl => {
  const roomNameWords = roomUrl.split('-');

  return roomNameWords.map(capitalize).join(' ');
}
