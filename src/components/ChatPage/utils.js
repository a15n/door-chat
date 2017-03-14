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
    
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send(JSON.stringify(obj.body));
  });
};

export const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export const toRoomName = roomUrl => {
  return roomUrl.split('-').map(capitalize).join(' ');
}

export const toRoomUrl = roomName => {
  return roomName.toLowerCase().replace(/ /g, '-', );
}
