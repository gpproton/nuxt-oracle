'use strict'

class TruckInfoController {
    async index({ request, response, params }) {
        
        const req = request.method();

        switch(req) {
            case 'GET':
            const Database = use('Database').connection('oracledb');
            const truck = await Database.schema.raw(`SELECT * from ot_fleet_time where rownum <= 1 and ft_txn_no = ${params.id}`);

            if (truck) {
                
                response.header('Content-type', 'application/json');
                response.type('application/json');
                response.send({
                    status: 1,
                    message: 'Successfull',
                    data: truck
                });

                console.log ( params );

            } else {
                response.status(404).json({
                    message: 'trip not found',
                    data: []
                })
            }

            break;
            case 'POST':


                console.log ( params );
                response.header('Content-type', 'application/json');
                response.type('application/json');
                response.send([{
                    status: 1,
                    message: 'Successfull',
                    data: []
                }]);

            break;
            case 'PUT':

            return 'puts';

            break;
            case 'DELETE':

            return 'deletes';

            break;
            default:
                return 'craps';
                break;
        }
    }

}

module.exports = TruckInfoController
