/*
 * Mirage JS guide on Routes: https://miragejs.com/docs/route-handlers/functions
 */

export default function routes() {
  this.namespace = 'api';

  this.get("/movie/recomends", (schema) => {
    return schema.cards.all()
  });

  this.get("/movie/popular", (schema) => {
    return schema.cards.all()
  });

  this.get("/tv/popular", (schema) => {
    return schema.cards.all()
  });
}
