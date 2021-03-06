const router = require("express").Router();
const Transaction = require("../models/transaction.js");

router.post("/api/transaction", ({body}, res) => {
  Transaction.create(body)
    .then(dbTransaction => {
      console.log("api/transaction response: " + dbTransaction);
      res.json(dbTransaction);
    })
    .catch(err => {
      console.log("api/transaction error: " + err);
      res.status(500).json({error: err});
    });
});

router.post("/api/transaction/bulk", ({body}, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(500).json({error: err});
    });
});

router.get("/api/transaction", (req, res) => {
  Transaction.find({}).sort({date: -1})
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(500).json({error: err});
    });
});

module.exports = router;