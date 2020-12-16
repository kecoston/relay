const router = require("express").Router();
const userRoutes = require("./user");
const activitiesRoutes = rquire("./activities");
const contactsRoutes = require("./contacts");

router.use("/user", userRoutes);
router.use("/activities", activitiesRoutes);
router.use("/contacts", contactRoutes);

module.exports = router;
