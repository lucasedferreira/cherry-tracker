function isAutheticated(to, from, next) {
  const token = localStorage.getItem("token");
  if(token) next();
  else next({name: "home"});
}

export default isAutheticated;
