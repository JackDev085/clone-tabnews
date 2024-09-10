import database from "../../../../infra/database.js";
async function status(request, response) {
  const result = await database.query("SELECT 1+1 as row;");
  console.log(result.rows);
  response.status(200).json({ Ok: "ok" });
}

export default status;
