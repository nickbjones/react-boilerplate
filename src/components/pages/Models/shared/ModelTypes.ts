export type DateType = `[0-9]{4}-[0-9]{2}-[0-9]{2}`; // "2019-12-20"
export type IndexType = `[0-9]{1,5}`;

export type ModelType = {
  brand: string; // "Tamiya"
  collection: IndexType; // "2"
  collection_text: string; // "JP"
  difficulty_score: '0' | '1' | '2' | '3' | '4' | '5';
  difficulty_score_text: string; // null
  eol_category: string; // null
  era: string; // "6"
  era_text: string; // "WWII"
  finish_date: DateType;
  group: IndexType; // "9"
  group_score: string; // "0"
  group_score_text: string; // null
  group_text: string; // "Me 109s"
  hours: string; // "0"
  id: IndexType; // "2"
  importance_score: string; // "0"
  importance_score_text: string; // null
  interest_score: string; // "0"
  interest_score_text: string; // null
  kit_quality: string; // "5"
  kit_quality_text: string; // "very good"
  name: string; // "Me 109E-4"
  nationality: IndexType; // "3"
  nationality_text: string; // "Germany"
  notes: string; // "repair tail wheel"
  percent: string; // "100"
  photos: string; // "0"
  pr: string; // "21.016438356000002"
  purch_date: DateType;
  scale: '72'; // "72"
  size: IndexType; // "2"
  size_text: string; // "small"
  start_date: DateType;
  status: string; // "Finished"
  step_order: string;
  type: IndexType; // "9"
  type_text: string; // "Fighter"
};

export type ModelsType = ModelType[];
