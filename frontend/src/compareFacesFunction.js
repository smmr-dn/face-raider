const API_KEY = "KUMABfeqGMtp5n89H3-F1yr14IYJZ1350";
const requestURL = "https://faceapi.mxface.ai/api/v3/face/verify";

const compareFaces = async () => {
  const response = await fetch(requestURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      subscriptionkey: API_KEY,
    },
    body: JSON.stringify({
      encoded_image1: img1,
      encoded_image2: img2,
    }),
  });

  return response.json();
};
