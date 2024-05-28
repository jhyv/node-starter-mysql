
const Product = require('../../models/Product');
const { paginate, getPaginatedData } = require('../../utils/query');
const { response } = require('../response');

const getProducts = async (req, res) => {
    try {
        const params = req.query
        const query = paginate({
            where: {
                active: 1
            },
            // include: { model: EmployeeDetail, as: 'employee_detail' }
        }, {
            page: parseInt(params.page) || 1,
            pageSize: parseInt(params.page_size) || 10
        });

        console.log("QUERY:", query)
        const products = await Product.findAndCountAll(query).catch(error => console.log("SQL ERROR [productsContorller]:", error));

        // res.json({
        //     success:true,
        //     message: 'success!',
        //     response: getPaginatedData(params,employees)
        // })
        res.json(response(true, 'sucecss!', getPaginatedData(params, products)));

    } catch (error) {
        console.log("ERROR", error)
        res.status(500).send({ message: error })
    }
}

module.exports = { getProducts };