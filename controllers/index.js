function index(req, res) {
  const str = everyThird(req.body.string_to_cut)
  res.status(200).json({ return_string: str })
}

export { index };