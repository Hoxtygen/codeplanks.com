import { getCategories, getPostDetails, getPosts } from "../index";

afterAll(async () => {
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 10000));
});

describe("Services", () => {
  jest.setTimeout(30000);
  describe("Posts", () => {
    it("fetch all post data", async () => {
      const data = await getPosts();
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBe(true);
      expect(data).not.toBeNull();
    });

    it("fetch single post detail", async () => {
      const data = await getPostDetails("javascript-promises");
      expect(data).toBeDefined();
      expect(data).not.toBeNull();
    });

    it("should return post categories", async () => {
      const data = await getCategories();
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBe(true);
      expect(data).not.toBeNull();
    });
  });
});
