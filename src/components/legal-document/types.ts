export enum LegalDocumentBlockType {
  List = 'list',
  Paragraph = 'paragraph',
}

export interface LegalDocumentParagraph {
  text: string;
  type: LegalDocumentBlockType.Paragraph;
}

export interface LegalDocumentList {
  items: string[];
  type: LegalDocumentBlockType.List;
}

export type LegalDocumentBlock =
  | LegalDocumentList
  | LegalDocumentParagraph;

export interface LegalDocumentSubsection {
  content: LegalDocumentBlock[];
  title: string;
}

export interface LegalDocumentSection {
  content: LegalDocumentBlock[];
  subsections?: LegalDocumentSubsection[];
  title: string;
}
