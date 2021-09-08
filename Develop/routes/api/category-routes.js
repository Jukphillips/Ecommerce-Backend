const router = require('express').Router();
const { Category, Product } = require('../../models');
const { beforeBulkDestroy } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const catergoryData = await Category.findAll({
      include: {model: Product}
    })
    res.status(200).json(catergoryData)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryIdData = await Category.findByPk(req.params.id, {
      include: { model: Product}
    }); 

    if(!categoryIdData){
      res.status(404).json({ message: 'No Catergory found with that id!'})
    }

    res.status(200).json(categoryIdData)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryAdd = await Category.create({
      category_name: req.body.category_name,
    })
    res.status(200).json(categoryAdd)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    Category.update(
      {
        category_name: req.body.category_name,
      },
      {
      where: {
        id: req.params.id
      }
  }).then((updatedCategory) => {
    res.status(200).json(updatedCategory)
  })
  } catch (err) {
    res.status(500).json(err)
  }

});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  
  try {
    Category.destroy({
    where: {
      id: req.params.id,
    }
  })
  res.status(200).json({message: "That category has been deleted!"})
  } catch(err) {
    res.status(500).json(err);
  }

});

module.exports = router;
