const router = require("express").Router();
const userRoutes = require("./user");
const activitiesRoutes = require("./activities");
const contactsRoutes = require("./contacts");
const summaryRoutes = require("./summary")

router.use("/user", userRoutes);
router.use("/activities", activitiesRoutes);
router.use("/contacts", contactsRoutes);
router.use("/summary", summaryRoutes);


module.exports = router;
