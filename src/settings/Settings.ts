import {LanguageId} from "src/main";

/**
 * Interface that contains all the settings for a specific language.
 */
export interface LanguageSettings {
	path: string;
	args?: string;
	fileExtension?: string;
	inject?: string;
	interactive?: boolean;
	embedPlot?: boolean;
	useMain?: boolean;
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
	pythonEmbedPlots: boolean;
	maxPrologAnswers: number;
	powershellEncoding: BufferEncoding;
	cppRunner: string;
	cppUseMain: boolean;
	clingPath: string;
	clingArgs: string;
	clingStd: string;
	REmbedPlots: boolean;
	runghcPath: string;
	ghcPath: string;
	ghciPath: string;
	useGhci: boolean;
	cArgs: string;
	cUseMain: boolean;

	c: LanguageSettings;
	haskell: LanguageSettings;
	js: LanguageSettings;
	rust: LanguageSettings;
	prolog: LanguageSettings;
	cpp: LanguageSettings;
	R: LanguageSettings;
	ts: LanguageSettings;
	python: LanguageSettings;
	powershell: LanguageSettings;
	lean: LanguageSettings;
	batch: LanguageSettings;
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

/**
 * The default settings for the extensions as implementation of the ExecutorSettings interface.
 */

export const DEFAULT_SETTINGS: ExecutorSettings = {
	lastOpenLanguageTab: undefined,
	timeout: 10000,
	allowInput: true,
	wslMode: false,

	pythonEmbedPlots: true,
	REmbedPlots: true,
	
	maxPrologAnswers: 15,
	
	powershellEncoding: "latin1",
	
	cppRunner: "cling",
	cppUseMain: false,
	clingPath: "cling",
	clingArgs: "",
	clingStd: "c++17",

	cUseMain: true,

	runghcPath: "runghc",
	ghcPath: "ghc",
	ghciPath: "ghci",
	useGhci: false,
	

	c: {
		path: "cling",
		useMain: true
	},
	haskell: {
		path: "runghc"
	},
	js: {
		path: "node",
		interactive: true
	},
	rust: {
		path: "cargo", fileExtension: "rs"
	},
	prolog: {
		path: ""
	},
	cpp: {
		path: "cling",
		useMain: true
	},
	R: {
		path: "Rscript",
		embedPlot: true,
	},
	ts: {
		path: "ts-node"
	},
	python: {
		path: "python", 
		fileExtension: "py",
		interactive: true
	},
	powershell: {
		path: "powershell", 
		args: "-file", 
		fileExtension: "ps1", 
		inject: "$OutputEncoding = [console]::InputEncoding = [console]::OutputEncoding = New-Object System.Text.UTF8Encoding"
	},
	lean: {
		path: "lean"
	},
	batch: {
		path: "call", 
		fileExtension: "bat"
	},
	shell: {
		path: "bash", 
		fileExtension: "sh"},
	lua: {
		path: "lua"
	},
	dart: {
		path: "dart"
	},
	groovy: {
		path: "groovy"
	},
	golang: {
		path: "go", 
		args: "run", 
		fileExtension: "go"
	},
	java: {
		path: "java", 
		args: "-ea"
	},
	sql: {
		path: "psql", 
		args: "-d <database> -U <user> -f"
	},
	kotlin: {
		path: "kotlinc", 
		args: "-script", 
		fileExtension: "kts"
	},
	mathematica: {
		path: "wolframscript", 
		args: "-file", 
		fileExtension: "wls"
	},
	scala: {
		path: "scala"
	},
	fsharp: {
		path: "dotnet", 
		fileExtension: "fsx"
	},
	racket: {
		path: "racket", 
		fileExtension: "rkt",
		inject: "#lang racket"
	},
	cs: {
		path: "dotnet-script", 
		fileExtension: "csx"
	},
	ruby: {
		path: "ruby", 
		fileExtension: "rb"
	},
	octave: {
		path: "octave", 
		args: "-q", 
		fileExtension: "m", 
		inject: "figure('visible','off')  # Necessary to embed plots"
	},
	maxima: {
		path: "maxima", 
		args: "-qb", 
		fileExtension: "mx"}
}
const DEFAULT_LANGUAGE_SETTINGS: LanguageSettings = {
	path: "",
	args: "",
	fileExtension: "",
	inject: "",
	interactive: false,
}
