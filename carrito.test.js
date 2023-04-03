const Carrito = require("./Carrito");
let carritoCompras = new Carrito();
let autos = [
  {
    id: 0,
    marca: "Audi",
    modelo: "A1",
    precio: 100000,
  },
  {
    id: 0,
    marca: "BMW",
    modelo: "i3",
    precio: 80000,
  },
  {
    id: 0,
    marca: "Mercedes Benz",
    modelo: "AMG One",
    precio: 120000,
  },
];
describe("Carrito Propiedades:", function () {
  test("La propiedad productos dentro del carritoCompras deberia ser un array vacio", function () {
    expect(carritoCompras.productos.length).toBe(0);
  });

  test("La propiedad total deberia ser  0.", function () {
    expect(carritoCompras.total).toBe(0);
  });
});

describe("Carrito Metodos:", function () {
  afterEach(function () {
    carritoCompras.productos = [];
    carritoCompras.total = 0;
  });

  test("agregar() deberia agregar productos autos al carrito de compras.", function () {
    carritoCompras.agregar(autos[0]);
    carritoCompras.agregar(autos[2]);

    expect(carritoCompras.productos.length).toBe(2);
    expect(carritoCompras.productos[0]).toEqual(autos[0]);
    expect(carritoCompras.productos[1]).toEqual(autos[2]);
  });

  test("agregar() deberia incrementar la propiedad total.", function () {
    carritoCompras.agregar(autos[0]);

    expect(carritoCompras.total).toBe(autos[0].precio);
  });

  test("remover() deberia remover productos autos del carrito de compras.", function () {
    carritoCompras.agregar(autos[1]);
    carritoCompras.agregar(autos[2]);

    carritoCompras.remover(1, autos[1].precio);

    expect(carritoCompras.productos.length).toBe(1);
    expect(carritoCompras.productos[1]).not.toBeDefined();
  });

  test("remover() deberia decrementar la propiedad total.", function () {
    carritoCompras.agregar(autos[1]);
    carritoCompras.agregar(autos[2]);

    carritoCompras.remover(1, autos[1].precio);

    expect(carritoCompras.total).toBe(autos[2].precio);
  });

  test("pagar() deberia dejar la lista de productos vacia y el total en 0.", function () {
    carritoCompras.agregar(autos[1]);
    carritoCompras.agregar(autos[2]);

    carritoCompras.pagar();

    expect(carritoCompras.productos.length).toBe(0);
    expect(carritoCompras.total).toBe(0);
  });
});
