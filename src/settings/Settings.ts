import {LanguageId} from "src/main";

/**
 * Interface that contains all the settings for a specific language.
 */
export interface LanguageSettings {
	path: string;
	args: string;
	fileExtension: string;
	inject: string;
	interactive: boolean;
}


/**
 * Interface that contains all the settings for the extension.
 */
export interface ExecutorSettings {
	lastOpenLanguageTab: LanguageId | undefined
	
	timeout: number;
	allowInput: boolean;
	wslMode: boolean;
	nodePath: string;
	nodeArgs: string;
	jsFileExtension: string;
	jsInject: string;
	tsPath: string;
	tsArgs: string;
	tsInject: string;
	leanPath: string;
	leanArgs: string;
	leanInject: string;
	pythonPath: string;
	pythonArgs: string;
	pythonEmbedPlots: boolean;
	pythonFileExtension: string;
	pythonInject: string;
	batchPath: string;
	batchArgs: string;
	batchFileExtension: string;
	batchInject: string;
	maxPrologAnswers: number;
	prologInject: string;
	powershellPath: string;
	powershellArgs: string;
	powershellFileExtension: string;
	powershellInject: string;
	powershellEncoding: BufferEncoding;
	cargoPath: string;
	cargoEvalArgs: string;
	rustInject: string;
	cppRunner: string;
	cppFileExtension: string;
	cppInject: string;
	cppArgs: string;
	cppUseMain: boolean;
	clingPath: string;
	clingArgs: string;
	clingStd: string;
	rustFileExtension: string,
	RPath: string;
	RArgs: string;
	REmbedPlots: boolean;
	RFileExtension: string;
	rInject: string;
	runghcPath: string;
	ghcPath: string;
	ghciPath: string;
	haskellInject: string;
	useGhci: boolean;
	cArgs: string;
	cUseMain: boolean;
	cInject: string;

	jsInteractive: boolean;
	tsInteractive: boolean;
	leanInteractive: boolean;
	pythonInteractive: boolean;
	cppInteractive: boolean;
	prologInteractive: boolean;
	batchInteractive: boolean;
	bashInteractive: boolean;
	rInteractive: boolean;
	rustInteractive: boolean;
	powershellInteractive: boolean;
	mathematicaInteractive: boolean;
	haskellInteractive: boolean;
	cInteractive: boolean;
	shell: LanguageSettings;
	lua: LanguageSettings;
	dart: LanguageSettings;
	groovy: LanguageSettings;
	golang: LanguageSettings;
	java: LanguageSettings;
	sql: LanguageSettings;
	kotlin: LanguageSettings;
	mathematica: LanguageSettings;
	scala: LanguageSettings;
	fsharp: LanguageSettings;
	racket: LanguageSettings;
	cs: LanguageSettings;
	ruby: LanguageSettings;
	octave: LanguageSettings;
	maxima: LanguageSettings;
}

const DEFAULT_LANGUAGE_SETTINGS: LanguageSettings = {
	path: "",
	args: "",
	fileExtension: "",
	inject: "",
	interactive: false,
}

/**
 * The default settings for the extensions as implementation of the ExecutorSettings interface.
 */
export const DEFAULT_SETTINGS: ExecutorSettings = {
	lastOpenLanguageTab: undefined,
	
	timeout: 10000,
	allowInput: true,
	wslMode: false,
	nodePath: "node",
	nodeArgs: "",
	jsFileExtension: "js",
	jsInject: "",
	tsPath: "ts-node",
	tsArgs: "",
	tsInject: "",
	leanPath: "lean",
	leanArgs: "",
	leanInject: "",
	pythonPath: "python",
	pythonArgs: "",
	pythonEmbedPlots: true,
	pythonFileExtension: "py",
	pythonInject: "",
	batchPath: "call",
	batchArgs: "",
	batchFileExtension: "bat",
	batchInject: "",
	maxPrologAnswers: 15,
	prologInject: "",
	powershellPath: "powershell",
	powershellArgs: "-file",
	powershellFileExtension: "ps1",
	powershellInject: "$OutputEncoding = [console]::InputEncoding = [console]::OutputEncoding = New-Object System.Text.UTF8Encoding",
	powershellEncoding: "latin1",
	cargoPath: "cargo",
	cargoEvalArgs: "",
	rustInject: "",
	cppRunner: "cling",
	cppFileExtension: "cpp",
	cppInject: "",
	cppArgs: "",
	cppUseMain: false,
	clingPath: "cling",
	clingArgs: "",
	clingStd: "c++17",
	rustFileExtension: "rs",
	RPath: "Rscript",
	RArgs: "",
	REmbedPlots: true,
	RFileExtension: "R",
	rInject: "",
	runghcPath: "runghc",
	ghcPath: "ghc",
	ghciPath: "ghci",
	useGhci: false,
	haskellInject: "",
	cArgs: "",
	cUseMain: true,
	cInject: "",
	jsInteractive: true,
	tsInteractive: false,
	leanInteractive: false,
	pythonInteractive: true,
	cppInteractive: false,
	prologInteractive: false,
	batchInteractive: false,
	bashInteractive: false,
	rInteractive: false,
	rustInteractive: false,
	powershellInteractive: false,
	haskellInteractive: false,
	cInteractive: false,
	shell: {
		...DEFAULT_LANGUAGE_SETTINGS,
		path: "bash",
		fileExtension: "sh",
	},
	lua: {
		...DEFAULT_LANGUAGE_SETTINGS,
		path: "lua",
		fileExtension: "lua",
	},
	dart: {
		...DEFAULT_LANGUAGE_SETTINGS,
		path: "dart",
		fileExtension: "dart",
	},
	groovy: {
		...DEFAULT_LANGUAGE_SETTINGS,
		path: "groovy",
		fileExtension: "groovy",
	},
	golang: {
		...DEFAULT_LANGUAGE_SETTINGS,
		path: "go",
		args: "run",
		fileExtension: "go",
	},
	java: {
		...DEFAULT_LANGUAGE_SETTINGS,
		path: "java",
		args: "-ea",
		fileExtension: "java",
	},
	sql: {
		...DEFAULT_LANGUAGE_SETTINGS,
		path: "psql",
		args: "-d <database> -U <user> -f",
		fileExtension: "sql",
	},
	kotlin: {
		...DEFAULT_LANGUAGE_SETTINGS,
		path: "kotlinc",
		args: "-script",
		fileExtension: "kts",
	},
	mathematica: {
		...DEFAULT_LANGUAGE_SETTINGS,
		path: "wolframscript",
		args: "-file",
		fileExtension: "wls",
	},
	scala: {
		...DEFAULT_LANGUAGE_SETTINGS,
		path: "scala",
		fileExtension: "scala",
	},
	fsharp: {
		...DEFAULT_LANGUAGE_SETTINGS,
		path: "dotnet",
		fileExtension: "fsx",
	},
	racket: {
		...DEFAULT_LANGUAGE_SETTINGS,
		path: "racket",
		fileExtension: "rkt",
		inject: "#lang racket",
	},
	cs: {
		...DEFAULT_LANGUAGE_SETTINGS,
		path: "dotnet-script",
		fileExtension: "csx",
	},
	ruby: {
		...DEFAULT_LANGUAGE_SETTINGS,
		path: "ruby",
		fileExtension: "rb",
	},
	octave: {
		...DEFAULT_LANGUAGE_SETTINGS,
		path: "octave",
		args: "-q",
		fileExtension: "m",
		inject: "figure('visible','off')  # Necessary to embed plots",
	},
	maxima: {
		...DEFAULT_LANGUAGE_SETTINGS,
		path: "maxima",
		args: "-qb",
		fileExtension: "mx",
	}
}
