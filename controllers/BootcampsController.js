export function getBootcamp(req, res, next) {
  res
    .status(201)
    .send({ success: true, object: `Show a single bootcamp ${req.params.id}` });
}

export function getBootcamps(req, res, next) {
  res.status(201).send({ success: true, object: 'Show all bootcamps' });
}

export function createBootcamp(req, res, next) {
  res.status(201).send({ success: true, object: 'Create new bootcamp' });
}

export function updateBootcamp(req, res, next) {
  res
    .status(201)
    .send({ success: true, object: `Update bootcamp ${req.params.id}` });
}

export function deleteBootcamp(req, res, next) {
  res
    .status(201)
    .send({ success: true, object: `Delete bootcamp ${req.params.id}` });
}
