declare module 'app1/App' {
  /// <reference types="react" />
  export const App: () => JSX.Element;

}
declare module 'app1/bootstrap' {
  export {};

}
declare module 'app1/index' {
  export {};

}
declare module 'app1' {
  import main = require('app1/index');
  export = main;
}