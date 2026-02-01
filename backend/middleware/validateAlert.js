const validateAlert = (req, res, next) => {
  const { country, city, visaType } = req.body;

  if (!country || !city || !visaType) {
    return res.status(400).json({
      message: "country, city and visaType are required"
    });
  }

  const allowedVisaTypes = ["Tourist", "Business", "Student"];
  if (!allowedVisaTypes.includes(visaType)) {
    return res.status(400).json({
      message: "Invalid visaType"
    });
  }

  next();
};

export default validateAlert;
