import DateInput from "./inputs/date-input";
import Input from "./inputs/input";
import RangeInput from "./inputs/range-input";
import TextInput from "./inputs/text-input";
import Select from "./selects/select";

export type Controls = 
  Input
  | TextInput
  | RangeInput
  | DateInput
  | Select
;