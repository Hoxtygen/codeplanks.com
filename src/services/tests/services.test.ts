import {
  getCategories,
  getCategoryPosts,
  getPostDetails,
  getPosts,
  getRecentPosts,
  getSimilarPosts,
} from "../index";

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

    it("should return posts by categories", async () => {
      const data = await getCategoryPosts("web-dev");
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBe(true);
      expect(data).not.toBeNull();
    });

    it("should return recent posts", async () => {
      const data = await getRecentPosts();
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBe(true);
      expect(data).not.toBeNull();
    });

    it("should return similar posts", async () => {
      const data = await getSimilarPosts(["web-dev"], "javascript-promises");
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBe(true);
      expect(data).not.toBeNull();
    });
  });
});
