// setup express as router
const router = require('express').Router();

// require models
const Student = require('../../db/models/student');


router.param('id', function(req, res, next, id) {
  Student.findById(id)
  .then(student => {
    if (!student) throw new Error(`${404}: The student (id: ${id}) you are looking for does not exist`)

    // res.json('CAMPUS -NOT-FOUND')
    req.student = student;
    next()
  })
  .catch(next)
}
)
// ^^need error handler

router.get('/', function (req, res, next) {
  Student.findAll()
  .then(student => {
    res.json(student);
  })
  .catch(next);
});

router.get('/:id', function (req, res, next) {
  req.student.reload()
  .then(function (student) {
    res.json(student);
  })
  .catch(next);
});

router.post('/', function (req, res, next) {
  Student.create({
        name: req.body.name,
        email: req.body.email
    })
  .then(function (student) {
    res.status(201).json(student);
  })
  .catch(next);
});

// mine
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

// dk
// router.put('/:campusId', (req, res, next) => {
// 	Campus.update(req.body, {
// 		where: {
// 			id: req.params.campusId
// 		},
// 		returning: true
// 	})
// 	.then(data => data[1])
// 	.then(updatedCampus => {
// 		res.send(updatedCampus)
// 	})
// 	.catch(next)
// });

// result
router.put('/:id', (req, res, next) => {
	Student.update(req.body, {
		where: {
			id: req.student.id
		},
		returning: true
	})
  .then(data => data[1])
	.then(updatedStudent => {
		res.send(updatedStudent)
	})
	.catch(next)
});

router.delete('/:id', function (req, res, next) {
  req.student.destroy()
  .then(function () {
    res.status(204).end();
    console.log(`student id: ${req.student.id}) deleted`);
  })
  .catch(next);
});


module.exports = router;