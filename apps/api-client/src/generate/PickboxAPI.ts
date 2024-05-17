/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "pickbox.app" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title pickbox.app API
 * @version 0.0.1
 * @license AGPL-3.0 license (https://github.com/youking-lib/pickbox/blob/main/LICENSE.md)
 * @baseUrl pickbox.app
 * @contact pickbox.app Support <support@pickbox.app> (https://pickbox.app/api)
 *
 * pickbox.app.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  tokens = {
    /**
     * @description Create a token
     *
     * @tags Tokens
     * @name CreateToken
     * @summary Create a token
     * @request POST:/tokens
     * @secure
     */
    createToken: (
      data: {
        /** Expires at time */
        expires?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          token: string;
          expires: string | null;
          userId: string | null;
          createAt: string;
          updateAt: string;
        },
        | {
            error: {
              /**
               * A short code indicating the error code returned.
               * @example "bad_request"
               */
              code: "bad_request";
              /**
               * A human readable explanation of what went wrong.
               * @example "The requested resource was not found."
               */
              message: string;
              /**
               * A link to our documentation with more details about this error code
               * @example "https://pickbox.app/docs/api-reference/errors#bad-request"
               */
              doc_url?: string;
            };
          }
        | {
            error: {
              /**
               * A short code indicating the error code returned.
               * @example "unauthorized"
               */
              code: "unauthorized";
              /**
               * A human readable explanation of what went wrong.
               * @example "The requested resource was not found."
               */
              message: string;
              /**
               * A link to our documentation with more details about this error code
               * @example "https://pickbox.app/docs/api-reference/errors#unauthorized"
               */
              doc_url?: string;
            };
          }
        | {
            error: {
              /**
               * A short code indicating the error code returned.
               * @example "forbidden"
               */
              code: "forbidden";
              /**
               * A human readable explanation of what went wrong.
               * @example "The requested resource was not found."
               */
              message: string;
              /**
               * A link to our documentation with more details about this error code
               * @example "https://pickbox.app/docs/api-reference/errors#forbidden"
               */
              doc_url?: string;
            };
          }
        | {
            error: {
              /**
               * A short code indicating the error code returned.
               * @example "not_found"
               */
              code: "not_found";
              /**
               * A human readable explanation of what went wrong.
               * @example "The requested resource was not found."
               */
              message: string;
              /**
               * A link to our documentation with more details about this error code
               * @example "https://pickbox.app/docs/api-reference/errors#not-found"
               */
              doc_url?: string;
            };
          }
        | {
            error: {
              /**
               * A short code indicating the error code returned.
               * @example "conflict"
               */
              code: "conflict";
              /**
               * A human readable explanation of what went wrong.
               * @example "The requested resource was not found."
               */
              message: string;
              /**
               * A link to our documentation with more details about this error code
               * @example "https://pickbox.app/docs/api-reference/errors#conflict"
               */
              doc_url?: string;
            };
          }
        | {
            error: {
              /**
               * A short code indicating the error code returned.
               * @example "invite_expired"
               */
              code: "invite_expired";
              /**
               * A human readable explanation of what went wrong.
               * @example "The requested resource was not found."
               */
              message: string;
              /**
               * A link to our documentation with more details about this error code
               * @example "https://pickbox.app/docs/api-reference/errors#invite-expired"
               */
              doc_url?: string;
            };
          }
        | {
            error: {
              /**
               * A short code indicating the error code returned.
               * @example "unprocessable_entity"
               */
              code: "unprocessable_entity";
              /**
               * A human readable explanation of what went wrong.
               * @example "The requested resource was not found."
               */
              message: string;
              /**
               * A link to our documentation with more details about this error code
               * @example "https://pickbox.app/docs/api-reference/errors#unprocessable-entity"
               */
              doc_url?: string;
            };
          }
        | {
            error: {
              /**
               * A short code indicating the error code returned.
               * @example "rate_limit_exceeded"
               */
              code: "rate_limit_exceeded";
              /**
               * A human readable explanation of what went wrong.
               * @example "The requested resource was not found."
               */
              message: string;
              /**
               * A link to our documentation with more details about this error code
               * @example "https://pickbox.app/docs/api-reference/errors#rate-limit_exceeded"
               */
              doc_url?: string;
            };
          }
        | {
            error: {
              /**
               * A short code indicating the error code returned.
               * @example "internal_server_error"
               */
              code: "internal_server_error";
              /**
               * A human readable explanation of what went wrong.
               * @example "The requested resource was not found."
               */
              message: string;
              /**
               * A link to our documentation with more details about this error code
               * @example "https://pickbox.app/docs/api-reference/errors#internal-server_error"
               */
              doc_url?: string;
            };
          }
      >({
        path: `/tokens`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
