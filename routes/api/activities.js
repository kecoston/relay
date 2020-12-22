const router = require("express").Router();
const activitiesController = require("../../controllers/activitiesControllers");


router.route("/")
    .get(activitiesController.findAll)
    .post(activitiesController.create);

router 
    .route("/:id")
    .get(activitiesController.findById)
    .put(activitiesController.update)
    .delete(activitiesController.remove)
 
router 
    .route("/:id/summary")
    .get(activitiesController.findActivitySummary)

router 
    .route("/:id/contact")
    .get(activitiesController.findActivityContact)

module.exports = router;