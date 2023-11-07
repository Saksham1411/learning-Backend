const notFound = (req,res) => res.status(400).send('Route does not Exist');

module.exports = notFound;