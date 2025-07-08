export const formatDate = (dateInput) => {
  try {
    // Handle string dates from MongoDB
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    
    // Validate date
    if (!date || isNaN(date.getTime())) {
      return "Invalid Date";
    }
    
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"  // Make sure NO extra spaces or characters
    });
  } catch (error) {
    console.error("Date formatting error:", error);
    return "Invalid Date";
  }
};