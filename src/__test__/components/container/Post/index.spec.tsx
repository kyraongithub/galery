import Post from "@/components/containers/Post";
import { fireEvent, render } from "@testing-library/react";

describe("Post component", () => {
  it("render Post", () => {
    const { container } = render(<Post />);
    expect(container).toMatchSnapshot();
  });
  it("render Post with data", () => {
    const mockData = {
      title: ["Two houses behind the fence"],
      link: [
        {
          $: {
            rel: "alternate",
            type: "text/html",
            href: "https://www.flickr.com/photos/190550837@N04/52782611707/",
          },
        },
        {
          $: {
            rel: "enclosure",
            type: "image/jpeg",
            href: "https://live.staticflickr.com/65535/52782611707_d429f8b443_b.jpg",
          },
        },
      ],
      id: ["tag:flickr.com,2005:/photo/52782611707"],
      published: ["2023-03-31T11:32:10Z"],
      updated: ["2023-03-31T11:32:10Z"],
      "flickr:date_taken": ["2023-03-31T12:29:05-08:00"],
      "dc:date.Taken": ["2023-03-31T12:29:05-08:00"],
      content: [
        {
          _: '\t\t\t<p><a href="https://www.flickr.com/people/190550837@N04/">.ilona.</a> posted a photo:</p>\n\t\n<p><a href="https://www.flickr.com/photos/190550837@N04/52782611707/" title="Two houses behind the fence"><img src="https://live.staticflickr.com/65535/52782611707_d429f8b443_m.jpg" width="240" height="135" alt="Two houses behind the fence" /></a></p>\n\n\n',
          $: {
            type: "html",
          },
        },
      ],
      author: [
        {
          name: [".ilona."],
          uri: ["https://www.flickr.com/people/190550837@N04/"],
          "flickr:nsid": ["190550837@N04"],
          "flickr:buddyicon": [
            "https://farm66.staticflickr.com/65535/buddyicons/190550837@N04.jpg?1665867420#190550837@N04",
          ],
        },
      ],
      category: [
        {
          $: {
            term: "tag",
            scheme: "https://www.flickr.com/photos/tags/",
          },
        },
      ],
      displaycategories: ["\n            "],
    };
    const { container } = render(<Post item={mockData} />);
    expect(container).toMatchSnapshot();
  });
  it("should handle click profile", () => {
    const mockData = {
      title: ["Two houses behind the fence"],
      link: [
        {
          $: {
            rel: "alternate",
            type: "text/html",
            href: "https://www.flickr.com/photos/190550837@N04/52782611707/",
          },
        },
        {
          $: {
            rel: "enclosure",
            type: "image/jpeg",
            href: "https://live.staticflickr.com/65535/52782611707_d429f8b443_b.png",
          },
        },
      ],
      id: ["tag:flickr.com,2005:/photo/52782611707"],
      published: ["2023-03-31T11:32:10Z"],
      updated: ["2023-03-31T11:32:10Z"],
      "flickr:date_taken": ["2023-03-31T12:29:05-08:00"],
      "dc:date.Taken": ["2023-03-31T12:29:05-08:00"],
      content: [
        {
          _: '\t\t\t<p><a href="https://www.flickr.com/people/190550837@N04/">.ilona.</a> posted a photo:</p>\n\t\n<p><a href="https://www.flickr.com/photos/190550837@N04/52782611707/" title="Two houses behind the fence"><img src="https://live.staticflickr.com/65535/52782611707_d429f8b443_m.jpg" width="240" height="135" alt="Two houses behind the fence" /></a></p>\n\n\n',
          $: {
            type: "html",
          },
        },
      ],
      author: [
        {
          name: [".ilona."],
          uri: ["https://www.flickr.com/people/190550837@N04/"],
          "flickr:nsid": ["190550837@N04"],
          "flickr:buddyicon": [
            "https://farm66.staticflickr.com/65535/buddyicons/190550837@N04.jpg?1665867420#190550837@N04",
          ],
        },
      ],
      category: [
        {
          $: {
            term: "",
            scheme: "https://www.flickr.com/photos/tags/",
          },
        },
      ],
      displaycategories: ["\n            "],
    };
    const { container, getByRole } = render(<Post item={mockData} />);
    fireEvent.click(getByRole("button"));
    expect(container).toMatchSnapshot();
  });
});
