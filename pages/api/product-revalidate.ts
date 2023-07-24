import { NextApiRequest, NextApiResponse } from "next";
import { triggerProductRegeneration } from "../../src/api/products";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Extract the productId from the query parameters
  const productId = req.query.productId;

  if (!productId) {
    return res
      .status(400)
      .json({ message: "productId is missing in the query" });
  }

  try {
    // Call the function to trigger product regeneration with the extracted productId
    await triggerProductRegeneration(Number(productId));

    // Return a success response
    res.status(200).json({ message: "Regeneration triggered successfully" });
  } catch (error: any) {
    // Handle any errors that might occur during regeneration
    res.status(500).json({
      message: "Failed to trigger regeneration",
      error: error.message,
    });
  }
}
