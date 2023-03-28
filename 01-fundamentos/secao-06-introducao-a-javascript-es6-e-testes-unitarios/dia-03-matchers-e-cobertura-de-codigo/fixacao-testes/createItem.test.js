const createItem = require("./createItem");

describe("função que cria itens para a lista", () => {
  it("cria um item válido", () => {
    const returnItem = {
      name: "banana",
      unit: "kg",
      price: 1.99,
      quantity: 20,
    };
    const itemCreated = createItem("banana", "kg", 1.99, 20);
    expect(itemCreated).toEqual(returnItem);
  });

  it("Teste se a função utiliza zero como quantidade padrão.", () => {
    const returnItem = 0;
    const itemCreated = createItem("banana", "kg", 1.99);
    expect(itemCreated).toHaveProperty("quantity", returnItem);
  });

  it("Teste se a função lança algum erro quando não recebe parâmetros.", () => {
    expect(() => createItem()).toThrow();
  });

  it("Teste se a função lança um erro se o nome do item não é uma string.", () => {
    expect(() => createItem(1.99, "kg", "banana", 20)).toThrow(
      new Error("O nome do item deve ser uma string")
    );
  });

  it("Teste se a função lança um erro se o preço do item é negativo ou zero.", () => {
    expect(() => createItem("banana", "kg", -0.01)).toThrow(
      new Error("O preço do item deve ser maior que zero")
    );
  });

  it("Teste se a função lança um erro se o preço do item é negativo ou zero.", () => {
    expect(() => createItem("banana", "kg", 0.0)).toThrow(
      new Error("O preço do item deve ser maior que zero")
    );
  });
});
