test("Get to /api/v1/status deve retornar 200", async () => {
  response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});
