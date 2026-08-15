// Allow side-effect imports for CSS
declare module "*.css" {
  const content: any;
  export default content;
}