const brickList = require('../vendors/bricks.json');

const listBricks = async (req, res) => {

    try {
        const data = brickList;

        res.status(201).json({
            ok: true,
            data: data.results
        });
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Something went wrong here, please try again. Maybe look into the docs? The request body might need something.'
        });
    }


}

module.exports = {listBricks}