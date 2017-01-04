// setup express as router
const router = require('express').Router();

// require models
const Campus = require('../../db/models/campus')


router.param('id', function(req, res, next, id) {
  Campus.findById(id)
  .then(campus => {
    if (!campus) throw new Error(`${404}: The campus (id: ${id}) you are looking for does not exist`)

    // res.json('CAMPUS -NOT-FOUND')
    req.campus = campus;
    next()
  })
  .catch(next)
}
)
// ^^need error handler

router.get('/', function (req, res, next) {
  Campus.findAll()
  .then(campus => {
    res.json(campus);
  })
  .catch(next);
});

router.get('/:id', function (req, res, next) {
  req.campus.reload()
  .then(function (campus) {
    res.json(campus);
  })
  .catch(next);
});

router.post('/', function (req, res, next) {
  Campus.create({
        name: req.body.name,
        image: req.body.image
    })
  .then(function (campus) {
    res.status(201).json(campus);
  })
  .catch(next);
});


// router.put('/:id', function (req, res, next) {
//   req.campus.update(req.body)
//   .then(function (campus) {
//     return campus.reload();
//   })
//   .then(function (campus) {
//     res.json(campus);
//   })
//   .catch(next);
// });

// result
router.put('/:id', (req, res, next) => {
	Campus.update(req.body, {
		where: {
			id: req.campus.id
		},
		returning: true
	})
	.then(data => data[1])
	.then(updatedCampus => {
		res.send(updatedCampus)
	})
	.catch(next)
});

router.delete('/:id', function (req, res, next) {
  req.campus.destroy()
  .then(function () {
    res.status(204).end();
    console.log(`campus id: ${req.campus.id}) deleted`);
  })
  .catch(next);
});


module.exports = router;