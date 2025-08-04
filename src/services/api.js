const API_BASE_URL = "https://fhc-api.onrender.com";

const questionsCall = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;

  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(
      () => reject(new Error("Request timeout after 30 seconds")),
      30005
    );
  });

  try {
    const response = await Promise.race([
      fetch(url, defaultOptions),
      timeoutPromise,
    ]);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};

export const getQuestions = (user = "default") => {
  return questionsCall(`/questions?user=${encodeURIComponent(user)}`, {
    method: "GET",
  });
};

export const getSubmissions = (user = "default") => {
  return questionsCall(`/submissions?user=${encodeURIComponent(user)}`, {
    method: "GET",
  });
};

export const createSubmission = (submissionData, user = "default") => {
  console.log("User:", user);
  console.log("Submission data:", submissionData);
  return questionsCall(`/submissions?user=${encodeURIComponent(user)}`, {
    method: "POST",
    body: JSON.stringify(submissionData),
  });
};
