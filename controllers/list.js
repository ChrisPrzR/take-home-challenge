const listBricks = async (req, res) => {

    try {
        const data = {"results": [
            {
                "id": 1,
                "propertyId": 1,
                "price": 100,
            },
            {
                "id": 2,
                "propertyId": 1,
                "price": 100,
            },
            {
                "id": 3,
                "propertyId":2,
                "price": 100,
            }
        ]}

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