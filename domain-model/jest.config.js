module.exports = {
    preset: 'ts-jest',
	testEnvironment: 'node',
	testMatch: ["**/test/**/*.test.ts"],
	collectCoverage: true, // Deixar true para visualizar % de cobertura de testes
	moduleNameMapper: { 
		"^@/test/(.*)$": "<rootDir>/test/$1",
		"^@/(.*)$": "<rootDir>/src/$1" 
	},
	coveragePathIgnorePatterns: ['./test/data']
}

