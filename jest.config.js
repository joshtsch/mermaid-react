module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: { "^.+\\.(ts|tsx|js|jsx|html)$": "ts-jest" },
  transformIgnorePatterns: ["node_modules/(?!(entity-decode|mermaid)/)"],
};
