function status(request, response) {
  response.status(200).json({ Ok: "ok" });
}

export default status;
