let editingId = null;

async function loadDevices() {
  const devices = await fetchDevices();

  renderDevices(devices);
}

function getFormData() {
  return {
    name: document.getElementById("name").value,

    type: document.getElementById("type").value,

    status: document.getElementById("status").value,
  };
}

async function handleDelete(id) {
  await deleteDevice(id);

  loadDevices();
}

async function handleEdit(id) {
  const devices = await fetchDevices();

  const device = devices.find((d) => d.id === id);

  if (!device) return;

  editingId = id;

  fillForm(device);
}

document.getElementById("deviceForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const device = getFormData();

  if (editingId !== null) {
    await updateDevice(editingId, device);

    editingId = null;
  } else {
    await createDevice(device);
  }

  clearForm();

  loadDevices();
});

document.getElementById("search").addEventListener("input", async (e) => {
  const keyword = e.target.value.toLowerCase();

  const devices = await fetchDevices();

  const filtered = devices.filter((d) =>
    d.name.toLowerCase().includes(keyword),
  );

  renderDevices(filtered);
});

loadDevices();
