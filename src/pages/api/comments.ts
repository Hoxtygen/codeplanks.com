import { graphqlAPI } from "../../constants";
import { NextApiRequest, NextApiResponse } from "next";
import { GraphQLClient } from "graphql-request";
import { newCommentQuery } from "../../graphql";
import { NewComment } from "../../typedefs";

type Override<T1, T2> = Omit<T1, keyof T2> & T2;
type CustomRequest = Override<NextApiRequest, { body: NewComment }>;

export default async function formHandler(
  req: CustomRequest,
  res: NextApiResponse
) {
  const token = process.env.GRAPHCMS_TOKEN;
  if (!token) {
    throw new Error("Token missing. Please supply a token ");
  }

  const graphqlClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const { name, email, comment, slug } = req.body;

  const result: NextApiResponse = await graphqlClient.request(newCommentQuery, {
    name,
    email,
    comment,
    slug,
  });
  return res.status(200).send(result);
}
