import Alert from "../model/Alert.js";

/**
 * @desc    Get all alerts (with filters)
 * @route   GET /alerts
 */
export const getAlerts = async (req, res, next) => {
  try {
    const { country, status } = req.query;

    let filter = {};
    if (country) filter.country = country;
    if (status) filter.status = status;

    const alerts = await Alert.find(filter).sort({ createdAt: -1 });

    res.status(200).json(alerts);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Create new alert
 * @route   POST /alerts
 */
export const createAlert = async (req, res, next) => {
  try {
    const { country, city, visaType } = req.body;

    if (!country || !city || !visaType) {
      return res.status(400).json({
        message: "country, city and visaType are required"
      });
    }

    const alert = await Alert.create({
      country,
      city,
      visaType
    });

    res.status(201).json({
      message: "Alert created successfully",
      alert
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update alert status
 * @route   PUT /alerts/:id
 */
export const updateAlert = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const alert = await Alert.findById(id);

    if (!alert) {
      return res.status(404).json({
        message: "Alert not found"
      });
    }

    if (status) {
      alert.status = status;
    }

    await alert.save();

    res.status(200).json({
      message: "Alert updated successfully",
      alert
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Delete alert
 * @route   DELETE /alerts/:id
 */
export const deleteAlert = async (req, res, next) => {
  try {
    const { id } = req.params;

    const alert = await Alert.findById(id);

    if (!alert) {
      return res.status(404).json({
        message: "Alert not found"
      });
    }

    await alert.deleteOne();

    res.status(200).json({
      message: "Alert deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};
