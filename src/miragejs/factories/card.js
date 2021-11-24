
import { Factory } from 'miragejs';
import faker from 'faker';

export default {
  card: Factory.extend({
    title() {
      return faker.fake('{{lorem.word}}');
    },
    genre(){
      return faker.fake('{{lorem.word}}');
    },
    img(){
      return faker.fake('{{image.image}}');
    },
    date(){
      return faker.fake('{{date.month}}');
    },
    description(){
      return faker.fake('{{commerce.productDescription}}')
    }
  })
};
