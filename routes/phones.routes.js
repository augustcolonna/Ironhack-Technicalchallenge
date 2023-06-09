const router = require("express").Router();
const phonesData = require('../data/phones.json')

router.get("/phones", async (req, res) => {
  res.json(phonesData);
});

router.get("/phones/:id", async (req, res) => {
  const findPhone = phonesData.find(phone => phone.id == req.params.id)  
  if(findPhone){
    res.json(findPhone);
  }
  });

module.exports = router;