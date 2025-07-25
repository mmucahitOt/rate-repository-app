import { render, fireEvent, screen } from "@testing-library/react-native";
import RepositoryListContainer from "./repositoryListContainer";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };

      const repositoryNodes = repositories.edges.map((edge) => edge.node);
      const repository = repositoryNodes[0];

      // Add your test code here
      const { debug } = render(
        <RepositoryListContainer repositories={repositoryNodes} />
      );

      const repositoryItem = screen.getByTestId(
        `repositoryItem-${repository.id}`
      );

      // Check that the repository item contains the expected text content
      expect(repositoryItem).toHaveTextContent(new RegExp(repository.fullName));
      expect(repositoryItem).toHaveTextContent(
        new RegExp(repository.description)
      );
      expect(repositoryItem).toHaveTextContent(new RegExp(repository.language));
      expect(repositoryItem).toHaveTextContent(
        new RegExp(repository.forksCount.toString())
      );
      expect(repositoryItem).toHaveTextContent(
        new RegExp(repository.stargazersCount.toString())
      );
      expect(repositoryItem).toHaveTextContent(
        new RegExp(repository.ratingAverage.toString())
      );
      expect(repositoryItem).toHaveTextContent(
        new RegExp(repository.reviewCount.toString())
      );
    });
  });
});
