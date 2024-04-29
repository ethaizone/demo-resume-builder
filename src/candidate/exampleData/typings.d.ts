import type { ResumeType } from "../types";

declare module '*.json' {
  const value: ResumeType;
  export default value;
}
