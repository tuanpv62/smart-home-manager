const devices = require("../data/devices");

exports.getDevices = (req, res) => {
  res.json(devices);
};

exports.createDevice = (req, res) => {
  const newDevice = {
    id: Date.now(),

    ...req.body,
  };

  devices.push(newDevice);

  res.json(newDevice);
};

exports.deleteDevice = (req, res) => {
  const id = Number(req.params.id);

  const index = devices.findIndex((d) => d.id === id);

  if (index !== -1) {
    devices.splice(index, 1);
  }

  res.json({
    message: "deleted",
  });
};

exports.updateDevice = (req, res) => {
  const id = Number(req.params.id);

  const device = devices.find((d) => d.id === id);

  if (!device) {
    return res.status(404).json({
      message: "not found",
    });
  }

  device.name = req.body.name;

  device.type = req.body.type;

  device.status = req.body.status;

  res.json(device);
};
