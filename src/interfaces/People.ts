import {PeopleResponse} from "./PeopleResponse";

export type Person = Omit<
    PeopleResponse,
    | "id"
    | "password"
    | "gender"
    | "social_insurance_number"
    | "date_of_birth"
    | "address"
    | "credit_card"
    | "subscription"
    | "employment"
    > & {"status": boolean}

