// Clases
class Album {
  constructor(titulo, artista, año, precio) {
    this.titulo = titulo;
    this.artista = artista;
    this.año = año;
    this.precio = precio;
  }
  mostrarArtista() {
    console.log("El artista de este album es: " + this.artista);
  }
}

const album1 = new Album("De bichos y flores", "La vela puerca", 2001, 700);
console.log(album1);
album1.mostrarArtista();

const album2 = new Album("A contraluz", "La vela puerca", 2004, 500);
console.log(album2);
album2.mostrarArtista();

const album3 = new Album("Calaveras", "La trampa", 1997, 600);
console.log(album3);
album3.mostrarArtista();

const album4 = new Album("Publico", "NTVG", 2012, 650);
console.log(album4);
album4.mostrarArtista();

const album5 = new Album("Bunker", "Once tiros", 2016, 550);
console.log(album5);
album5.mostrarArtista();

const album6 = new Album("Antología", "NTVG", 2020, 950);
console.log(album6);
album6.mostrarArtista();

const album7 = new Album(
  "La mosca y la sopa",
  "Patricio Rey y sus redonditos de ricota",
  1991,
  1350
);
console.log(album7);
album7.mostrarArtista();
