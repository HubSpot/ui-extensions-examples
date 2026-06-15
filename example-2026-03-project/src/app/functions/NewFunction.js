exports.main = async (context = {}) => {
  const { text, firstName, lastName, email } = context.parameters;

  return {
    message: `Hello ${firstName} ${lastName} (${email})! You said: "${text}"`,
    timestamp: new Date().toISOString(),
  };
};
