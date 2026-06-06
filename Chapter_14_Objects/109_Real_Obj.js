// Always use const for Pgject creation not let

const ENV = {
    BASE_URL: "https://courses.thetestingacademy.com/",
    TIMEOUT: 5000,
    RETRIES: 3,
    BROWSER: "chrome"
};

const EXPECTED_RESPONSE = {
    status: 200,
    body: {
        user: { role: "Admin", active: "true" }
    }
};

