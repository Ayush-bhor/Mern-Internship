const Book = require("../Model/book");

const handleAddBookController = async (req, res) => {
  try {
    const data = req.body;
    let bookDetails = await Book.create(data);
    
    return res.status(200).json({ Message: "Details Added" });
  } catch (err) {
    return res.status(500).json({ Message: err.message });
  }
};

const handleGetAllBookController = async (req, res) => {
  try {
    const bookList = await Book.find({});
 
    return res.status(200).json({ Message: " Book Details Get successfully",BookList:bookList});
  } catch (err) {
    return res.status(500).json({ Message: err.message });
  }
};

const handleDeleteBookController = async (req, res) => {
  try {
    const id = req.params.id || req.body._id;

    if (!id) {
      return res.status(400).json({ Message: "Book id is required" });
    }

    const deletedDetails = await Book.findByIdAndDelete(id);

    if (!deletedDetails) {
      return res.status(404).json({ Message: "Book not found" });
    }

    return res.status(200).json({ Message: " Book Details Deleted successfully"});
  } catch (err) {
    return res.status(500).json({ Message: err.message });
  }
};



module.exports = { handleAddBookController , handleGetAllBookController, handleDeleteBookController};