const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagdata = await Tag.findAll({
      include: [{model: Product} ]
    })
    res.status(200).json(tagdata)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagIddata = await Tag.findByPk(req.params.id, {
      include: {model: Product}
    })

    if(!tagIddata){
      res.status(404).json({message: "No tag found with that id!"})
    }

    res.status(200).json(tagIddata)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagAdd = await Tag.create({
      tag_name: req.body.tag_name,
    })
    res.status(200).json(tagAdd)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
    try {
    Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
      where: {
        id: req.params.id
      }
  }).then((updatedTag) => {
    res.status(200).json(updatedTag)
  })
  } catch (err) {
    res.status(500).json(err)
  }

});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    Tag.destroy({
    where: {
      id: req.params.id,
    }
  })
  res.status(200).json({message: "That Tag has been deleted!"})
  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
