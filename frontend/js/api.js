const API_URL = "http://localhost:3000/devices";

async function fetchDevices() {
  const response = await fetch(API_URL);

  return response.json();
}

async function createDevice(device) {
  await fetch(API_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(device),
  });
}

async function updateDevice(id, device) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(device),
  });
}

async function deleteDevice(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}
