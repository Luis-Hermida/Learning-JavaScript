const maintenanceMode = async (req, res, next) => {
  if (req.method) res.status(503).send("Under maintenance.");
  next();
};

module.exports = maintenanceMode;
