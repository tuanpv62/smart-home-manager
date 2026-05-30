function renderDevices(devices) {
  const list = document.getElementById("deviceList");

  if (devices.length === 0) {
    list.innerHTML = `

<div class="empty">

No devices found

</div>

`;

    return;
  }

  list.innerHTML = devices
    .map(
      (device) => `

<div class="device-card">

<h3>

${device.name}

</h3>

<p>

Type:
${device.type}

</p>

<span class="status

${device.status === "ON" ? "on" : "off"}

">

${device.status}

</span>

<div class="actions">

<button

onclick="handleEdit(
${device.id}
)"

>

Edit

</button>

<button

onclick="handleDelete(
${device.id}
)"

>

Delete

</button>

</div>

</div>

`,
    )
    .join("");
}

function fillForm(device) {
  document.getElementById("name").value = device.name;

  document.getElementById("type").value = device.type;

  document.getElementById("status").value = device.status;

  document.getElementById("formTitle");
  textContent = "Edit Device";
}

function clearForm() {
  document.getElementById("deviceForm").reset();

  document.getElementById("formTitle");
  textContent = "Add Device";
}
