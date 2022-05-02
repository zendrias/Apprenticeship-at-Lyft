function cutString(req, res) {
  const str = everyThird(req.body.string_to_cut)
  res.status(200).json({ return_string: str })
}


// Helper Function
function everyThird(string) {
  let newStr = Array.from(string, (ltr, i) => (
    (i + 1) % 3 === 0 ? ltr : ''
  ))
  return newStr.join('')
}


export { cutString };