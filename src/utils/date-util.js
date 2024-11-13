function getFormatDate(value, type, inMS) {
  // If no value is provided, set it to the current timestamp
  if (!value) {
    value = Date.now();
  }

  // If value is in seconds and inMS is true, convert it to milliseconds
  if (inMS && value < 10000000000) { // Assuming timestamp in seconds (if less than ~10 billion)
    value = value * 1000;
  }

  // Create a Date object from the timestamp
  const date = new Date(value);

  // Log the date to debug
  console.log('Date created from value:', date);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    console.error("Invalid date value:", value);
    return "Invalid date"; // Return a message if the date is invalid
  }

  // Set formatting options based on the 'type' argument
  let options;

  if (type === "date") {
    options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  } else if (type === "time") {
    options = {
      hour: "numeric",
      minute: "numeric",
    };
  } else {
    // Default: both date and time
    options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
  }

  // Format the date and return the result
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export { getFormatDate };
