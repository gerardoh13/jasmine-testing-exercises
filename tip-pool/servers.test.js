describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });
  it('should create table row element and pass to appendTd function with input value', function () {
    submitServerInfo();
    updateServerTable();
    let testTr = document.getElementById("server1");
    expect(testTr.children.length).toEqual(3);
    expect(testTr.children[0].innerText).toEqual('Alice');
    expect(testTr.children[1].innerText).toEqual('$0.00');
    expect(testTr.children[2].innerText).toEqual('X');

  });

  afterEach(function() {
    // teardown logic
    allServers = {};
    serverTbody.innerHTML = '';
    serverId = 0;
  });
});
