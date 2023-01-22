import { readFakeData } from "@/__tests__/__mocks__/fakeData";
import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3000/api/shows/:showId", async (req, res, ctx) => {
    const { fakeShows } = await readFakeData();
    return res(ctx.json({ show: fakeShows[0] }));
  }),
];
