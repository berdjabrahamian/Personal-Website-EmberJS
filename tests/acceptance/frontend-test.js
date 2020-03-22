import {module, test} from 'qunit';
import {visit, currentURL} from '@ember/test-helpers';
import {setupApplicationTest} from 'ember-qunit';

module('Acceptance | frontend', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting HOME PAGE - /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });

  test('visiting CONTACT PAGE - /contact', async function (assert) {
    await visit('/contact');

    assert.equal(currentURL(), '/contact');
  });

  test('visiting POSTS PAGE - /posts', async function (assert) {
    await visit('/posts');

    assert.equal(currentURL(), '/');
  });

  test('visiting LESSONS PAGE - /lessons', async function (assert) {
    await visit('/lessons');

    assert.equal(currentURL(), '/lessons');
  });

  test('visiting PROJECTS PAGE - /projects', async function(assert){
    await visit('/projects');

    assert.equal(currentURL(), '/projects');
  });
});
