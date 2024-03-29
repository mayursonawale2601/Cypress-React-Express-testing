import axios from "./instance";

function submitApplication({
  fname,
  lname,
  email,
  phone
}) {

  if ( fname.length >= 10 || lname.length >= 10 ) {
    throw new Error("All fields are mendatory!") ;
  }

  return axios.post(
    'form',
    {
      fname,
      lname,
      email,
      phone
    }
  )
};

const apis = { submitApplication };

export default apis;