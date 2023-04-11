
const Employee = require('../../models/Employee');
const { paginate, getPaginatedData } = require('../../utils/query');

const getEmployees = async (req,res) => {
    try {
        const params = req.query
        const query = paginate({
            where: {
                active: 1
            }
        },{
            page: parseInt(params.page) || 1,
            pageSize: parseInt(params.pageSize) || 10
        });

        console.log("QUERY:",query)
        const employees = await Employee.findAndCountAll(query).catch(error => console.log("SQL ERROR [employeesContorller]:",error));

        res.json({
            success:true,
            message: 'sucess!',
            data: getPaginatedData(params,employees)
        })
    } catch (error) {
        console.log("ERROR",error)
        res.status(500).send({ message: error })
    }
}

module.exports = { getEmployees }