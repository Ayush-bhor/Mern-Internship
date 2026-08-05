const express = require("express");

const router = express.Router();

const { handleAddBookController, handleGetAllBookController, handleDeleteBookController,handleUpdateBookController } = require("../Controller/bookController");

router.get("/getmsg", (req, res) => {
  res.send("Response from Book Router");
});

router.post("/addBook", handleAddBookController);
router.get("/getBook", handleGetAllBookController);
router.delete("/deleteBook", handleDeleteBookController)
router.put("/updateBook", handleUpdateBookController)

module.exports = router;