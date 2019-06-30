import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';

import Toggle from '../PickerToggle';
import { getDOMNode } from '@test/testUtils';

describe('Toggle', () => {
  it('Should output a toggle', () => {
    const Title = 'Title';
    const instance = getDOMNode(<Toggle title="title">{Title}</Toggle>);

    assert.equal(instance.tagName, 'A');
    assert.include(instance.className, 'toggle');
    assert.equal(instance.innerText, Title);
  });

  it('Should output a button', () => {
    const Title = 'Title';
    const instance = getDOMNode(
      <Toggle title="title" componentClass="button">
        {Title}
      </Toggle>
    );

    assert.equal(instance.tagName, 'BUTTON');
    assert.include(instance.className, 'toggle-custom');
    assert.equal(instance.innerText, Title);
  });

  it('Should call `onClean` callback', done => {
    const doneOp = () => {
      done();
    };
    const instance = getDOMNode(
      <Toggle title="title" hasValue cleanable onClean={doneOp}>
        Title
      </Toggle>
    );

    ReactTestUtils.Simulate.click(instance.querySelector('.rs-picker-toggle-clean'));
  });

  it('Should have a custom className', () => {
    const instance = getDOMNode(<Toggle className="custom" />);
    assert.include(instance.className, 'custom');
  });

  it('Should have a custom style', () => {
    const fontSize = '12px';
    const instance = getDOMNode(<Toggle style={{ fontSize }} />);
    assert.equal(instance.style.fontSize, fontSize);
  });

  it('Should have a custom className prefix', () => {
    const instance = getDOMNode(<Toggle classPrefix="custom-prefix" />);
    assert.ok(instance.className.match(/\bcustom-prefix\b/));
  });
});
