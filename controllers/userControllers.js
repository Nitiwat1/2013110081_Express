exports.index =  (req, res, next) => {
    // res.send('Hello kitty');
    res.status(200).json({
        fullname: 'Nitiwat Phomemarasee'
    })
};

exports.bio =  (req, res, next) => {
    // res.send('Hello kitty');
    res.status(200).json({
      fullname:'Nitiwat Phomemarasee',
      nickname:'Boss',
      hobby:'sleep',
      gitusername:'nitiwat1'
    })
  };