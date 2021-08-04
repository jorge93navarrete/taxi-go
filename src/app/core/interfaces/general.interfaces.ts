import { EmployeeEntryModel } from "@core/models/classes/employeeEntry.model";
import { ClockType } from "@core/types";

export interface ClockMarkEvent {
   entry: EmployeeEntryModel;
   type: ClockType;
}
