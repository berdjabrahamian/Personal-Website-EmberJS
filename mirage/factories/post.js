import {Factory} from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({

  publish() {
    return faker.random.boolean();
  },

  title() {
    return faker.lorem.sentence();
  },

  slug() {
    return faker.lorem.slug();
  },

  author() {
    return faker.name.findName();
  },

  body() {
    return faker.lorem.paragraph();
  },

  featuredImage() {
    return faker.image.dataUri(500,500);
  },

  createdAt() {
    return faker.date.past();
  },

  updatedAt() {
    return faker.date.recent();
  },

  publishedAt() {
    return faker.date.recent();
  }
});
