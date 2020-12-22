const router = require("express").Router();
const summaryControllers = require("../../controllers/summaryControllers");


router.route("/")
    .get(summaryControllers.findAll)
    .post(summaryControllers.create);

router 
    .route("/:id")
    .get(summaryControllers.findById)
    .put(summaryControllers.update)
    .delete(summaryControllers.remove);

router 
    .route("/id/activity")
    .get(summaryControllers.findSummaryActivity);

module.exports = router;