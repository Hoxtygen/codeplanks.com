import { getPosts, getPostDetails } from "..";

describe("Services", () => {
  describe("Posts", () => {
    it("fetch all post data", async () => {
      const data = await getPosts();
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBe(true);
    });

    it("fetch single post detail", async () => {
      const data = await getPostDetails("javascript-promises");
      expect(data).toBeDefined();
    });
  });
});
