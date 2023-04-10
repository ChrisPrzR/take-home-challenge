
const brickList = require('../vendors/bricks.json');

function isInProgress (req, res, next) {

    const { brickId } = req.body;

    // Simulate DB search for ID
    const [brick] = brickList.results.filter( brick => brick.id === brickId);

    if (brick.inProgress) {
        res.status(202).json({
            ok: true,
            msg: 'Sorry, this brick is currently being purchased. Try with another one.',
        });
    } else {
        next()
    }
};

module.exports = {
    isInProgress
}