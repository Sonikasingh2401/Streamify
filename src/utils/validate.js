export const checkValidData = (email,password)=>{

const isEmailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
const isPasswordvalid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

if (!isEmailvalid) return "Email-id is not valid.";
if (!isPasswordvalid) return "Password is not valid.";

return null;

};

