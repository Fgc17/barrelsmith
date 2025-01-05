export type TypeDeclaration =
  | "type"
  | "interface"
  | "enum"
  | "namespace"
  | "class"
  | "abstract"
  | "declare";

export type ValueDeclaration = "function" | "const" | "let" | "var" | "class";

export type ExportDeclaration = "named" | TypeDeclaration | ValueDeclaration;

export const typeDeclarations = [
  "type",
  "interface",
  "enum",
  "namespace",
  "class",
  "abstract",
  "declare",
];

export const valueDeclarations = ["function", "const", "let", "var", "class"];
