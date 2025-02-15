import { Client } from "urql";

export type ICourierClientBasicParams = {
  client?: Client;
  clientKey?: string;
  userId?: string;
  clientSourceId?: string;
  userSignature?: string;
  apiUrl?: string;
};

export type ICourierClientJWTParams = {
  client?: Client;
  authorization: string;
  clientSourceId?: string;
  /** @deprecated (Not needed for JWT auth) */
  clientKey?: string;
  apiUrl?: string;
};

export type ICourierClientParams =
  | ICourierClientBasicParams
  | ICourierClientJWTParams;

export type CourierBasicHeaders = RequestInit["headers"] & {
  "x-courier-client-key": string;
  "x-courier-user-id": string;
  "x-courier-user-signature"?: string;
  "x-courier-client-source-id"?: string;
};

export type CourierJWTHeaders = RequestInit["headers"] & {
  authorization: string;
  "x-courier-client-source-id"?: string;

  /** @deprecated (Not needed for JWT auth) */
  "x-courier-client-key"?: string;
};
