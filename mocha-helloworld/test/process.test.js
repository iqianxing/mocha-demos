describe("# process",function(){
  it("process.env", function () {
    console.log(process.env);
  });

  it("process.argv", function () {
    console.log(process.argv);
  });

  it("process.cwd", function () {
    console.log(process.cwd());
  });

  it("process.config", function () {
    console.log(process.config);
  });
})