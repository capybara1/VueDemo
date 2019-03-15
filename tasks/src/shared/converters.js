import { TODAY } from "./utils";

export function mapToRepresentationModel(modelItem) {
  const result = {
    label: modelItem.label
  };
  if (modelItem.due !== TODAY) {
    result.due = modelItem.due;
  }
  return result;
}
