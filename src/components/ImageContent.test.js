import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { StaticRouter } from 'react-router'

import ImageContent from './ImageContent';

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders user data", async () => {
  const imageSizes = [
    {
      label: 'Original',
      source: 'https://live.staticflickr.com/339/31650026784_ce07ae927c_o.jpg'
    }
  ];

  const imageContent = {
    dates: {
      taken: new Date('2017-01-08 09:13:15')
    },
    title: {
      _content: 'Test Image'
    },
    owner: {
      realname: 'John Doe'
    }
  };

  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(imageContent)
    }).then(Promise.resolve({
      json: () => Promise.resolve(imageSizes)
    }))
  );

  await act(async () => {
    render(
      <StaticRouter>
        <ImageContent sizes={imageSizes} content={imageContent} />
      </StaticRouter>,
      container);
  });

  expect(container.querySelector('.image__content-img').getAttribute('src')).toEqual(imageSizes[0].source);
  expect(container.querySelector('.image__content-hdg').textContent).toBe(imageContent.title._content);
  expect(container.querySelector('.image__content-author').textContent).toBe(`by ${imageContent.owner.realname}`);
  expect(container.querySelector('.image__content-date').textContent).toBe(imageContent.dates.taken.toString());

  global.fetch.mockRestore();
});