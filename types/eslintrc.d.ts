declare module "@eslint/eslintrc" {
  export const __esModule: boolean;
  export type Ignore = ReturnType<typeof ignore.default>;
  export type ConfigData = any;
  export type GlobalConf = any;
  export type SeverityConf = any;
  export type DependentParser = any;
  export type DependentPlugin = any;
  export type Pattern = {
    /**
     * The positive matchers.
     */
    includes: InstanceType<any>[] | null;
    /**
     * The negative matchers.
     */
    excludes: InstanceType<any>[] | null;
  };
  export type Environment = any;
  export type RuleConf = any;
  export type Rule = any;
  export type Plugin = any;
  export type Processor = any;
  export type ConfigArrayElement = {
    /**
     * The name of this config element.
     */
    name: string;
    /**
     * The path to the source file of this config element.
     */
    filePath: string;
    /**
     * The tester for the `files` and `excludedFiles` of this config element.
     */
    criteria: InstanceType<typeof OverrideTester> | null;
    /**
     * The environment settings.
     */
    env: Record<string, boolean> | undefined;
    /**
     * The global variable settings.
     */
    globals: Record<string, GlobalConf> | undefined;
    /**
     * The ignore patterns.
     */
    ignorePattern: IgnorePattern | undefined;
    /**
     * The flag that disables directive comments.
     */
    noInlineConfig: boolean | undefined;
    /**
     * The parser loader.
     */
    parser: DependentParser | undefined;
    /**
     * The parser options.
     */
    parserOptions: any | undefined;
    /**
     * The plugin loaders.
     */
    plugins: Record<string, DependentPlugin> | undefined;
    /**
     * The processor name to refer plugin's processor.
     */
    processor: string | undefined;
    /**
     * The flag to report unused `eslint-disable` comments.
     */
    reportUnusedDisableDirectives: boolean | undefined;
    /**
     * The flag to express root.
     */
    root: boolean | undefined;
    /**
     * The rule settings
     */
    rules: Record<string, RuleConf> | undefined;
    /**
     * The shared settings.
     */
    settings: any | undefined;
    /**
     * The element type.
     */
    type: "config" | "ignore" | "implicit-processor";
  };
  export type ConfigArrayInternalSlots = {
    /**
     * The cache to extract configs.
     */
    cache: Map<string, ExtractedConfig>;
    /**
     * The map from environment ID to environment definition.
     */
    envMap: ReadonlyMap<string, Environment> | null;
    /**
     * The map from processor ID to environment definition.
     */
    processorMap: ReadonlyMap<string, Processor> | null;
    /**
     * The map from rule ID to rule definition.
     */
    ruleMap: ReadonlyMap<string, Rule> | null;
  };
  export type OverrideConfigData = any;
  export type Parser = any;
  export type ConfigArrayFactoryOptions = {
    /**
     * The map for additional plugins.
     */
    additionalPluginPool?: Map<string, Plugin>;
    /**
     * The path to the current working directory.
     */
    cwd?: string;
    /**
     * A path to the directory that plugins should be resolved from. Defaults to `cwd`.
     */
    resolvePluginsRelativeTo?: string;
    /**
     * The rules that are built in to ESLint.
     */
    builtInRules?: Map<string, Rule>;
    /**
     * The module resolver object.
     */
    resolver?: any;
    /**
     * The path to the definitions for eslint:all.
     */
    eslintAllPath?: string;
    /**
     * Returns the config data for eslint:all.
     */
    getEslintAllConfig?: Function;
    /**
     * The path to the definitions for eslint:recommended.
     */
    eslintRecommendedPath?: string;
    /**
     * Returns the config data for eslint:recommended.
     */
    getEslintRecommendedConfig?: Function;
  };
  export type ConfigArrayFactoryInternalSlots = {
    /**
     * The map for additional plugins.
     */
    additionalPluginPool: Map<string, Plugin>;
    /**
     * The path to the current working directory.
     */
    cwd: string;
    /**
     * An absolute path the the directory that plugins should be resolved from.
     */
    resolvePluginsRelativeTo: string | undefined;
    /**
     * The rules that are built in to ESLint.
     */
    builtInRules: Map<string, Rule>;
    /**
     * The module resolver object.
     */
    resolver?: any;
    /**
     * The path to the definitions for eslint:all.
     */
    eslintAllPath: string;
    /**
     * Returns the config data for eslint:all.
     */
    getEslintAllConfig: Function;
    /**
     * The path to the definitions for eslint:recommended.
     */
    eslintRecommendedPath: string;
    /**
     * Returns the config data for eslint:recommended.
     */
    getEslintRecommendedConfig: Function;
  };
  export type ConfigArrayFactoryLoadingContext = {
    /**
     * The path to the current configuration.
     */
    filePath: string;
    /**
     * The base path to resolve relative paths in `overrides[].files`, `overrides[].excludedFiles`, and `ignorePatterns`.
     */
    matchBasePath: string;
    /**
     * The name of the current configuration.
     */
    name: string;
    /**
     * The base path to resolve plugins.
     */
    pluginBasePath: string;
    /**
     * The type of the current configuration. This is `"config"` in normal. This is `"ignore"` if it came from `.eslintignore`. This is `"implicit-processor"` if it came from legacy file-extension processors.
     */
    type: "config" | "ignore" | "implicit-processor";
  };

  export type CascadingConfigArrayFactoryOptions = {
    /**
     * The map for additional plugins.
     */
    additionalPluginPool?: Map<string, Plugin>;
    /**
     * The config by `baseConfig` option.
     */
    baseConfig?: any;
    /**
     * The config by CLI options (`--env`, `--global`, `--ignore-pattern`, `--parser`, `--parser-options`, `--plugin`, and `--rule`). CLI options overwrite the setting in config files.
     */
    cliConfig?: any;
    /**
     * The base directory to start lookup.
     */
    cwd?: string;
    /**
     * The path to the alternative file of `.eslintignore`.
     */
    ignorePath?: string;
    /**
     * The value of `--rulesdir` option.
     */
    rulePaths?: string[];
    /**
     * The value of `--config` option.
     */
    specificConfigPath?: string;
    /**
     * if `false` then it doesn't load config files.
     */
    useEslintrc?: boolean;
    /**
     * The function to use to load rules.
     */
    loadRules: Function;
    /**
     * The rules that are built in to ESLint.
     */
    builtInRules: Map<string, Rule>;
    /**
     * The module resolver object.
     */
    resolver?: any;
    /**
     * The path to the definitions for eslint:all.
     */
    eslintAllPath: string;
    /**
     * Returns the config data for eslint:all.
     */
    getEslintAllConfig: Function;
    /**
     * The path to the definitions for eslint:recommended.
     */
    eslintRecommendedPath: string;
    /**
     * Returns the config data for eslint:recommended.
     */
    getEslintRecommendedConfig: Function;
    resolvePluginsRelativeTo: string;
  };
  export type CascadingConfigArrayFactoryInternalSlots = {
    /**
     * The config array of `baseConfig` option.
     */
    baseConfigArray: ConfigArray;
    /**
     * The config data of `baseConfig` option. This is used to reset `baseConfigArray`.
     */
    baseConfigData: any;
    /**
     * The config array of CLI options.
     */
    cliConfigArray: ConfigArray;
    /**
     * The config data of CLI options. This is used to reset `cliConfigArray`.
     */
    cliConfigData: any;
    /**
     * The factory for config arrays.
     */
    configArrayFactory: ConfigArrayFactory;
    /**
     * The cache from directory paths to config arrays.
     */
    configCache: Map<string, ConfigArray>;
    /**
     * The base directory to start lookup.
     */
    cwd: string;
    /**
     * The cache from config arrays to finalized config arrays.
     */
    finalizeCache: WeakMap<ConfigArray, ConfigArray>;
    /**
     * The path to the alternative file of `.eslintignore`.
     */
    ignorePath?: string;
    /**
     * The value of `--rulesdir` option. This is used to reset `baseConfigArray`.
     */
    rulePaths: string[] | null;
    /**
     * The value of `--config` option. This is used to reset `cliConfigArray`.
     */
    specificConfigPath: string | null;
    /**
     * if `false` then it doesn't load config files.
     */
    useEslintrc: boolean;
    /**
     * The function to use to load rules.
     */
    loadRules: Function;
    /**
     * The rules that are built in to ESLint.
     */
    builtInRules: Map<string, Rule>;
    /**
     * The module resolver object.
     */
    resolver?: any;
    /**
     * The path to the definitions for eslint:all.
     */
    eslintAllPath: string;
    /**
     * Returns the config data for eslint:all.
     */
    getEslintAllConfig: Function;
    /**
     * The path to the definitions for eslint:recommended.
     */
    eslintRecommendedPath: string;
    /**
     * Returns the config data for eslint:recommended.
     */
    getEslintRecommendedConfig: Function;
  };
  /**
   * A compatibility class for working with configs.
   */
  export class FlatCompat {
    constructor({
      baseDirectory,
      resolvePluginsRelativeTo,
    }?: {
      baseDirectory?: string;
      resolvePluginsRelativeTo?: any;
    });
    baseDirectory: any;
    resolvePluginsRelativeTo: any;
    /**
     * Translates an ESLintRC-style config into a flag-config-style config.
     * @param {Object} eslintrcConfig The ESLintRC-style config object.
     * @returns {Object} A flag-config-style config object.
     */
    config(eslintrcConfig: any): any;
    /**
     * Translates the `env` section of an ESLintRC-style config.
     * @param {Object} envConfig The `env` section of an ESLintRC config.
     * @returns {Object[]} An array of flag-config objects representing the environments.
     */
    env(envConfig: any): any[];
    /**
     * Translates the `extends` section of an ESLintRC-style config.
     * @param {...string} configsToExtend The names of the configs to load.
     * @returns {Object[]} An array of flag-config objects representing the config.
     */
    extends(...configsToExtend: string[]): any[];
    /**
     * Translates the `plugins` section of an ESLintRC-style config.
     * @param {...string} plugins The names of the plugins to load.
     * @returns {Object[]} An array of flag-config objects representing the plugins.
     */
    plugins(...plugins: string[]): any[];
    [cafactory]: ConfigArrayFactory;
  }
  export namespace Legacy {
    export { ConfigArray };
    export { createContext as createConfigArrayFactoryContext };
    export { CascadingConfigArrayFactory };
    export { ConfigArrayFactory };
    export { ConfigDependency };
    export { ExtractedConfig };
    export { IgnorePattern };
    export { OverrideTester };
    export { getUsedExtractedConfigs };
    export { environments };
    export { ConfigOps };
    export { ConfigValidator };
    export { ModuleResolver };
    export { naming };
  }
  import ignore = require("ignore");
  /**
   * The class to test given paths are matched by the patterns.
   */
  export class OverrideTester {
    /**
     * Create a tester with given criteria.
     * If there are no criteria, returns `null`.
     * @param {string|string[]} files The glob patterns for included files.
     * @param {string|string[]} excludedFiles The glob patterns for excluded files.
     * @param {string} basePath The path to the base directory to test paths.
     * @returns {OverrideTester|null} The created instance or `null`.
     */
    static create(
      files: string | string[],
      excludedFiles: string | string[],
      basePath: string
    ): OverrideTester | null;
    /**
     * Combine two testers by logical and.
     * If either of the testers was `null`, returns the other tester.
     * The `basePath` property of the two must be the same value.
     * @param {OverrideTester|null} a A tester.
     * @param {OverrideTester|null} b Another tester.
     * @returns {OverrideTester|null} Combined tester.
     */
    static and(
      a: OverrideTester | null,
      b: OverrideTester | null
    ): OverrideTester | null;
    /**
     * Initialize this instance.
     * @param {Pattern[]} patterns The matchers.
     * @param {string} basePath The base path.
     * @param {boolean} endsWithWildcard If `true` then a pattern ends with `*`.
     */
    constructor(
      patterns: Pattern[],
      basePath: string,
      endsWithWildcard?: boolean
    );
    /** @type {Pattern[]} */
    patterns: Pattern[];
    /** @type {string} */
    basePath: string;
    /** @type {boolean} */
    endsWithWildcard: boolean;
    /**
     * Test if a given path is matched or not.
     * @param {string} filePath The absolute path to the target file.
     * @returns {boolean} `true` if the path was matched.
     */
    test(filePath: string): boolean;
    /**
     * @returns {Object} a JSON compatible object.
     */
    toJSON(): any;
  }
  class IgnorePattern {
    /**
     * The default patterns.
     * @type {string[]}
     */
    static get DefaultPatterns(): string[];
    /**
     * Create the default predicate function.
     * @param {string} cwd The current working directory.
     * @returns {((filePath:string, dot:boolean) => boolean) & {basePath:string; patterns:string[]}}
     * The preficate function.
     * The first argument is an absolute path that is checked.
     * The second argument is the flag to not ignore dotfiles.
     * If the predicate function returned `true`, it means the path should be ignored.
     */
    static createDefaultIgnore(cwd: string): ((
      filePath: string,
      dot: boolean
    ) => boolean) & {
      basePath: string;
      patterns: string[];
    };
    /**
     * Create the predicate function from multiple `IgnorePattern` objects.
     * @param {IgnorePattern[]} ignorePatterns The list of ignore patterns.
     * @returns {((filePath:string, dot?:boolean) => boolean) & {basePath:string; patterns:string[]}}
     * The preficate function.
     * The first argument is an absolute path that is checked.
     * The second argument is the flag to not ignore dotfiles.
     * If the predicate function returned `true`, it means the path should be ignored.
     */
    static createIgnore(ignorePatterns: IgnorePattern[]): ((
      filePath: string,
      dot?: boolean
    ) => boolean) & {
      basePath: string;
      patterns: string[];
    };
    /**
     * Initialize a new `IgnorePattern` instance.
     * @param {string[]} patterns The glob patterns that ignore to lint.
     * @param {string} basePath The base path of `patterns`.
     */
    constructor(patterns: string[], basePath: string);
    /**
     * The glob patterns that ignore to lint.
     * @type {string[]}
     */
    patterns: string[];
    /**
     * The base path of `patterns`.
     * @type {string}
     */
    basePath: string;
    /**
     * If `true` then patterns which don't start with `/` will match the paths to the outside of `basePath`. Defaults to `false`.
     *
     * It's set `true` for `.eslintignore`, `package.json`, and `--ignore-path` for backward compatibility.
     * It's `false` as-is for `ignorePatterns` property in config files.
     * @type {boolean}
     */
    loose: boolean;
    /**
     * Get `patterns` as modified for a given base path. It modifies the
     * absolute paths in the patterns as prepending the difference of two base
     * paths.
     * @param {string} newBasePath The base path.
     * @returns {string[]} Modifired patterns.
     */
    getPatternsRelativeTo(newBasePath: string): string[];
  }
  /**
   * The class for extracted config data.
   */
  class ExtractedConfig {
    /**
     * The config name what `noInlineConfig` setting came from.
     * @type {string}
     */
    configNameOfNoInlineConfig: string;
    /**
     * Environments.
     * @type {Record<string, boolean>}
     */
    env: Record<string, boolean>;
    /**
     * Global variables.
     * @type {Record<string, GlobalConf>}
     */
    globals: Record<string, GlobalConf>;
    /**
     * Parser definition.
     * @type {DependentParser|null}
     */
    parser: DependentParser | null;
    /**
     * Options for the parser.
     * @type {Object}
     */
    parserOptions: any;
    /**
     * Plugin definitions.
     * @type {Record<string, DependentPlugin>}
     */
    plugins: Record<string, DependentPlugin>;
    /**
     * Processor ID.
     * @type {string|null}
     */
    processor: string | null;
    /**
     * Rule settings.
     * @type {Record<string, [SeverityConf, ...any[]]>}
     */
    rules: Record<string, [SeverityConf, ...any[]]>;
    /**
     * Shared settings.
     * @type {Object}
     */
    settings: any;
    /**
     * Convert this config to the compatible object as a config file content.
     * @returns {ConfigData} The converted object.
     */
    toCompatibleObjectAsConfigFileContent(): any;
  }
  /**
   * The factory of `ConfigArray` objects.
   */
  class ConfigArrayFactory {
    /**
     * Check if a config file on a given directory exists or not.
     * @param {string} directoryPath The path to a directory.
     * @returns {string | null} The path to the found config file. If not found then null.
     */
    static getPathToConfigFileInDirectory(directoryPath: string): string | null;
    /**
     * Initialize this instance.
     * @param {ConfigArrayFactoryOptions} [options] The map for additional plugins.
     */
    constructor({
      additionalPluginPool,
      cwd,
      resolvePluginsRelativeTo,
      builtInRules,
      resolver,
      eslintAllPath,
      getEslintAllConfig,
      eslintRecommendedPath,
      getEslintRecommendedConfig,
    }?: ConfigArrayFactoryOptions);
    /**
     * Create `ConfigArray` instance from a config data.
     * @param {ConfigData|null} configData The config data to create.
     * @param {Object} [options] The options.
     * @param {string} [options.basePath] The base path to resolve relative paths in `overrides[].files`, `overrides[].excludedFiles`, and `ignorePatterns`.
     * @param {string} [options.filePath] The path to this config data.
     * @param {string} [options.name] The config name.
     * @returns {ConfigArray} Loaded config.
     */
    create(
      configData: ConfigData | null,
      {
        basePath,
        filePath,
        name,
      }?: {
        basePath?: string;
        filePath?: string;
        name?: string;
      }
    ): ConfigArray;
    /**
     * Load a config file.
     * @param {string} filePath The path to a config file.
     * @param {Object} [options] The options.
     * @param {string} [options.basePath] The base path to resolve relative paths in `overrides[].files`, `overrides[].excludedFiles`, and `ignorePatterns`.
     * @param {string} [options.name] The config name.
     * @returns {ConfigArray} Loaded config.
     */
    loadFile(
      filePath: string,
      {
        basePath,
        name,
      }?: {
        basePath?: string;
        name?: string;
      }
    ): ConfigArray;
    /**
     * Load the config file on a given directory if exists.
     * @param {string} directoryPath The path to a directory.
     * @param {Object} [options] The options.
     * @param {string} [options.basePath] The base path to resolve relative paths in `overrides[].files`, `overrides[].excludedFiles`, and `ignorePatterns`.
     * @param {string} [options.name] The config name.
     * @returns {ConfigArray} Loaded config. An empty `ConfigArray` if any config doesn't exist.
     */
    loadInDirectory(
      directoryPath: string,
      {
        basePath,
        name,
      }?: {
        basePath?: string;
        name?: string;
      }
    ): ConfigArray;
    /**
     * Load `.eslintignore` file.
     * @param {string} filePath The path to a `.eslintignore` file to load.
     * @returns {ConfigArray} Loaded config. An empty `ConfigArray` if any config doesn't exist.
     */
    loadESLintIgnore(filePath: string): ConfigArray;
    /**
     * Load `.eslintignore` file in the current working directory.
     * @returns {ConfigArray} Loaded config. An empty `ConfigArray` if any config doesn't exist.
     */
    loadDefaultESLintIgnore(): ConfigArray;
    /**
     * Load a given config file.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} Loaded config.
     * @private
     */
    private _loadConfigData;
    /**
     * Normalize a given `.eslintignore` data to config array elements.
     * @param {string[]} ignorePatterns The patterns to ignore files.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The normalized config.
     * @private
     */
    private _normalizeESLintIgnoreData;
    /**
     * Normalize a given config to an array.
     * @param {ConfigData} configData The config data to normalize.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The normalized config.
     * @private
     */
    private _normalizeConfigData;
    /**
     * Normalize a given config to an array.
     * @param {ConfigData|OverrideConfigData} configData The config data to normalize.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The normalized config.
     * @private
     */
    private _normalizeObjectConfigData;
    /**
     * Normalize a given config to an array.
     * @param {ConfigData} configData The config data to normalize.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The normalized config.
     * @private
     */
    private _normalizeObjectConfigDataBody;
    /**
     * Load configs of an element in `extends`.
     * @param {string} extendName The name of a base config.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The normalized config.
     * @private
     */
    private _loadExtends;
    /**
     * Load configs of an element in `extends`.
     * @param {string} extendName The name of a base config.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The normalized config.
     * @private
     */
    private _loadExtendedBuiltInConfig;
    /**
     * Load configs of an element in `extends`.
     * @param {string} extendName The name of a base config.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The normalized config.
     * @private
     */
    private _loadExtendedPluginConfig;
    /**
     * Load configs of an element in `extends`.
     * @param {string} extendName The name of a base config.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The normalized config.
     * @private
     */
    private _loadExtendedShareableConfig;
    /**
     * Load given plugins.
     * @param {string[]} names The plugin names to load.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {Record<string,DependentPlugin>} The loaded parser.
     * @private
     */
    private _loadPlugins;
    /**
     * Load a given parser.
     * @param {string} nameOrPath The package name or the path to a parser file.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {DependentParser} The loaded parser.
     */
    _loadParser(nameOrPath: string, ctx: ConfigArrayFactoryLoadingContext): any;
    /**
     * Load a given plugin.
     * @param {string} name The plugin name to load.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {DependentPlugin} The loaded plugin.
     * @private
     */
    private _loadPlugin;
    /**
     * Take file expression processors as config array elements.
     * @param {Record<string,DependentPlugin>} plugins The plugin definitions.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The config array elements of file expression processors.
     * @private
     */
    private _takeFileExtensionProcessors;
  }
  /**
   * The Config Array.
   *
   * `ConfigArray` instance contains all settings, parsers, and plugins.
   * You need to call `ConfigArray#extractConfig(filePath)` method in order to
   * extract, merge and get only the config data which is related to an arbitrary
   * file.
   * @extends {Array<ConfigArrayElement>}
   */
  class ConfigArray extends Array<ConfigArrayElement> {
    constructor(arrayLength?: number);
    constructor(arrayLength: number);
    constructor(...items: ConfigArrayElement[]);
    /**
     * Get the plugin environments.
     * The returned map cannot be mutated.
     * @type {ReadonlyMap<string, Environment>} The plugin environments.
     */
    get pluginEnvironments(): ReadonlyMap<string, any>;
    /**
     * Get the plugin processors.
     * The returned map cannot be mutated.
     * @type {ReadonlyMap<string, Processor>} The plugin processors.
     */
    get pluginProcessors(): ReadonlyMap<string, any>;
    /**
     * Get the plugin rules.
     * The returned map cannot be mutated.
     * @returns {ReadonlyMap<string, Rule>} The plugin rules.
     */
    get pluginRules(): ReadonlyMap<string, any>;
    /**
     * Check if this config has `root` flag.
     * @returns {boolean} `true` if this config array is root.
     */
    isRoot(): boolean;
    /**
     * Extract the config data which is related to a given file.
     * @param {string} filePath The absolute path to the target file.
     * @returns {ExtractedConfig} The extracted config data.
     */
    extractConfig(filePath: string): ExtractedConfig;
    /**
     * Check if a given path is an additional lint target.
     * @param {string} filePath The absolute path to the target file.
     * @returns {boolean} `true` if the file is an additional lint target.
     */
    isAdditionalTargetPath(filePath: string): boolean;
  }
  const cafactory: unique symbol;
  /**
   * Create a new context with default values.
   * @param {ConfigArrayFactoryInternalSlots} slots The internal slots.
   * @param {"config" | "ignore" | "implicit-processor" | undefined} providedType The type of the current configuration. Default is `"config"`.
   * @param {string | undefined} providedName The name of the current configuration. Default is the relative path from `cwd` to `filePath`.
   * @param {string | undefined} providedFilePath The path to the current configuration. Default is empty string.
   * @param {string | undefined} providedMatchBasePath The type of the current configuration. Default is the directory of `filePath` or `cwd`.
   * @returns {ConfigArrayFactoryLoadingContext} The created context.
   */
  function createContext(
    { cwd, resolvePluginsRelativeTo }: ConfigArrayFactoryInternalSlots,
    providedType: "config" | "ignore" | "implicit-processor" | undefined,
    providedName: string | undefined,
    providedFilePath: string | undefined,
    providedMatchBasePath: string | undefined
  ): ConfigArrayFactoryLoadingContext;
  /**
   * This class provides the functionality that enumerates every file which is
   * matched by given glob patterns and that configuration.
   */
  class CascadingConfigArrayFactory {
    /**
     * Initialize this enumerator.
     * @param {CascadingConfigArrayFactoryOptions} options The options.
     */
    constructor({
      additionalPluginPool,
      baseConfig: baseConfigData,
      cliConfig: cliConfigData,
      cwd,
      ignorePath,
      resolvePluginsRelativeTo,
      rulePaths,
      specificConfigPath,
      useEslintrc,
      builtInRules,
      loadRules,
      resolver,
      eslintRecommendedPath,
      getEslintRecommendedConfig,
      eslintAllPath,
      getEslintAllConfig,
    }?: CascadingConfigArrayFactoryOptions);
    /**
     * The path to the current working directory.
     * This is used by tests.
     * @type {string}
     */
    get cwd(): string;
    /**
     * Get the config array of a given file.
     * If `filePath` was not given, it returns the config which contains only
     * `baseConfigData` and `cliConfigData`.
     * @param {string} [filePath] The file path to a file.
     * @param {Object} [options] The options.
     * @param {boolean} [options.ignoreNotFoundError] If `true` then it doesn't throw `ConfigurationNotFoundError`.
     * @returns {ConfigArray} The config array of the file.
     */
    getConfigArrayForFile(
      filePath?: string,
      {
        ignoreNotFoundError,
      }?: {
        ignoreNotFoundError?: boolean;
      }
    ): ConfigArray;
    /**
     * Set the config data to override all configs.
     * Require to call `clearCache()` method after this method is called.
     * @param {ConfigData} configData The config data to override all configs.
     * @returns {void}
     */
    setOverrideConfig(configData: any): void;
    /**
     * Clear config cache.
     * @returns {void}
     */
    clearCache(): void;
    /**
     * Load and normalize config files from the ancestor directories.
     * @param {string} directoryPath The path to a leaf directory.
     * @param {boolean} configsExistInSubdirs `true` if configurations exist in subdirectories.
     * @returns {ConfigArray} The loaded config.
     * @private
     */
    private _loadConfigInAncestors;
    /**
     * Freeze and cache a given config.
     * @param {string} directoryPath The path to a directory as a cache key.
     * @param {ConfigArray} configArray The config array as a cache value.
     * @returns {ConfigArray} The `configArray` (frozen).
     */
    _cacheConfig(directoryPath: string, configArray: ConfigArray): ConfigArray;
    /**
     * Finalize a given config array.
     * Concatenate `--config` and other CLI options.
     * @param {ConfigArray} configArray The parent config array.
     * @param {string} directoryPath The path to the leaf directory to find config files.
     * @param {boolean} ignoreNotFoundError If `true` then it doesn't throw `ConfigurationNotFoundError`.
     * @returns {ConfigArray} The loaded config.
     * @private
     */
    private _finalizeConfigArray;
  }
  /**
   * @fileoverview `ConfigDependency` class.
   *
   * `ConfigDependency` class expresses a loaded parser or plugin.
   *
   * If the parser or plugin was loaded successfully, it has `definition` property
   * and `filePath` property. Otherwise, it has `error` property.
   *
   * When `JSON.stringify()` converted a `ConfigDependency` object to a JSON, it
   * omits `definition` property.
   *
   * `ConfigArrayFactory` creates `ConfigDependency` objects when it loads parsers
   * or plugins.
   *
   * @author Toru Nagashima <https://github.com/mysticatea>
   */
  /**
   * The class is to store parsers or plugins.
   * This class hides the loaded object from `JSON.stringify()` and `console.log`.
   * @template T
   */
  class ConfigDependency<T> {
    /**
     * Initialize this instance.
     * @param {Object} data The dependency data.
     * @param {T} [data.definition] The dependency if the loading succeeded.
     * @param {Error} [data.error] The error object if the loading failed.
     * @param {string} [data.filePath] The actual path to the dependency if the loading succeeded.
     * @param {string} data.id The ID of this dependency.
     * @param {string} data.importerName The name of the config file which loads this dependency.
     * @param {string} data.importerPath The path to the config file which loads this dependency.
     */
    constructor({
      definition,
      error,
      filePath,
      id,
      importerName,
      importerPath,
    }: {
      definition?: T;
      error?: Error;
      filePath?: string;
      id: string;
      importerName: string;
      importerPath: string;
    });
    /**
     * The loaded dependency if the loading succeeded.
     * @type {T|null}
     */
    definition: T | null;
    /**
     * The error object if the loading failed.
     * @type {Error|null}
     */
    error: Error | null;
    /**
     * The loaded dependency if the loading succeeded.
     * @type {string|null}
     */
    filePath: string | null;
    /**
     * The ID of this dependency.
     * @type {string}
     */
    id: string;
    /**
     * The name of the config file which loads this dependency.
     * @type {string}
     */
    importerName: string;
    /**
     * The path to the config file which loads this dependency.
     * @type {string}
     */
    importerPath: string;
    /**
     * @returns {Object} a JSON compatible object.
     */
    toJSON(): any;
  }
  /**
   * Get the used extracted configs.
   * CLIEngine will use this method to collect used deprecated rules.
   * @param {ConfigArray} instance The config array object to get.
   * @returns {ExtractedConfig[]} The used extracted configs.
   * @private
   */
  function getUsedExtractedConfigs(instance: ConfigArray): ExtractedConfig[];
  /** @type {Map<string, import("../lib/shared/types").Environment>} */
  var environments: Map<string, any>;
  namespace ConfigOps {
    export const __proto__: any;
    export { getRuleSeverity };
    export { normalizeToStrings };
    export { isErrorSeverity };
    export { isValidSeverity };
    export { isEverySeverityValid };
    export { normalizeConfigGlobal };
  }
  class ConfigValidator {
    constructor({ builtInRules }?: { builtInRules?: Map<any, any> });
    builtInRules: Map<any, any>;
    /**
     * Gets a complete options schema for a rule.
     * @param {{create: Function, schema: (Array|null)}} rule A new-style rule object
     * @returns {Object} JSON Schema for the rule's options.
     */
    getRuleOptionsSchema(rule: { create: Function; schema: any[] | null }): any;
    /**
     * Validates a rule's severity and returns the severity value. Throws an error if the severity is invalid.
     * @param {options} options The given options for the rule.
     * @returns {number|string} The rule's severity value
     */
    validateRuleSeverity(options: any): number | string;
    /**
     * Validates the non-severity options passed to a rule, based on its schema.
     * @param {{create: Function}} rule The rule to validate
     * @param {Array} localOptions The options for the rule, excluding severity
     * @returns {void}
     */
    validateRuleSchema(
      rule: {
        create: Function;
      },
      localOptions: any[]
    ): void;
    /**
     * Validates a rule's options against its schema.
     * @param {{create: Function}|null} rule The rule that the config is being validated for
     * @param {string} ruleId The rule's unique name.
     * @param {Array|number} options The given options for the rule.
     * @param {string|null} source The name of the configuration source to report in any errors. If null or undefined,
     * no source is prepended to the message.
     * @returns {void}
     */
    validateRuleOptions(
      rule: {
        create: Function;
      } | null,
      ruleId: string,
      options: any[] | number,
      source?: string | null
    ): void;
    /**
     * Validates an environment object
     * @param {Object} environment The environment config object to validate.
     * @param {string} source The name of the configuration source to report in any errors.
     * @param {function(envId:string): Object} [getAdditionalEnv] A map from strings to loaded environments.
     * @returns {void}
     */
    validateEnvironment(
      environment: any,
      source: string,
      getAdditionalEnv?: (arg0: string, arg1: string) => any
    ): void;
    /**
     * Validates a rules config object
     * @param {Object} rulesConfig The rules config object to validate.
     * @param {string} source The name of the configuration source to report in any errors.
     * @param {function(ruleId:string): Object} getAdditionalRule A map from strings to loaded rules
     * @returns {void}
     */
    validateRules(
      rulesConfig: any,
      source: string,
      getAdditionalRule?: (arg0: string, arg1: string) => any
    ): void;
    /**
     * Validates a `globals` section of a config file
     * @param {Object} globalsConfig The `globals` section
     * @param {string|null} source The name of the configuration source to report in the event of an error.
     * @returns {void}
     */
    validateGlobals(globalsConfig: any, source?: string | null): void;
    /**
     * Validate `processor` configuration.
     * @param {string|undefined} processorName The processor name.
     * @param {string} source The name of config file.
     * @param {function(id:string): Processor} getProcessor The getter of defined processors.
     * @returns {void}
     */
    validateProcessor(
      processorName: string | undefined,
      source: string,
      getProcessor: (arg0: string, arg1: string) => Processor
    ): void;
    /**
     * Formats an array of schema validation errors.
     * @param {Array} errors An array of error messages to format.
     * @returns {string} Formatted error message
     */
    formatErrors(errors: any[]): string;
    /**
     * Validates the top level properties of the config object.
     * @param {Object} config The config object to validate.
     * @param {string} source The name of the configuration source to report in any errors.
     * @returns {void}
     */
    validateConfigSchema(config: any, source?: string): void;
    /**
     * Validates an entire config object.
     * @param {Object} config The config object to validate.
     * @param {string} source The name of the configuration source to report in any errors.
     * @param {function(ruleId:string): Object} [getAdditionalRule] A map from strings to loaded rules.
     * @param {function(envId:string): Object} [getAdditionalEnv] A map from strings to loaded envs.
     * @returns {void}
     */
    validate(
      config: any,
      source: string,
      getAdditionalRule?: (arg0: string, arg1: string) => any,
      getAdditionalEnv?: (arg0: string, arg1: string) => any
    ): void;
    /**
     * Validate config array object.
     * @param {ConfigArray} configArray The config array to validate.
     * @returns {void}
     */
    validateConfigArray(configArray: ConfigArray): void;
  }
  namespace ModuleResolver {
    const __proto___1: any;
    export { __proto___1 as __proto__ };
    export { resolve };
  }
  namespace naming {
    const __proto___2: any;
    export { __proto___2 as __proto__ };
    export { normalizePackageName };
    export { getShorthandName };
    export { getNamespaceFromTerm };
  }
  /**
   * Normalizes the severity value of a rule's configuration to a number
   * @param {(number|string|[number, ...*]|[string, ...*])} ruleConfig A rule's configuration value, generally
   * received from the user. A valid config value is either 0, 1, 2, the string "off" (treated the same as 0),
   * the string "warn" (treated the same as 1), the string "error" (treated the same as 2), or an array
   * whose first element is one of the above values. Strings are matched case-insensitively.
   * @returns {(0|1|2)} The numeric severity value if the config value was valid, otherwise 0.
   */
  function getRuleSeverity(
    ruleConfig: number | string | [number, ...any] | [string, ...any]
  ): 0 | 1 | 2;
  /**
   * Converts old-style severity settings (0, 1, 2) into new-style
   * severity settings (off, warn, error) for all rules. Assumption is that severity
   * values have already been validated as correct.
   * @param {Object} config The config object to normalize.
   * @returns {void}
   */
  function normalizeToStrings(config: any): void;
  /**
   * Determines if the severity for the given rule configuration represents an error.
   * @param {int|string|Array} ruleConfig The configuration for an individual rule.
   * @returns {boolean} True if the rule represents an error, false if not.
   */
  function isErrorSeverity(ruleConfig: number | string | any[]): boolean;
  /**
   * Checks whether a given config has valid severity or not.
   * @param {number|string|Array} ruleConfig The configuration for an individual rule.
   * @returns {boolean} `true` if the configuration has valid severity.
   */
  function isValidSeverity(ruleConfig: number | string | any[]): boolean;
  /**
   * Checks whether every rule of a given config has valid severity or not.
   * @param {Object} config The configuration for rules.
   * @returns {boolean} `true` if the configuration has valid severity.
   */
  function isEverySeverityValid(config: any): boolean;
  /**
   * Normalizes a value for a global in a config
   * @param {(boolean|string|null)} configuredValue The value given for a global in configuration or in
   * a global directive comment
   * @returns {("readable"|"writeable"|"off")} The value normalized as a string
   * @throws Error if global value is invalid
   */
  function normalizeConfigGlobal(
    configuredValue: boolean | string | null
  ): "readable" | "writeable" | "off";
  /**
   * Resolves a Node module relative to another module
   * @param {string} moduleName The name of a Node module, or a path to a Node module.
   * @param {string} relativeToPath An absolute path indicating the module that `moduleName` should be resolved relative to. This must be
   * a file rather than a directory, but the file need not actually exist.
   * @returns {string} The absolute path that would result from calling `require.resolve(moduleName)` in a file located at `relativeToPath`
   */
  function resolve(moduleName: string, relativeToPath: string): string;
  /**
   * Brings package name to correct format based on prefix
   * @param {string} name The name of the package.
   * @param {string} prefix Can be either "eslint-plugin", "eslint-config" or "eslint-formatter"
   * @returns {string} Normalized name of the package
   * @private
   */
  function normalizePackageName(name: string, prefix: string): string;
  /**
   * Removes the prefix from a fullname.
   * @param {string} fullname The term which may have the prefix.
   * @param {string} prefix The prefix to remove.
   * @returns {string} The term without prefix.
   */
  function getShorthandName(fullname: string, prefix: string): string;
  /**
   * Gets the scope (namespace) of a term.
   * @param {string} term The term which may have the namespace.
   * @returns {string} The namespace of the term if it has one.
   */
  function getNamespaceFromTerm(term: string): string;
  export {};
}
