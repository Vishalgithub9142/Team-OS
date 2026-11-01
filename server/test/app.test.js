const test = require("node:test")
const assert = require("node:assert/strict")
const app = require("../src/app")

test("GET /api/health returns a successful response", async(t) =>{
    const server = app.listen(0) // Start the server on a random available port

    await new Promise((resolve) => server.once("listening", resolve))

    t.after(()=> new Promise((resolve, reject) => {
        server.close((error) => error ? reject(error) :resolve())
    }))

    const address = server.address()
    const response = await fetch(`http://127.0.0.1:${address.port}/api/health`);
    const body = await response.json();


    assert.equal(response.status, 200);
    assert.equal(body.success, true);
    assert.equal(body.message, "TeamOS AI API is running");
    assert.ok(body.timestamp);
})  

test("Unknown API routes return 404", async (t) => {
  const server = app.listen(0);

  await new Promise((resolve) => server.once("listening", resolve));

  t.after(() => new Promise((resolve, reject) => {
    server.close((error) => error ? reject(error) : resolve());
  }));

  const response = await fetch(
    `http://127.0.0.1:${server.address().port}/api/does-not-exist`
  );

  assert.equal(response.status, 404);
})