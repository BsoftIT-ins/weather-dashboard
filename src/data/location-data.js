const data = [
    {
        location: 'New York',
        latitude: 40.7128,
        longitude: -74.0060
    },
    {
        location: 'London',
        latitude: 51.5074,
        longitude: -0.1278
    },
    {
        location: 'Tokyo',
        latitude: 35.6895,
        longitude: 139.6917
    },
    {
        location: 'Sydney',
        latitude: -33.8688,
        longitude: 151.2093
    },
    {
        location: 'Singapore',
        latitude: 1.3521,
        longitude: 103.8198
    },
    {
        location: 'Beijing',
        latitude: 39.9042,
        longitude: 116.4074
    },
    {
        location: 'Paris',
        latitude: 48.8566,
        longitude: 2.3522
    },
    {
        location: 'Moscow',
        latitude: 55.7522,
        longitude: 37.6156
    },
    {
        location: 'Texas',
        latitude: 30.2672,
        longitude: -97.7431
    },
    {
        location: 'Dhaka',
        latitude: 23.7101,
        longitude: 90.4075
    },
    {
        location: 'Kolkata',
        latitude: 22.5726,
        longitude: 88.3639
    }
];

// Function to retrieve the entire data array
function getLocations() {
    return data;
}

// Function to find a location by name
function getLocationByName(location) {
    if (!location) return null;
    
    const filtered = data.filter((item) => item.location === location);
    
    if (filtered.length > 0) {
        return filtered[0];
    } else {
        const defaultLocation = {
            location: "",
            latitude: 0,
            longitude: 0
        };
        return defaultLocation;
    }
}

// Exporting data and functions if needed
export { data, getLocations, getLocationByName };
