declare module "*.css" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
declare module "*.mp4" {
  const src: string;
  export default src;
}
declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_EMAILJS_SERVICE_ID: string;
    REACT_APP_EMAILJS_TEMPLATE_ID: string;
    REACT_APP_EMAILJS_USER_ID: string;
  }
} 