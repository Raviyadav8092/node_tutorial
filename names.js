
//local --------no one can access
const secret = "SUPER-SECRET";      //by using modules we made absolutely sure that our secret data is not going to be shared as we have only ecported john and peter .

//shareable------anyone can access
const john = "John";
const peter = "peter";

module.exports = { john, peter };           //exporting values

