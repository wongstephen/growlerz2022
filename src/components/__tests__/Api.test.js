describe("Api Test", () => {
  test("API returns correct data", async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var graphql = JSON.stringify({
      query:
        "query getData {\n    businessHour {\n        data {\n            id\n            attributes {\n                Daycare\n                Park\n            }\n        }\n    }\n}",
      variables: {},
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: graphql,
      redirect: "manual",
    };
    const response = await fetch(
      "https://api.growlerzseattle.com/graphql",
      requestOptions
    );
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.data).toBeTruthy();
  });
});
