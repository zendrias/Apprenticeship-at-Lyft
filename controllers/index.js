function index(req, res, next) {
  res.status('200').json({ status: 'Please Send A Post Request To /test For Demonstration' });
};


export { index };