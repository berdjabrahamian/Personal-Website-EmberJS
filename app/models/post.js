import Model, { attr } from '@ember-data/model';

export default class PostModel extends Model {

  @attr('boolean') publish;
  @attr title;
  @attr body;
  @attr featuredImage;
  @attr slug;
  @attr author;
  @attr('date') createdAt;
  @attr('date') updatedAt;
  @attr('date') publishedAt;
}
