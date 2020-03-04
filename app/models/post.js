import Model, {attr} from '@ember-data/model';

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

  //We will get the created at and separate it into MM/DD/YYYY so we can create a craphic of when it was posted
  get postedDate() {
    let date = new Date(this.createdAt);


    return [
      date.toLocaleDateString('default', {day: '2-digit'}),
      date.toLocaleDateString('default', {month: 'short'}),
      date.toLocaleDateString('default', {year: 'numeric'})];
  }
}
