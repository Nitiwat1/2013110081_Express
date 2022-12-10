const Company = require('../models/company')

exports.company = async (req , res , next) => {

const company = await Company.findOne()

  res.status(200).json({
    data:company
  })
} 
// const company = {
//     data: [
//       {
//         id: 1,
//         name: 'Microsoft (Thailand)',
//         address: {
//           province: 'Bangkok',
//           postcode: 10330
//         }
//       },
//       {
//         id: 2,
//         name: 'Roit',
//         address: {
//           province: 'Los Angelns',
//           postcode: 90003
//         }
//       },
//       {
//         id:3,
//         name:'Amazon',
//         address:{
//             province:'Seattle',
//             postcode: 98109
//         }
//       }
//     ]
//   }
  
//   exports.index = (req, res) => {
//     res.send(company)
//   }